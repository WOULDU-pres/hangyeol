import { Card, Rate, Typography } from 'antd'
import { theme } from '../styles/theme'
import styles from './SearchProductGrid.module.css'
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
  searchQuery?: string
  onProductClick?: (productId: string) => void
}

export function SearchProductGrid({ searchQuery, onProductClick }: SearchProductGridProps) {
  // 검색어에 따른 상품 필터링
  const filteredProducts = searchQuery ? 
    gridProducts.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    ) : gridProducts
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            hoverable
            onClick={() => onProductClick?.(product.id)}
            className={styles.productCard}
            bodyStyle={{ padding: '12px' }}
            cover={
              <div className={styles.imageContainer}>
                <img
                  alt={product.name}
                  src={product.image}
                  className={styles.productImage}
                />
              </div>
            }
          >
            <div className={styles.productInfo}>
              <Text 
                strong 
                className={styles.productName}
                style={{ color: theme.primary }}
              >
                {product.name}
              </Text>
              <Text 
                className={styles.productBrand}
                style={{ color: theme.text.secondary }}
              >
                {product.brand}
              </Text>
              <div className={styles.ratingContainer}>
                <Rate 
                  disabled 
                  defaultValue={product.rating} 
                  allowHalf 
                  className={styles.productRating}
                />
                <Text 
                  className={styles.reviewCount}
                  style={{ color: theme.text.secondary }}
                >
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