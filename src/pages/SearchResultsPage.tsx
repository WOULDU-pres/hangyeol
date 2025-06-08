import { useState } from 'react'
import { Button, Space, Flex } from 'antd'
import { RobotOutlined } from '@ant-design/icons'
import { Header } from '../components/Header'
import { SearchSection } from '../components/SearchSection'
import { FilterButtons } from '../components/FilterButtons'
import { SearchProductGrid } from '../components/SearchProductGrid'
import { OrderUpdates } from '../components/OrderUpdates'
import { RecentlyViewed } from '../components/RecentlyViewed'
import { DiscoverBrands } from '../components/DiscoverBrands'
import { BottomNavigation } from '../components/BottomNavigation'
import { 
  filterButtons, 
  orderUpdates, 
  recentlyViewed, 
  discoverBrands 
} from '../data/searchMockData'
import type { FilterType } from '../types/SearchTypes'
import { RiRobot3Line } from 'react-icons/ri'

interface SearchResultsPageProps {
  searchQuery?: string
  onBack?: () => void
}

export function SearchResultsPage({ searchQuery = 'Search', onBack }: SearchResultsPageProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [currentQuery, setCurrentQuery] = useState(searchQuery)
  const [showProductGrid, setShowProductGrid] = useState(false)

  const handleFilterClick = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const handleSearch = (query: string) => {
    setCurrentQuery(query)
    setShowProductGrid(true)
  }

  const handleProductClick = (productId: string) => {
    console.log('Product clicked:', productId)
    setShowProductGrid(false)
  }

  const handleNavigate = (route: string) => {
    console.log('Navigate to:', route)
    if (route === 'home' && onBack) {
      onBack()
    }
  }

  const filtersWithActiveState: FilterType[] = filterButtons.map(filter => ({
    ...filter,
    active: activeFilters.includes(filter.id)
  }))

  return (
    <div>

      {/* Search Bar + Filter Button in one line */}
      <div style={{ padding: '14px 14px'}}>
        <Flex gap={12} align="center">
          <div style={{ flex: 1 }}>
            <SearchSection 
              onSearch={handleSearch}
              placeholder={currentQuery}
              showFilter={false}
            />
          </div>
          
          <Button
            type="default"
            icon={<RiRobot3Line size={24} />}
            size="large"
            aria-label="AI search assistant"
            style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#f6f4f4',
              border: 'none',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: '#504949',
            }}
          />
        </Flex>
      </div>

      {/* Filter Buttons */}
      <FilterButtons 
        filters={filtersWithActiveState} 
        onFilterClick={handleFilterClick}
      />

      <main>
        {/* Order Updates */}
        <OrderUpdates orders={orderUpdates} />

        {/* Recently Viewed */}
        <RecentlyViewed items={recentlyViewed} />

        {/* Discover Brands */}
        <DiscoverBrands brands={discoverBrands} />
      </main>

      {/* Search Product Grid - 조건부 표시 */}
      {showProductGrid && (
        <SearchProductGrid onProductClick={handleProductClick} />
      )}

      <BottomNavigation onNavigate={handleNavigate} />
    </div>
  )
} 