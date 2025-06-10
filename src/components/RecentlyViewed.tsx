import styles from './RecentlyViewed.module.css'
import type { RecentlyViewedItem } from '../types/SearchTypes'

interface RecentlyViewedProps {
  items: RecentlyViewedItem[]
}

export function RecentlyViewed({ items }: RecentlyViewedProps) {
  if (items.length === 0) return null

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>최근 본 상품</h2>
      </div>
      
      <div className={styles.itemsContainer}>
        {items.map((item) => (
          <div 
            key={item.id} 
            className={styles.item}
            style={{ backgroundColor: item.background || 'transparent' }}
          >
            <img 
              src={item.image} 
              alt={item.name}
              className={styles.itemImage}
            />
          </div>
        ))}
      </div>
    </section>
  )
} 