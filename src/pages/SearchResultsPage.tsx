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
import { themeProducts as sharedThemeProducts } from '../data/themeProducts'

// 테마별 키워드 매핑
const themeKeywords = {
  forest: ['자연친화', '천연', '숲', '나무', '허브', '유기농', '친환경', '바이오', '자연', '자연적인'],
  spring: ['봄', '꽃', '벚꽃', '장미', '향기', '로맨틱', '핑크', '달콤한', '산뜻한'],
  cool: ['시원한', '쿨링', '민트', '상쾌한', '청량', '얼음', '알로에', '시원', '청아한'],
  warm: ['따뜻한', '포근한', '웜', '가을', '오렌지', '골드', '버터', '카카오', '따듯한']
}

// 테마별 제품 데이터 (공통 데이터에 id와 image 필드 추가)
const themeProducts = {
  forest: {
    id: 'forest-product',
    ...sharedThemeProducts.forest,
    image: '/src/assets/forest_style_cosmetics (3).jpg'
  },
  spring: {
    id: 'spring-product',
    ...sharedThemeProducts.spring,
    image: '/src/assets/spring_style_cosmetics (1).jpg'
  },
  cool: {
    id: 'cool-product',
    ...sharedThemeProducts.cool,
    image: '/src/assets/cool_style_cosmetics.png'
  },
  warm: {
    id: 'warm-product',
    ...sharedThemeProducts.warm,
    image: '/src/assets/warm_style_cosmetics.png'
  }
}

// 검색어에서 테마 감지
const detectThemeFromQuery = (query: string): keyof typeof themeKeywords | null => {
  const lowerQuery = query.toLowerCase()
  
  for (const [theme, keywords] of Object.entries(themeKeywords)) {
    if (keywords.some(keyword => lowerQuery.includes(keyword))) {
      return theme as keyof typeof themeKeywords
    }
  }
  
  return null
}

interface SearchResultsPageProps {
  searchQuery?: string
  onBack?: () => void
  onNavigate?: (route: string, theme?: keyof typeof themeKeywords) => void
}

export function SearchResultsPage({ searchQuery = 'Search', onBack, onNavigate }: SearchResultsPageProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [currentQuery, setCurrentQuery] = useState(searchQuery)
  const [showProductGrid, setShowProductGrid] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themeKeywords>('forest')
  
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
      // 검색어에서 테마 감지
      const detectedTheme = detectThemeFromQuery(query)
      
      if (detectedTheme && themeProducts[detectedTheme]) {
        // 테마가 감지된 경우에도 동일한 딜레이 적용 (1초)
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 테마 설정
        setCurrentTheme(detectedTheme)
        // 테마별 제품 반환
        const themeProduct = themeProducts[detectedTheme]
        setAiRecommendation(themeProduct as AIRecommendedProduct)
      } else {
        // 기본 API 호출
        const response = await getAIRecommendation(query)
        
        if (response.success && response.data) {
          setAiRecommendation(response.data)
        } else {
          setAiError(response.error || 'AI 추천을 불러올 수 없습니다.')
        }
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
    // AI 추천 상품 클릭 시 테마와 함께 상세페이지로 이동
    if (onNavigate) {
      onNavigate('productDetail', currentTheme)
    }
  }

  const handleNavigate = (route: string, theme?: keyof typeof themeKeywords) => {
    console.log('Navigate to:', route)
    if (route === 'home' && onBack) {
      onBack()
    } else if (onNavigate) {
      onNavigate(route, theme)
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
          themeType={currentTheme}
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