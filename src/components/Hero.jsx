import { useState } from 'react'
import SearchBar from './SearchBar.jsx'
import '../styles/hero.css'

function Hero({ onSearch, loading }) {
  return (
    <section className="hero">
      <h1 className="hero__heading">
        Every album.<br />
        Every <em className="hero__heading-accent">artist.</em>
      </h1>
      <p className="hero__sub">
        Search any artist to explore their complete discography —
        studio albums, EPs, singles, and more.
      </p>
      <SearchBar onSearch={onSearch} loading={loading} />
      <p className="hero__hint">
        Try: Linkin Park · Radiohead · Daft Punk
      </p>
    </section>
  )
}

export default Hero
