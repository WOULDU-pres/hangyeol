import { Button, Space } from 'antd'
import { HeartOutlined, TeamOutlined, TagOutlined } from '@ant-design/icons'
import type { FilterType } from '../types/SearchTypes'

interface FilterButtonsProps {
  filters: FilterType[]
  onFilterClick: (filterId: string) => void
}

export function FilterButtons({ filters, onFilterClick }: FilterButtonsProps) {
  const getIcon = (filterId: string) => {
    switch (filterId) {
      case 'favorites':
        return <HeartOutlined />
      case 'following':
        return <TeamOutlined />
      case 'on-sale':
        return <TagOutlined />
      default:
        return null
    }
  }

  return (
    <div style={{ padding: '0 14px', marginBottom: '20px' }}>
      <Space wrap>
        {filters.map((filter) => (
          <Button
            key={filter.id}
            type={filter.active ? 'primary' : 'default'}
            icon={getIcon(filter.id)}
            onClick={() => onFilterClick(filter.id)}
            style={{
              borderRadius: '20px',
              height: '36px',
              fontSize: '12px',
              fontFamily: "'Sulphur Point', sans-serif",
              fontWeight: 600,
              border: filter.active ? 'none' : '1px solid #e6e6e6',
              backgroundColor: filter.active ? '#504949' : '#ffffff',
              color: filter.active ? '#ffffff' : '#504949',
            }}
          >
            {filter.label}
          </Button>
        ))}
      </Space>
    </div>
  )
} 