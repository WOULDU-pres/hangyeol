import { useState } from 'react'
import styles from './CategoryTabs.module.css'

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'face', label: 'Face Care' },
  { id: 'body', label: 'Body Care' },
  { id: 'hair', label: 'Hair Care' }
]

export function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
  const [activeCategory, setActiveCategory] = useState('all')

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId)
    onCategoryChange(categoryId)
  }

  return (
    <section className={styles.categoryTabs}>
      <div className={styles.tabsContainer}>
        {categories.map((category) => (
          <button
            key={category.id}
            className={`${styles.tab} ${activeCategory === category.id ? styles.active : ''}`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </section>
  )
} 