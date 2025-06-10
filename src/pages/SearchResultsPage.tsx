import { useState, useEffect } from 'react'
import { Flex } from 'antd'
import { SearchSection } from '../components/SearchSection'
import { FilterButtons } from '../components/FilterButtons'
import { SearchProductGrid } from '../components/SearchProductGrid'
import { OrderUpdates } from '../components/OrderUpdates'
import { RecentlyViewed } from '../components/RecentlyViewed'
import { DiscoverBrands } from '../components/DiscoverBrands'
import { BottomNavigation } from '../components/BottomNavigation'
import { AIRecommendation } from '../components/AIRecommendation'
import { AIButton } from '../components/AIButton'
import { 
  filterButtons, 
  orderUpdates, 
  recentlyViewed, 
  discoverBrands 
} from '../data/searchMockData'
import { theme } from '../styles/theme'
import styles from './SearchResultsPage.module.css'
import type { FilterType } from '../types/SearchTypes'
import type { AIRecommendedProduct } from '../types/Product'
import { getAIRecommendation, getDefaultRecommendation } from '../services/agentforceApi'
import { shouldShowDefaultRecommendation } from '../utils/devConfig'

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

  // 페이지 로드 시 기본 추천 상품 표시 (로딩 없이)
  useEffect(() => {
    // 개발 환경에서만 기본 추천 상품 표시
    if (shouldShowDefaultRecommendation()) {
      const defaultRecommendation = getDefaultRecommendation()
      if (defaultRecommendation.success && defaultRecommendation.data) {
        setAiRecommendation(defaultRecommendation.data)
        setShowAiRecommendation(true)
      }
    }
  }, [])

  // searchQuery가 있을 때 자동으로 검색 결과 표시
  useEffect(() => {
    if (searchQuery && searchQuery.trim()) {
      setShowProductGrid(true)
      fetchAIRecommendation(searchQuery)
    }
  }, [searchQuery])

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
      <div className={styles.searchContainer}>
        <Flex className={styles.searchWrapper}>
          <div className={styles.searchInputWrapper}>
            <SearchSection 
              onSearch={handleSearch}
              placeholder={currentQuery}
              showFilter={false}
            />
          </div>
          
          <AIButton />
        </Flex>
      </div>

      {/* Filter Buttons */}
      <FilterButtons 
        filters={filtersWithActiveState} 
        onFilterClick={handleFilterClick}
      />

      {/* AI 추천 상품 섹션 */}
      {showAiRecommendation && (
        <AIRecommendation
          product={aiRecommendation}
          loading={aiLoading}
          error={aiError}
          onProductClick={handleAIProductClick}
          onNavigate={handleNavigate}
        />
      )}

      {/* 제품 그리드 */}
      {showProductGrid && (
        <SearchProductGrid 
          searchQuery={currentQuery}
          onProductClick={handleProductClick} 
        />
      )}

      {/* Order Updates */}
      <OrderUpdates orders={orderUpdates} />

      {/* Recently Viewed */}
      <RecentlyViewed items={recentlyViewed} />

      {/* Discover Brands */}
      <DiscoverBrands brands={discoverBrands} />

      {/* Bottom Navigation */}
      <BottomNavigation onNavigate={handleNavigate} />
    </div>
  )
} 