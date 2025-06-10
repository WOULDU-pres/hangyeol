import { Card, Rate, Typography } from 'antd'
import forestImage1 from '../assets/forest_style_cosmetics (1).jpg'
import forestImage2 from '../assets/forest_style_cosmetics (2).jpg'
import forestImage3 from '../assets/forest_style_cosmetics (3).jpg'
import pinkImage1 from '../assets/pink_style_cosmetics (1).jpg'
import pinkImage2 from '../assets/pink_style_cosmetics (2).jpg'

const { Text } = Typography

const gridProducts = [
  {
    id: '1',
    image: forestImage1,
    name: '자연의 향기',
    brand: '수풀',
    rating: 4.6,
    reviewCount: 1284
  },
  {
    id: '2', 
    image: pinkImage1,
    name: '로즈 블룸 케어',
    brand: '온화한 하루',
    rating: 4.4,
    reviewCount: 2042
  },
  {
    id: '3',
    image: forestImage2,
    name: '진정 세럼',
    brand: '자연',
    rating: 4.5,
    reviewCount: 1620
  },
  {
    id: '4',
    image: pinkImage2,
    name: '모이스처 크림',
    brand: '부드러운',
    rating: 4.3,
    reviewCount: 820
  },
  {
    id: '5',
    image: forestImage3,
    name: '숲속 바디 로션',
    brand: '자연의 선물',
    rating: 4.7,
    reviewCount: 1340
  }
]

interface SearchProductGridProps {
  onProductClick?: (productId: string) => void
}

export function SearchProductGrid({ onProductClick }: SearchProductGridProps) {
  return (
    <div style={{ padding: '20px 14px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px'
      }}>
        {gridProducts.map((product) => (
          <Card
            key={product.id}
            hoverable
            onClick={() => onProductClick?.(product.id)}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #f3f3f3'
            }}
            bodyStyle={{ padding: '12px' }}
            cover={
              <div style={{ height: '140px', overflow: 'hidden' }}>
                <img
                  alt={product.name}
                  src={product.image}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
            }
          >
            <div style={{ textAlign: 'center' }}>
              <Text strong style={{
                display: 'block',
                fontSize: '14px',
                color: '#504949',
                marginBottom: '4px',
                fontFamily: "'Sulphur Point', sans-serif"
              }}>
                {product.name}
              </Text>
              <Text style={{
                display: 'block',
                fontSize: '12px',
                color: '#aa9e9e',
                marginBottom: '8px',
                fontFamily: "'Sulphur Point', sans-serif"
              }}>
                {product.brand}
              </Text>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px'
              }}>
                <Rate disabled defaultValue={product.rating} allowHalf style={{ fontSize: '12px' }} />
                <Text style={{
                  fontSize: '12px',
                  color: '#aa9e9e',
                  fontFamily: "'Sulphur Point', sans-serif"
                }}>
                  ({product.reviewCount.toLocaleString()})
                </Text>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
} 