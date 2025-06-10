import { useState, useMemo } from 'react'
import { Row, Col, Typography, Space, Empty, Button, Flex } from 'antd'

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
  const [isSearching, setIsSearching] = useState(false)

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

  const handleSearch = async (query: string) => {
    if (!query.trim()) return
    
    setIsSearching(true)
    setSearchQuery(query)
    
    // 3초 동안 로딩 표시
    setTimeout(() => {
      setIsSearching(false)
      onSearch(query)
    }, 3000)
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

  // 로딩 상태일 때의 UI
  if (isSearching) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#FAFAFA',
        padding: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px'
        }}>
          <RiRobot3Line 
            size={48} 
            style={{ 
              color: '#504949',
              animation: 'pulse 2s infinite'
            }} 
          />
          <Title level={2} style={{
            margin: 0,
            color: '#504949',
            fontSize: '24px',
            fontFamily: "'Sulphur Point', sans-serif"
          }}>
            한결이 추천할 물건을 고르고 있어요 :)
          </Title>
        </div>
        
        {/* 물결 애니메이션 */}
        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'flex-end'
        }}>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              style={{
                width: '8px',
                height: '8px',
                backgroundColor: '#504949',
                borderRadius: '50%',
                animation: `wave 1.4s ease-in-out ${i * 0.1}s infinite`
              }}
            />
          ))}
        </div>
        
        <style>
          {`
            @keyframes pulse {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.1); }
            }
            @keyframes wave {
              0%, 60%, 100% { transform: translateY(0); }
              30% { transform: translateY(-20px); }
            }
          `}
        </style>
      </div>
    )
  }

  return (
    <div>
      <Header userName="지원" />
      
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
              aria-label="한결이에게 물어보기"
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
                많이 사랑받는 제품들
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
                모두 보기
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
                  "{searchQuery}"에 맞는 제품을 찾지 못했어요 😢
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