import { Card, Typography, Rate } from 'antd'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './CustomerReviews.module.css'

const { Title, Text } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

const themeConfig = {
  forest: forestTheme,
  spring: newSpringTheme,
  cool: coolTheme,
  warm: warmTheme
}

interface Review {
  rating: number
  text: string
  author: string
}

interface CustomerReviewsProps {
  reviews: Review[]
  themeType?: ThemeType
}

export function CustomerReviews({ reviews, themeType = 'forest' }: CustomerReviewsProps) {
  const selectedTheme = themeConfig[themeType]
  
  return (
    <div>
      <Title level={4} className={styles.title} style={{ color: selectedTheme.primary }}>
        고객 후기
      </Title>
      
      <div className={styles.scrollContainer}>
        {reviews.map((review, index) => (
          <Card 
            key={index} 
            className={styles.reviewCard} 
            style={{ 
              backgroundColor: theme.white,
              borderColor: selectedTheme.accent
            }}
          >
            <Rate 
              disabled 
              defaultValue={review.rating} 
              className={styles.rating}
              style={{ color: selectedTheme.secondary }}
            />
            <Text className={styles.reviewText}>
              {review.text}
            </Text>
            <Text className={styles.author} style={{ color: selectedTheme.primary }}>
              {review.author}
            </Text>
          </Card>
        ))}
      </div>
    </div>
  )
} 