import { useState, useMemo } from 'react'
import Hero from '../components/Hero.jsx'
import { useDiscography } from '../hooks/useDiscography.js'
import { ALBUM_TYPES, SORT_OPTIONS } from '../utils/constants.js'
import { sortAlbums, filterAlbums, initials } from '../utils/helpers.js'
import '../styles/home.css'

const VinylIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.75">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const SpinnerDots = () => (
  <div className="spinner" aria-label="Loading">
    <span /><span /><span />
  </div>
)

const AlbumCover = ({ src, name }) => {
  const [errored, setErrored] = useState(false)

  if (!src || errored) {
    return (
      <div className="album-card__cover-placeholder">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.2" opacity="0.4">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1.5" fill="var(--accent)" stroke="none" />
        </svg>
      </div>
    )
  }

  return (
    <img
      className="album-card__cover-img"
      src={src}
      alt={name}
      onError={() => setErrored(true)}
    />
  )
}

const AlbumCard = ({ album }) => (
  <article className="album-card">
    <div className="album-card__glow" aria-hidden="true" />
    <div className="album-card__cover">
      <AlbumCover src={album.cover} name={album.name} />
      <span className="album-card__type-badge">
        {album.type}
      </span>
    </div>
    <div className="album-card__body">
      <h3 className="album-card__title" title={album.name}>{album.name}</h3>
      <p className="album-card__year">{album.year}</p>
      <div className="album-card__footer">
        <span className="album-card__tracks">
          {album.tracks} track{album.tracks !== 1 ? 's' : ''}
        </span>
        {album.spotify && (
          <a
            className="album-card__spotify"
            href={album.spotify}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${album.name} on Spotify`}
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Spotify
          </a>
        )}
      </div>
    </div>
  </article>
)

function Home({ onSearch, artist, albums, loading, error, hasSearched }) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [activeSort, setActiveSort] = useState('newest')

  const filtered = useMemo(
    () => sortAlbums(filterAlbums(albums, activeFilter), activeSort),
    [albums, activeFilter, activeSort]
  )

  const countFor = (type) =>
    type === 'all' ? albums.length : albums.filter((a) => a.type === type).length

  return (
    <main className="home">
      <Hero onSearch={onSearch} loading={loading} />

      <div className="home__results">
        {loading && (
          <div className="home__state">
            <SpinnerDots />
            <p className="home__state-title">Searching discography…</p>
          </div>
        )}

        {!loading && error && (
          <div className="home__state">
            <svg className="home__state-icon" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="13" />
              <circle cx="12" cy="16.5" r="0.6" fill="currentColor" />
            </svg>
            <p className="home__state-title">Nothing found</p>
            <p className="home__state-sub">{error}</p>
          </div>
        )}

        {!loading && !error && artist && (
          <>
            <div className="home__artist-header">
              <div className="home__artist-avatar">
                {initials(artist.name)}
              </div>
              <div>
                <h2 className="home__artist-name">{artist.name}</h2>
                <p className="home__artist-meta">
                  {artist.followers} followers · {albums.length} releases
                </p>
              </div>
            </div>

            <div className="home__controls">
              <div className="home__filters" role="group" aria-label="Filter by type">
                {ALBUM_TYPES.map((t) => (
                  <button
                    key={t.value}
                    className={`home__filter-tab${activeFilter === t.value ? ' home__filter-tab--active' : ''}`}
                    onClick={() => setActiveFilter(t.value)}
                    aria-pressed={activeFilter === t.value}
                  >
                    {t.label}
                    {t.value !== 'all' && (
                      <span className="home__filter-count">{countFor(t.value)}</span>
                    )}
                  </button>
                ))}
              </div>

              <div className="home__sort-wrap">
                <select
                  className="home__sort-select"
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                  aria-label="Sort albums"
                >
                  {SORT_OPTIONS.map((s) => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <span className="home__sort-chevron" aria-hidden="true">▾</span>
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="home__state">
                <p className="home__state-title">No {activeFilter}s in this discography</p>
                <p className="home__state-sub">Try a different filter.</p>
              </div>
            ) : (
              <>
                <p className="home__section-label">
                  {activeFilter === 'all' ? 'All releases' : `${activeFilter}s`}
                  <span className="home__section-count">{filtered.length}</span>
                </p>
                <div className="home__grid">
                  {filtered.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {!loading && !error && !artist && !hasSearched && (
          <div className="home__idle">
            <VinylIcon />
          </div>
        )}
      </div>
    </main>
  )
}

export default Home
