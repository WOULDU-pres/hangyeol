import type { BrandItem } from '../types/SearchTypes'
import styles from './DiscoverBrands.module.css'
import { IoIosStarHalf  } from 'react-icons/io'

interface DiscoverBrandsProps {
  brands: BrandItem[]
}

export function DiscoverBrands({ brands }: DiscoverBrandsProps) {
  if (brands.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Discover new brands</h2>
      </div>
      
      <div className={styles.brandsContainer}>
        {brands.map((brand) => (
          <div key={brand.id} className={styles.brandCard}>
            <img 
              src={brand.image} 
              alt={brand.name}
              className={styles.brandImage}
            />
            <div className={styles.brandName}>{brand.name}</div>
            <div className={styles.brandDescription}>WHOLESALE HATS & PROMOTIONAL PRODUCTS</div>
            <div className={styles.rating}>
              <span className={styles.stars}><IoIosStarHalf size={16} /></span>
              <span className={styles.ratingText}>{brand.rating} ({brand.reviewCount.toLocaleString()})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 