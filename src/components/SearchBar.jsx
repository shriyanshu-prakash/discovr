import { useState } from 'react'
import '../styles/searchBar.css'

function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('')

  const handleSubmit = () => {
    if (query.trim() && !loading) {
      onSearch(query)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSubmit()
  }

  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        placeholder="Search artist…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
        aria-label="Search for an artist"
      />
      <button
        className="search-bar__btn"
        onClick={handleSubmit}
        disabled={loading || !query.trim()}
        aria-label="Search"
      >
        {loading ? '…' : 'Search'}
      </button>
    </div>
  )
}

export default SearchBar
