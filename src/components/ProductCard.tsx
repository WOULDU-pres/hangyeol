import { memo } from 'react'
import { Card, Typography, Rate, Flex } from 'antd'
import { theme } from '../styles/theme'
import styles from './ProductCard.module.css'
import type { Product } from '../types/Product.ts'

const { Meta } = Card
const { Text, Title } = Typography

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list'
  onClick?: (product: Product) => void
}

export const ProductCard = memo(function ProductCard({ product, variant = 'grid', onClick }: ProductCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(product)
    }
  }

  if (variant === 'list') {
    return (
      <Card
        hoverable
        onClick={handleClick}
        className={styles.listCard}
        bodyStyle={{ padding: '12px' }}
      >
        <Flex className={styles.listContainer}>
          <div 
            className={styles.imageContainer}
            style={{ backgroundColor: theme.background }}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
              onError={(e) => {
                e.currentTarget.src = '/placeholder-product.jpg'
              }}
            />
          </div>
          
          <Flex vertical className={styles.productContent}>
            <div className={styles.productInfo}>
              <Title 
                level={5} 
                className={styles.productTitle}
              >
                {product.name}
              </Title>
              <Text 
                type="secondary" 
                className={styles.productCategory}
              >
                {product.category}
              </Text>
            </div>
            
            <Flex className={styles.priceRatingContainer}>
              <Text 
                strong 
                className={styles.productPrice}
                style={{ color: theme.primary }}
              >
                {product.price}
              </Text>
              
              {product.rating && (
                <Rate 
                  disabled 
                  defaultValue={product.rating} 
                  className={styles.productRating}
                />
              )}
            </Flex>
          </Flex>
        </Flex>
      </Card>
    )
  }

  return (
    <Card
      hoverable
      onClick={handleClick}
      cover={
        <div 
          className={styles.gridImageContainer}
          style={{ backgroundColor: theme.background }}
        >
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
            onError={(e) => {
              e.currentTarget.src = '/placeholder-product.jpg'
            }}
          />
        </div>
      }
      className={styles.card}
      bodyStyle={{ padding: '12px' }}
    >
      <Meta
        title={
          <Title 
            level={5} 
            className={styles.metaTitle}
          >
            {product.name}
          </Title>
        }
        description={
          <div>
            <Text 
              type="secondary" 
              className={styles.gridProductCategory}
            >
              {product.category}
            </Text>
            <Text 
              strong 
              className={styles.gridProductPrice}
              style={{ color: theme.primary }}
            >
              {product.price}
            </Text>
          </div>
        }
      />
    </Card>
  )
}) 