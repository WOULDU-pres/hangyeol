import { useState, useMemo } from 'react'
import { Row, Col, Typography, Space, Empty, Flex } from 'antd'
import { Header } from '../components/Header.tsx'
import { SearchSection } from '../components/SearchSection.tsx'
import { CategoryTabs } from '../components/CategoryTabs.tsx'
import { ProductCard } from '../components/ProductCard.tsx'
import { BottomNavigation } from '../components/BottomNavigation.tsx'
import { AIButton } from '../components/AIButton.tsx'
import { mockProducts } from '../data/mockProducts.ts'
import { theme } from '../styles/theme'
import styles from './MainPage.module.css'
import type { Product } from '../types/Product.ts'

const { Title, Text } = Typography

interface MainPageProps {
  onSearch: (query: string) => void
  onSearchInputClick: () => void
  onNavigate: (route: string) => void
}

export function MainPage({ onSearch, onSearchInputClick, onNavigate }: MainPageProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let products = mockProducts

    // Filter by category
    if (activeCategory !== 'all') {
      const categoryMap: Record<string, string> = {
        face: '페이스 케어',
        body: '바디 케어',
        hair: '헤어 케어'
      }
      products = products.filter(product => 
        product.category === categoryMap[activeCategory]
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return products
  }, [activeCategory, searchQuery])

  const featuredProducts = useMemo(() => 
    mockProducts.filter(product => product.featured),
    []
  )

  const gridProducts = useMemo(() =>
    filteredProducts.filter(product => !product.featured).slice(0, 2),
    [filteredProducts]
  )

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setSearchQuery('') // Clear search when changing category
  }

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product)
    // TODO: Navigate to product detail page
  }

  const handleFilterClick = () => {
    console.log('Filter clicked')
    // TODO: Implement filter functionality
  }

  const handleMainPageSearch = (query: string) => {
    setSearchQuery(query)  // Update local state for filtering
    onSearch(query)        // Navigate to SearchResultsPage
  }

  return (
    <div>
      <Header userName="지원" />
      
      <main>
        <div className={styles.searchContainer}>
          <Flex className={styles.searchWrapper}>
            <div className={styles.searchInputWrapper} onClick={onSearchInputClick}>
              <SearchSection onSearch={handleMainPageSearch} showFilter={false} />
            </div>
            
            <AIButton onClick={handleFilterClick} />
          </Flex>
        </div>
        
        <CategoryTabs onCategoryChange={handleCategoryChange} />
        
        {/* Product Grid Section */}
        {gridProducts.length > 0 && (
          <div className={styles.productGridSection}>
            <Row gutter={[14, 14]}>
              {gridProducts.map((product) => (
                <Col span={12} key={product.id}>
                  <ProductCard
                    product={product}
                    variant="grid"
                    onClick={handleProductClick}
                  />
                </Col>
              ))}
            </Row>
          </div>
        )}
        
        {/* Popular Products Section */}
        {featuredProducts.length > 0 && (
          <div className={styles.popularSection}>
            <Space direction="vertical" size={16} style={{ width: '100%' }}>
              <Title level={3} className={styles.sectionTitle}>
                인기 제품
              </Title>
              
              <div className={styles.verticalProductList}>
                {featuredProducts.map((product) => (
                  <div key={product.id} className={styles.productCardWrapper}>
                    <ProductCard
                      product={product}
                      variant="list"
                      onClick={handleProductClick}
                    />
                  </div>
                ))}
              </div>
            </Space>
          </div>
        )}

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className={styles.emptyState}>
            <Empty
              description={
                <Text className={styles.emptyText}>
                  검색 결과가 없습니다
                </Text>
              }
            />
          </div>
        )}
      </main>

      <BottomNavigation onNavigate={onNavigate} />
    </div>
  )
} 