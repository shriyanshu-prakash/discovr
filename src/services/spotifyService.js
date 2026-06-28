/**
 * spotifyService.js
 *
 * Handles all artist + discography data fetching.
 *
 * Strategy:
 *   1. Try the Spotify Web API (client credentials flow).
 *   2. If no Spotify credentials are configured, fall back to the
 *      Claude AI API to generate a best-effort discography.
 *   3. For known demo artists, return pre-baked data instantly.
 *
 * Environment variables (set in .env.local):
 *   VITE_SPOTIFY_CLIENT_ID
 *   VITE_SPOTIFY_CLIENT_SECRET
 */

import { DEMO_DATA } from '../utils/constants.js'

// ─── Spotify ────────────────────────────────────────────────────────────────

let _spotifyToken = null
let _tokenExpiry = 0

async function getSpotifyToken() {
  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET

  if (!clientId || !clientSecret) return null

  if (_spotifyToken && Date.now() < _tokenExpiry) return _spotifyToken

  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  })

  if (!res.ok) return null

  const data = await res.json()
  _spotifyToken = data.access_token
  _tokenExpiry = Date.now() + (data.expires_in - 60) * 1000
  return _spotifyToken
}

async function spotifySearch(query) {
  const token = await getSpotifyToken()
  if (!token) return null

  // 1. Find artist
  const artistRes = await fetch(
    `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=artist&limit=1`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  if (!artistRes.ok) return null

  const artistData = await artistRes.json()
  const artists = artistData.artists?.items
  if (!artists?.length) return null

  const sp = artists[0]

  // 2. Fetch albums
  const albumsRes = await fetch(
    `https://api.spotify.com/v1/artists/${sp.id}/albums?include_groups=album,single,compilation&market=US&limit=50`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  if (!albumsRes.ok) return null

  const albumsData = await albumsRes.json()

  const albums = albumsData.items.map((a) => ({
    id: a.id,
    name: a.name,
    year: parseInt(a.release_date?.slice(0, 4), 10) || 0,
    type: a.album_type === 'single' && a.total_tracks >= 4 ? 'ep' : a.album_type,
    tracks: a.total_tracks,
    cover: a.images?.[1]?.url || a.images?.[0]?.url || '',
    spotify: a.external_urls?.spotify || '',
  }))

  const followers = formatFollowers(sp.followers?.total)

  return {
    artist: {
      name: sp.name,
      followers,
      id: sp.id,
    },
    albums,
  }
}

function formatFollowers(n) {
  if (!n) return 'Unknown'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}

// ─── Claude AI fallback ──────────────────────────────────────────────────────

async function claudeFallback(query) {
  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 1000,
      messages: [
        {
          role: 'user',
          content: `Return a JSON object for the music artist "${query}".
Fields required:
- name: string
- followers: approx string like "5.2M"
- albums: array of objects, each with:
    id (string), name (string), year (number), type ("album"|"single"|"ep"|"compilation"),
    tracks (number), cover (public Wikipedia/CDN image URL or empty string),
    spotify (Spotify album URL or empty string)

List their main studio albums, notable singles, EPs and compilations.
Return ONLY valid JSON. No markdown fences, no explanation.`,
        },
      ],
    }),
  })

  if (!res.ok) throw new Error(`API error ${res.status}`)

  const data = await res.json()
  const raw = data.content.map((c) => c.text || '').join('')
  const clean = raw.replace(/```json|```/g, '').trim()
  const parsed = JSON.parse(clean)

  return {
    artist: {
      name: parsed.name,
      followers: parsed.followers || 'Unknown',
    },
    albums: parsed.albums || [],
  }
}

// ─── Public API ──────────────────────────────────────────────────────────────

/**
 * searchArtist
 * Main entry point. Returns { artist, albums }.
 * Tries demo data → Spotify → Claude AI in order.
 *
 * @param {string} query
 * @returns {Promise<{ artist: object, albums: object[] }>}
 */
export async function searchArtist(query) {
  // Demo data (instant, no API needed)
  const demoKey = query.toLowerCase()
  if (DEMO_DATA[demoKey]) {
    await new Promise((r) => setTimeout(r, 600)) // simulate latency
    return DEMO_DATA[demoKey]
  }

  // Spotify (real data, requires env vars)
  try {
    const spotify = await spotifySearch(query)
    if (spotify) return spotify
  } catch {
    // fall through to Claude
  }

  // Claude AI fallback
  try {
    return await claudeFallback(query)
  } catch {
    throw new Error(
      `Couldn't find "${query}". Check the spelling or try a more well-known artist.`
    )
  }
}
