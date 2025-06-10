import { useState } from 'react'
import { Input, Button, Space } from 'antd'
import { FilterOutlined } from '@ant-design/icons'

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
    <Space.Compact style={{ display: 'flex', gap: '12px', alignItems: 'center', width: '100%' }}>
      <Search
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onSearch={handleSearch}
        style={{ 
          flex: 1,
          fontFamily: "'Sulphur Point', sans-serif",
          fontSize: '14px',
          letterSpacing: '1px',
        }}
        size="large"
      />
      
      {showFilter && (
        <Button
          type="default"
          icon={<FilterOutlined />}
          size="large"
          onClick={() => handleSearch()}
          style={{
            width: '48px',
            height: '48px',
            backgroundColor: '#f6f4f4',
            border: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      )}
    </Space.Compact>
  )
} 