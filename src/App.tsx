import { useState } from 'react'
import { Layout } from 'antd'
import { MainPage } from './pages/MainPage.tsx'
import { SearchResultsPage } from './pages/SearchResultsPage.tsx'

const { Content } = Layout

function App() {
  const [currentPage, setCurrentPage] = useState<'main' | 'search'>('main')
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      setCurrentPage('search')
    }
  }

  const handleNavigate = (route: string) => {
    console.log('Navigate to:', route)
    if (route === 'home') {
      setCurrentPage('main')
    }
    // TODO: Handle other navigation routes
  }

  const handleBackToHome = () => {
    setCurrentPage('main')
    setSearchQuery('')
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
            onNavigate={handleNavigate}
          />
        )}
        
        {currentPage === 'search' && (
          <SearchResultsPage 
            searchQuery={searchQuery}
            onBack={handleBackToHome}
          />
        )}
      </Content>
    </Layout>
  )
}

export default App
