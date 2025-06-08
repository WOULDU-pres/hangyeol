import { useState, useMemo } from 'react'
import { Row, Col, Typography, Space, Empty, Button, Flex } from 'antd'
import { StarOutlined } from '@ant-design/icons'
import { Header } from '../components/Header.tsx'
import { SearchSection } from '../components/SearchSection.tsx'
import { CategoryTabs } from '../components/CategoryTabs.tsx'
import { ProductCard } from '../components/ProductCard.tsx'
import { BottomNavigation } from '../components/BottomNavigation.tsx'
import { mockProducts } from '../data/mockProducts.ts'
import type { Product } from '../types/Product.ts'
import { RiRobot3Line } from 'react-icons/ri'

const { Title, Text } = Typography

interface MainPageProps {
  onSearch: (query: string) => void
  onNavigate: (route: string) => void
}

export function MainPage({ onSearch, onNavigate }: MainPageProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let products = mockProducts

    // Filter by category
    if (activeCategory !== 'all') {
      const categoryMap: Record<string, string> = {
        face: 'Face Care',
        body: 'Body Care',
        hair: 'Hair Care'
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

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      onSearch(query)
    }
  }

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

  return (
    <div>
      <Header userName="User" />
      
      <main>
        <div style={{ padding: '0 14px', marginBottom: '30px' }}>
          <Flex gap={12} align="center">
            <div style={{ flex: 1 }}>
              <SearchSection onSearch={handleSearch} showFilter={false} />
            </div>
            
            <Button
              type="default"
              icon={<RiRobot3Line size={24} />}
              size="large"
              onClick={handleFilterClick}
              aria-label="Open filter options"
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
        
        <CategoryTabs onCategoryChange={handleCategoryChange} />
        
        {/* Product Grid Section */}
        {gridProducts.length > 0 && (
          <div style={{ padding: '0 14px', marginBottom: '30px' }}>
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
          <div style={{ padding: '0 14px', marginBottom: '30px' }}>
            <div 
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '16px',
              }}
            >
              <Title 
                level={4} 
                style={{ 
                  margin: 0,
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#2d2d2d',
                }}
              >
                Popular Products
              </Title>
              <Text 
                style={{ 
                  color: '#504949',
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                See All
              </Text>
            </div>
            
            <Space direction="vertical" size="middle" style={{ width: '100%' }}>
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="list"
                  onClick={handleProductClick}
                />
              ))}
            </Space>
          </div>
        )}
        
        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div style={{ padding: '40px 14px', textAlign: 'center' }}>
            <Empty
              description={
                <Text style={{ color: '#888888' }}>
                  No products found for "{searchQuery}" in {activeCategory === 'all' ? 'all categories' : activeCategory}
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