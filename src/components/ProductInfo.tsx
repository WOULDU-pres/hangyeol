import { Typography, Space, Rate } from 'antd'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './ProductInfo.module.css'

const { Title, Text, Paragraph } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

const themeConfig = {
  forest: forestTheme,
  spring: newSpringTheme,
  cool: coolTheme,
  warm: warmTheme
}

interface ProductInfoProps {
  brand: string
  name: string
  rating: number
  reviewCount: number
  saleCount: number
  price: string
  description: string
  themeType?: ThemeType
}

export function ProductInfo({
  brand,
  name,
  rating,
  reviewCount,
  saleCount,
  price,
  description,
  themeType = 'forest'
}: ProductInfoProps) {
  const selectedTheme = themeConfig[themeType]
  
  return (
    <div className={styles.container} style={{ backgroundColor: theme.white }}>
      <Space direction="vertical" size={12} style={{ width: '100%' }}>
        {/* 브랜드명 */}
        <Text className={styles.brand} style={{ color: selectedTheme.primary }}>
          {brand}
        </Text>

        {/* 제품명 */}
        <div>
          <Title level={2} className={styles.productName} style={{ color: selectedTheme.primary }}>
            {name}
          </Title>
        </div>

        {/* 평점과 평가 */}
        <div className={styles.ratingSection}>
          <div className={styles.ratingItem}>
            <Rate disabled defaultValue={rating} allowHalf style={{ fontSize: '14px', color: selectedTheme.secondary }} />
            <Text className={styles.ratingText}>{rating}</Text>
          </div>
          <div className={styles.ratingItem}>
            <Text className={styles.countText} style={{ color: selectedTheme.primary }}>{reviewCount}+</Text>
            <Text className={styles.labelText}>리뷰</Text>
          </div>
          <div className={styles.ratingItem}>
            <Text className={styles.countText} style={{ color: selectedTheme.primary }}>{saleCount}+</Text>
            <Text className={styles.labelText}>판매</Text>
          </div>
        </div>

        {/* 가격 */}
        <Text className={styles.price} style={{ color: selectedTheme.primary }}>
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