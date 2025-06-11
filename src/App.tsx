import { useState } from 'react'
import { Layout } from 'antd'
import { MainPage } from './pages/MainPage.tsx'
import { SearchPage } from './pages/SearchPage.tsx'
import { SearchResultsPage } from './pages/SearchResultsPage.tsx'
import { ProductDetailPage } from './pages/ProductDetailPage.tsx'

const { Content } = Layout

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'searchInput' | 'search' | 'productDetail'>('main')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('forest')

  const handleSearchInputClick = () => {
    setCurrentPage('searchInput')
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      setCurrentPage('search')
    }
  }

  const handleNavigate = (route: string, theme?: ThemeType) => {
    console.log('Navigate to:', route, 'Theme:', theme)
    if (route === 'home') {
      setCurrentPage('main')
    } else if (route === 'productDetail') {
      if (theme) {
        setCurrentTheme(theme)
      }
      setCurrentPage('productDetail')
    }
    // TODO: Handle other navigation routes
  }

  const handleBackToHome = () => {
    setCurrentPage('main')
    setSearchQuery('')
  }

  const handleBackFromDetail = () => {
    setCurrentPage('main')
  }

  const handleBackFromSearchInput = () => {
    setCurrentPage('main')
  }

  return (
    <Layout 
      style={{
        minHeight: '100vh',
        maxWidth: '414px',
        margin: '0 auto',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Content style={{ paddingBottom: '74px' }}>
        {currentPage === 'main' && (
          <MainPage 
            onSearch={handleSearch}
            onSearchInputClick={handleSearchInputClick}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'searchInput' && (
          <SearchPage 
            onBack={handleBackFromSearchInput}
            onSearch={handleSearch}
          />
        )}
        
        {currentPage === 'search' && (
          <SearchResultsPage 
            searchQuery={searchQuery}
            onBack={handleBackToHome}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'productDetail' && (
          <ProductDetailPage 
            onBack={handleBackFromDetail}
            initialTheme={currentTheme}
          />
        )}
      </Content>
    </Layout>
  )
}

export default App
