import { useState } from 'react'
import { Typography, Space, Flex } from 'antd'
import { PageHeader } from '../components/PageHeader.tsx'
import { SearchSection } from '../components/SearchSection.tsx'
import { AIButton } from '../components/AIButton.tsx'
import { theme } from '../styles/theme'
import styles from './SearchPage.module.css'

const { Text } = Typography

interface SearchPageProps {
  onBack: () => void
  onSearch: (query: string) => void
}

export function SearchPage({ onBack, onSearch }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (value?: string) => {
    const query = value || searchQuery
    if (query.trim()) {
      onSearch(query)
    }
  }

  return (
    <div className={styles.container} style={{ backgroundColor: '#FAFAFA' }}>
      <PageHeader title="Search" onBack={onBack} />

      {/* 검색 섹션 - MainPage와 동일한 형태 */}
      <div className={styles.searchSection} style={{ backgroundColor: theme.white }}>
        <Flex className={styles.searchWrapper}>
          <div className={styles.searchInputWrapper}>
            <SearchSection 
              onSearch={handleSearch}
              placeholder="찹살떡같이 쫄깃한 토너패드"
              showFilter={false}
            />
          </div>
          
          <AIButton onClick={() => handleSearch()} />
        </Flex>
      </div>

      {/* 메인 콘텐츠 영역 */}
      <div className={styles.mainContent}>
        <Space direction="vertical" size={24} align="center">
          {/* 한결 소개 문구 */}
          <Text className={styles.introText}>
            <span className={styles.userName}>한결</span>이 지원님에게 알맞는 제품을 찾아드릴게요
          </Text>

          {/* 예시 문구들 - 크기 통일 */}
          <div className={styles.exampleContainer}>
            <div className={styles.exampleCard} style={{ backgroundColor: theme.white }}>
              <Text className={styles.exampleText}>
                찹살떡같이 쫄깃한 토너패드
              </Text>
            </div>
            
            <div className={styles.exampleCard} style={{ backgroundColor: theme.white }}>
              <Text className={styles.exampleText}>
                파도같이 시원한 쉐이빙폼
              </Text>
            </div>
          </div>
        </Space>
      </div>
    </div>
  )
} 