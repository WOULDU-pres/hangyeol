import { Typography, Space, Rate } from 'antd'
import { theme } from '../styles/theme'
import styles from './ProductInfo.module.css'

const { Title, Text, Paragraph } = Typography

interface ProductInfoProps {
  brand: string
  name: string
  rating: number
  reviewCount: number
  saleCount: number
  price: string
  description: string
}

export function ProductInfo({
  brand,
  name,
  rating,
  reviewCount,
  saleCount,
  price,
  description
}: ProductInfoProps) {
  return (
    <div className={styles.container} style={{ backgroundColor: theme.white }}>
      <Space direction="vertical" size={12} style={{ width: '100%' }}>
        {/* 브랜드명 */}
        <Text className={styles.brand}>
          {brand}
        </Text>

        {/* 제품명 */}
        <div>
          <Title level={2} className={styles.productName}>
            {name}
          </Title>
        </div>

        {/* 평점과 평가 */}
        <div className={styles.ratingSection}>
          <div className={styles.ratingItem}>
            <Rate disabled defaultValue={rating} allowHalf style={{ fontSize: '14px' }} />
            <Text className={styles.ratingText}>{rating}</Text>
          </div>
          <div className={styles.ratingItem}>
            <Text className={styles.countText}>{reviewCount}+</Text>
            <Text className={styles.labelText}>리뷰</Text>
          </div>
          <div className={styles.ratingItem}>
            <Text className={styles.countText}>{saleCount}+</Text>
            <Text className={styles.labelText}>판매</Text>
          </div>
        </div>

        {/* 가격 */}
        <Text className={styles.price}>
          {price}
        </Text>

        {/* 제품 설명 */}
        <Paragraph className={styles.description}>
          {description}
        </Paragraph>
      </Space>
    </div>
  )
} 