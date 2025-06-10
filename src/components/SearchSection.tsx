import { useState } from 'react'
import { Input, Button, Space } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { theme } from '../styles/theme'
import styles from './SearchSection.module.css'

const { Search } = Input

interface SearchSectionProps {
  onSearch: (query: string) => void
  placeholder?: string
  showFilter?: boolean
}

export function SearchSection({ onSearch, placeholder = 'Search', showFilter = true }: SearchSectionProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (value?: string) => {
    const query = value || searchQuery
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <Space.Compact className={styles.container}>
      <Search
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        className={styles.searchInput}
        size="large"
      />
      
      {showFilter && (
        <Button
          type="default"
          icon={<FilterOutlined />}
          size="large"
          onClick={() => handleSearch()}
          className={styles.filterButton}
          style={{
            backgroundColor: theme.background,
          }}
        />
      )}
    </Space.Compact>
  )
} 