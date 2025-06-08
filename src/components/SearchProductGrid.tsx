import { Row, Col, Card, Typography, Rate, Space } from 'antd'

const { Text, Title } = Typography

interface SearchProductGridProps {
  onProductClick?: (productId: string) => void
}

const gridProducts = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=100&h=100&fit=crop&crop=center',
    name: 'DRMTLGY',
    brand: 'DRMTLGY',
    rating: 4.6,
    reviewCount: 25284
  },
  {
    id: '2', 
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=100&h=100&fit=crop&crop=center',
    name: 'Laura Geller Beauty',
    brand: 'LAURA GELLER',
    rating: 4.4,
    reviewCount: 29042
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=100&h=100&fit=crop&crop=center',
    name: 'Skincare Product',
    brand: 'BEAUTY',
    rating: 4.5,
    reviewCount: 15620
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
    name: 'Face Cream',
    brand: 'SKINCARE',
    rating: 4.3,
    reviewCount: 8420
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=100&fit=crop&crop=center',
    name: 'Serum',
    brand: 'PREMIUM',
    rating: 4.7,
    reviewCount: 12340
  }
]

export function SearchProductGrid({ onProductClick }: SearchProductGridProps) {
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1000,
        padding: '20px',
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '20px',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
      >
        <Row gutter={[14, 14]}>
          {gridProducts.map((product) => (
            <Col span={12} key={product.id}>
              <Card
                hoverable
                onClick={() => onProductClick?.(product.id)}
                cover={
                  <div style={{ 
                    height: '120px', 
                    overflow: 'hidden',
                    backgroundColor: '#f6eded',
                  }}>
                    <img 
                      src={product.image} 
                      alt={product.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                }
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                }}
                bodyStyle={{ padding: '12px' }}
              >
                <Space direction="vertical" size={4} style={{ width: '100%' }}>
                  <Text 
                    strong 
                    style={{ 
                      fontSize: '12px',
                      color: '#504949',
                      fontFamily: "'Sulphur Point', sans-serif",
                    }}
                  >
                    {product.brand}
                  </Text>
                  
                  <Title 
                    level={5} 
                    style={{ 
                      margin: 0,
                      fontSize: '14px',
                      fontFamily: "'Sulphur Point', sans-serif",
                    }}
                  >
                    {product.name}
                  </Title>
                  
                  <Space align="center" size={4}>
                    <Text style={{ fontSize: '12px', fontWeight: 'bold' }}>
                      {product.rating}
                    </Text>
                    <Rate disabled defaultValue={1} count={1} style={{ fontSize: '12px' }} />
                    <Text 
                      type="secondary" 
                      style={{ fontSize: '10px' }}
                    >
                      ({product.reviewCount.toLocaleString()})
                    </Text>
                  </Space>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  )
} 