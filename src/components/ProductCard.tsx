import { memo } from 'react'
import { Card, Typography, Rate, Flex } from 'antd'
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
        style={{
          marginBottom: '12px',
          borderRadius: '12px',
        }}
        bodyStyle={{ padding: '12px' }}
      >
        <Flex gap={12} align="flex-start">
          <div style={{ 
            width: '80px', 
            height: '80px', 
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#f6eded',
            flexShrink: 0,
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.src = '/placeholder-product.jpg'
              }}
            />
          </div>
          
          <Flex vertical flex={1} justify="space-between">
            <div>
              <Title 
                level={5} 
                style={{ 
                  margin: 0, 
                  marginBottom: '4px',
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: '14px',
                }}
              >
                {product.name}
              </Title>
              <Text 
                type="secondary" 
                style={{ 
                  fontSize: '12px',
                  fontFamily: "'Sulphur Point', sans-serif",
                }}
              >
                {product.category}
              </Text>
            </div>
            
            <Flex justify="space-between" align="center">
              <Text 
                strong 
                style={{ 
                  color: '#504949',
                  fontFamily: "'Sulphur Point', sans-serif",
                  fontSize: '14px',
                }}
              >
                ${product.price.toFixed(2)}
              </Text>
              
              {product.rating && (
                <Rate disabled defaultValue={product.rating} style={{ fontSize: '12px' }} />
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
        <div style={{ 
          height: '208px', 
          overflow: 'hidden',
          backgroundColor: '#f6eded',
        }}>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.src = '/placeholder-product.jpg'
            }}
          />
        </div>
      }
      style={{
        borderRadius: '12px',
        overflow: 'hidden',
      }}
      bodyStyle={{ padding: '12px' }}
    >
      <Meta
        title={
          <Title 
            level={5} 
            style={{ 
              margin: 0,
              fontFamily: "'Sulphur Point', sans-serif",
              fontSize: '14px',
            }}
          >
            {product.name}
          </Title>
        }
        description={
          <div>
            <Text 
              type="secondary" 
              style={{ 
                fontSize: '12px',
                fontFamily: "'Sulphur Point', sans-serif",
                display: 'block',
                marginBottom: '8px',
              }}
            >
              {product.category}
            </Text>
            <Text 
              strong 
              style={{ 
                color: '#504949',
                fontFamily: "'Sulphur Point', sans-serif",
                fontSize: '14px',
              }}
            >
              ${product.price.toFixed(2)}
            </Text>
          </div>
        }
      />
    </Card>
  )
}) 