import { Card, Typography, Rate } from 'antd'
import { theme } from '../styles/theme'
import styles from './CustomerReviews.module.css'

const { Title, Text } = Typography

interface Review {
  rating: number
  text: string
  author: string
}

interface CustomerReviewsProps {
  reviews: Review[]
}

export function CustomerReviews({ reviews }: CustomerReviewsProps) {
  return (
    <div>
      <Title level={4} className={styles.title}>
        고객 후기
      </Title>
      
      <div className={styles.scrollContainer}>
        {reviews.map((review, index) => (
          <Card key={index} className={styles.reviewCard} style={{ backgroundColor: theme.white }}>
            <Rate 
              disabled 
              defaultValue={review.rating} 
              className={styles.rating}
            />
            <Text className={styles.reviewText}>
              {review.text}
            </Text>
            <Text className={styles.author}>
              {review.author}
            </Text>
          </Card>
        ))}
      </div>
    </div>
  )
} 