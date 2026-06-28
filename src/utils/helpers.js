/**
 * Generate 2-character initials from an artist name.
 * @param {string} name
 * @returns {string}
 */
export function initials(name = '') {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return (words[0][0] + words[1][0]).toUpperCase()
}

/**
 * Filter albums by type.
 * @param {object[]} albums
 * @param {string} filter  'all' | 'album' | 'single' | 'ep' | 'compilation'
 * @returns {object[]}
 */
export function filterAlbums(albums, filter) {
  if (filter === 'all') return albums
  return albums.filter((a) => a.type === filter)
}

/**
 * Sort albums.
 * @param {object[]} albums
 * @param {'newest'|'oldest'|'alpha'} sort
 * @returns {object[]}
 */
export function sortAlbums(albums, sort) {
  const copy = [...albums]
  if (sort === 'newest') return copy.sort((a, b) => b.year - a.year)
  if (sort === 'oldest') return copy.sort((a, b) => a.year - b.year)
  if (sort === 'alpha') return copy.sort((a, b) => a.name.localeCompare(b.name))
  return copy
}

/**
 * Format a large number into a compact follower string.
 * @param {number} n
 * @returns {string}
 */
export function formatFollowers(n) {
  if (!n || isNaN(n)) return 'Unknown'
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}
