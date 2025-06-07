import type { Product } from '../types/Product.ts'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  product: Product
  variant?: 'grid' | 'list'
  onClick?: (product: Product) => void
}

export function ProductCard({ product, variant = 'grid', onClick }: ProductCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(product)
    }
  }

  if (variant === 'list') {
    return (
      <div className={`${styles.productCard} ${styles.listView}`} onClick={handleClick}>
        <div className={styles.productImageContainer}>
          <img
            src={product.image}
            alt={product.name}
            className={styles.productImage}
            onError={(e) => {
              e.currentTarget.src = '/placeholder-product.jpg'
            }}
          />
        </div>
        
        <div className={styles.productContent}>
          <div className={styles.productDetails}>
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productCategory}>{product.category}</p>
            <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
          </div>
          
          {product.rating && (
            <div className={styles.productRating}>
              <span className={styles.ratingValue}>{product.rating}</span>
            </div>
          )}
        </div>
      </div>
    )
  }

  return (
    <div className={styles.productCard} onClick={handleClick}>
      <div className={styles.productImageContainer}>
        <img
          src={product.image}
          alt={product.name}
          className={styles.productImage}
          onError={(e) => {
            e.currentTarget.src = '/placeholder-product.jpg'
          }}
        />
      </div>
      
      <div className={styles.productContent}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productCategory}>{product.category}</p>
        <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
} 