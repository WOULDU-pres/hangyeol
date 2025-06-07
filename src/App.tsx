import { useState, useMemo } from 'react'
import { Header } from './components/Header.tsx'
import { SearchSection } from './components/SearchSection.tsx'
import { CategoryTabs } from './components/CategoryTabs.tsx'
import { ProductCard } from './components/ProductCard.tsx'
import { BottomNavigation } from './components/BottomNavigation.tsx'
import { mockProducts } from './data/mockProducts.ts'
import type { Product } from './types/Product.ts'
import styles from './App.module.css'

function App() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = useMemo(() => {
    let products = mockProducts

    // Filter by category
    if (activeCategory !== 'all') {
      const categoryMap: Record<string, string> = {
        face: 'Face Care',
        body: 'Body Care',
        hair: 'Hair Care'
      }
      products = products.filter(product => 
        product.category === categoryMap[activeCategory]
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    return products
  }, [activeCategory, searchQuery])

  const featuredProducts = useMemo(() => 
    mockProducts.filter(product => product.featured),
    []
  )

  const gridProducts = useMemo(() =>
    filteredProducts.filter(product => !product.featured).slice(0, 2),
    [filteredProducts]
  )

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setSearchQuery('') // Clear search when changing category
  }

  const handleProductClick = (product: Product) => {
    console.log('Product clicked:', product)
    // TODO: Navigate to product detail page
  }

  const handleNavigate = (route: string) => {
    console.log('Navigate to:', route)
    // TODO: Handle navigation
  }

  return (
    <div className={styles.app}>
      <Header userName="User" />
      
      <main className={styles.main}>
        <SearchSection onSearch={handleSearch} />
        
        <CategoryTabs onCategoryChange={handleCategoryChange} />
        
        {/* Product Grid Section */}
        {gridProducts.length > 0 && (
          <section className={styles.productsSection}>
            <div className={styles.productsGrid}>
              {gridProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="grid"
                  onClick={handleProductClick}
                />
              ))}
            </div>
          </section>
        )}
        
        {/* Popular Products Section */}
        {featuredProducts.length > 0 && (
          <section className={styles.productsSection}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>Popular Products</h2>
              <button className={styles.viewToggle}>See All</button>
            </div>
            
            <div className={styles.productsList}>
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  variant="list"
                  onClick={handleProductClick}
                />
              ))}
            </div>
          </section>
        )}
        
        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className={styles.noProducts}>
            <p>No products found for "{searchQuery}" in {activeCategory === 'all' ? 'all categories' : activeCategory}</p>
          </div>
        )}
      </main>
      
      <BottomNavigation onNavigate={handleNavigate} />
    </div>
  )
}

export default App
