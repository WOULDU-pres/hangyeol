import { useState, useEffect } from 'react'
import { Button, Flex } from 'antd'
import { SearchSection } from '../components/SearchSection'
import { FilterButtons } from '../components/FilterButtons'
import { SearchProductGrid } from '../components/SearchProductGrid'
import { OrderUpdates } from '../components/OrderUpdates'
import { RecentlyViewed } from '../components/RecentlyViewed'
import { DiscoverBrands } from '../components/DiscoverBrands'
import { BottomNavigation } from '../components/BottomNavigation'
import { AIRecommendation } from '../components/AIRecommendation'
import { 
  filterButtons, 
  orderUpdates, 
  recentlyViewed, 
  discoverBrands 
} from '../data/searchMockData'
import type { FilterType } from '../types/SearchTypes'
import type { AIRecommendedProduct } from '../types/Product'
import { getAIRecommendation, getDefaultRecommendation } from '../services/agentforceApi'
import { shouldShowDefaultRecommendation } from '../utils/devConfig'
import { RiRobot3Line } from 'react-icons/ri'

interface SearchResultsPageProps {
  searchQuery?: string
  onBack?: () => void
  onNavigate?: (route: string) => void
}

export function SearchResultsPage({ searchQuery = 'Search', onBack, onNavigate }: SearchResultsPageProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [currentQuery, setCurrentQuery] = useState(searchQuery)
  const [showProductGrid, setShowProductGrid] = useState(false)
  
  // AI 추천 상품 관련 상태
  const [aiRecommendation, setAiRecommendation] = useState<AIRecommendedProduct | null>(null)
  const [aiLoading, setAiLoading] = useState(false)
  const [aiError, setAiError] = useState<string | null>(null)
  const [showAiRecommendation, setShowAiRecommendation] = useState(shouldShowDefaultRecommendation())

  // 개발 환경에서만 페이지 로드 시 기본 추천 상품 표시
  // TODO: 실제 API 연결 시 이 useEffect 제거
  useEffect(() => {
    if (shouldShowDefaultRecommendation()) {
      const defaultRecommendation = getDefaultRecommendation()
      if (defaultRecommendation.success && defaultRecommendation.data) {
        setAiRecommendation(defaultRecommendation.data)
        setShowAiRecommendation(true)
      }
    }
  }, [])

  const handleFilterClick = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId)
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const handleSearch = async (query: string) => {
    setCurrentQuery(query)
    setShowProductGrid(true)
    
    // AI 추천 상품 요청
    await fetchAIRecommendation(query)
  }

  // AI 추천 상품 가져오기
  const fetchAIRecommendation = async (query: string) => {
    setAiLoading(true)
    setAiError(null)
    setShowAiRecommendation(true)
    
    try {
      const response = await getAIRecommendation(query)
      
      if (response.success && response.data) {
        setAiRecommendation(response.data)
      } else {
        setAiError(response.error || 'AI 추천을 불러올 수 없습니다.')
      }
    } catch (error) {
      setAiError('네트워크 오류가 발생했습니다.')
    } finally {
      setAiLoading(false)
    }
  }

  const handleProductClick = (productId: string) => {
    console.log('Product clicked:', productId)
    setShowProductGrid(false)
  }

  const handleAIProductClick = (productId: string) => {
    console.log('AI recommended product clicked:', productId)
    // AI 추천 상품 클릭 시 추가 로직 (필요시)
  }

  const handleNavigate = (route: string) => {
    console.log('Navigate to:', route)
    if (route === 'home' && onBack) {
      onBack()
    } else if (onNavigate) {
      onNavigate(route)
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

      {/* AI 추천 상품 - 최상단에 표시 */}
      {showAiRecommendation && (
        <AIRecommendation
          product={aiRecommendation}
          loading={aiLoading}
          error={aiError}
          onProductClick={handleAIProductClick}
          onNavigate={handleNavigate}
        />
      )}

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