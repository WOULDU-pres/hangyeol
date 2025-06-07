import { useState } from 'react'
import styles from './SearchSection.module.css'

interface SearchSectionProps {
  onSearch: (query: string) => void
}

export function SearchSection({ onSearch }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <div className={styles.searchInputWrapper}>
          <div className={styles.searchIcon}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="8" stroke="#ded7d7" strokeWidth="1"/>
              <path d="m17 17-4.35-4.35" stroke="#ded7d7" strokeWidth="1"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.searchInput}
          />
        </div>
        
        <button className={styles.filterButton} onClick={handleSearch}>
          <div className="filter-icon">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M3 9h16M7 3h8M1 15h12" stroke="#504949" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
} 