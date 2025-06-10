import { Button, Space } from 'antd'
import { HeartOutlined, TeamOutlined, TagOutlined } from '@ant-design/icons'
import { theme } from '../styles/theme'
import styles from './FilterButtons.module.css'
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
    <div className={styles.container}>
      <Space wrap className={styles.buttonSpace}>
        {filters.map((filter) => (
          <Button
            key={filter.id}
            type={filter.active ? 'primary' : 'default'}
            icon={getIcon(filter.id)}
            onClick={() => onFilterClick(filter.id)}
            className={`${styles.filterButton} ${
              filter.active ? styles.filterButtonActive : styles.filterButtonInactive
            }`}
            style={{
              backgroundColor: filter.active ? theme.primary : theme.white,
              color: filter.active ? theme.white : theme.primary,
            }}
          >
            {filter.label}
          </Button>
        ))}
      </Space>
    </div>
  )
} 