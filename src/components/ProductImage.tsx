import { theme } from '../styles/theme'
import styles from './ProductImage.module.css'

interface ProductImageProps {
  imageUrl: string
  alt: string
}

export function ProductImage({ imageUrl, alt }: ProductImageProps) {
  return (
    <div 
      className={styles.container}
      style={{ backgroundColor: theme.secondary }}
    >
      <img
        src={imageUrl}
        alt={alt}
        className={styles.image}
      />
    </div>
  )
} 