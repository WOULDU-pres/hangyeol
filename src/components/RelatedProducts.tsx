import { Card, Typography, Button } from 'antd'
import { theme } from '../styles/theme'
import styles from './RelatedProducts.module.css'

const { Title, Text } = Typography

interface RelatedProduct {
  name: string
  price: string
  benefits: string[]
}

interface RelatedProductsProps {
  products: RelatedProduct[]
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  return (
    <div>
      <Title level={4} className={styles.title}>
        함께 구매하면 좋은 제품
      </Title>
      
      <div className={styles.scrollContainer}>
        {products.map((product, index) => (
          <Card key={index} className={styles.productCard} style={{ backgroundColor: theme.white }}>
            <div className={styles.productImage} style={{ backgroundColor: theme.secondary }} />
            <Text className={styles.productName}>
              {product.name}
            </Text>
            <Text className={styles.productPrice}>
              {product.price}
            </Text>
            <Button
              size="small"
              className={styles.buyButton}
              style={{
                backgroundColor: '#3f6845',
                borderColor: '#3f6845',
                color: '#78947c'
              }}
            >
              지금 구매
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
} 