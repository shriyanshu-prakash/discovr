import { useState, useCallback } from 'react'
import { searchArtist } from '../services/spotifyService.js'

/**
 * useDiscography
 * Encapsulates all search + state logic for an artist's discography.
 * Can be used in any component that needs search functionality.
 *
 * @returns {{ artist, albums, loading, error, hasSearched, search }}
 */
export function useDiscography() {
  const [artist, setArtist] = useState(null)
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasSearched, setHasSearched] = useState(false)

  const search = useCallback(async (query) => {
    if (!query?.trim()) return

    setLoading(true)
    setError(null)
    setArtist(null)
    setAlbums([])
    setHasSearched(true)

    try {
      const result = await searchArtist(query.trim())
      setArtist(result.artist)
      setAlbums(result.albums)
    } catch (err) {
      setError(err.message || `Couldn't find "${query}". Try a different spelling.`)
    } finally {
      setLoading(false)
    }
  }, [])

  return { artist, albums, loading, error, hasSearched, search }
}
