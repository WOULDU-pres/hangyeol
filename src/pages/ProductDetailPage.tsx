import { Typography, Space, Button } from 'antd'
import { PageHeader } from '../components/PageHeader'
import { ProductImage } from '../components/ProductImage'
import { ProductInfo } from '../components/ProductInfo'
import { RelatedProducts } from '../components/RelatedProducts'
import { CustomerReviews } from '../components/CustomerReviews'
import { BrandStory } from '../components/BrandStory'
import { AIAnalysis } from '../components/AIAnalysis'
import { useState } from 'react'
import { BottomPurchaseBar } from '../components/BottomPurchaseBar'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './ProductDetailPage.module.css'
import forestImage from '../assets/forest_style_cosmetics (3).jpg'
import cosmeticDetailImage from '../assets/cosmetic_detail_page.png'

// const { Title, Text } = Typography

interface ProductDetailPageProps {
  onBack: () => void
  initialTheme?: ThemeType
}

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

const themeBackgrounds = {
  forest: forestTheme.background,
  spring: newSpringTheme.background,
  cool: coolTheme.background,
  warm: warmTheme.background
}

// RelatedProducts 컴포넌트에서 내부 데이터를 사용하므로 mockRelatedProducts 제거

const mockReviews = [
  { 
    rating: 5, 
    text: '정말 좋은 제품이에요! 커버력도 좋고 하루 종일 지속돼요.',
    author: '김**'
  },
  { 
    rating: 4, 
    text: '자연스러운 마무리가 마음에 들어요. 추천합니다!',
    author: '이**'
  }
]

export function ProductDetailPage({ onBack, initialTheme = 'forest' }: ProductDetailPageProps) {
  const [selectedTheme, setSelectedTheme] = useState<ThemeType>(initialTheme)

  const themeLabels = {
    forest: '수풀 (숲)',
    spring: '꽃내음 (봄)',
    cool: '청량 (쿨)',
    warm: '따스함 (웜)'
  }

  return (
    <div 
      className={styles.container}
      style={{ backgroundColor: themeBackgrounds[selectedTheme] }}
    >
      <PageHeader title="제품 상세" onBack={onBack} />

      {/* 테마 선택 버튼들 */}
      <div className={styles.themeSelector}>
        <Typography.Text style={{ marginBottom: 8, display: 'block', color: '#666' }}>
          브랜드 테마 체험하기:
        </Typography.Text>
        <Space wrap>
          {Object.entries(themeLabels).map(([theme, label]) => (
            <Button
              key={theme}
              size="small"
              type={selectedTheme === theme ? 'primary' : 'default'}
              onClick={() => setSelectedTheme(theme as ThemeType)}
              style={{
                backgroundColor: selectedTheme === theme ? themeBackgrounds[selectedTheme] ? 'rgba(0,0,0,0.7)' : forestTheme.primary : undefined,
                borderColor: themeBackgrounds[selectedTheme] ? 'rgba(0,0,0,0.5)' : forestTheme.primary,
                color: selectedTheme === theme ? 'white' : themeBackgrounds[selectedTheme] ? 'rgba(0,0,0,0.7)' : forestTheme.primary
              }}
            >
              {label}
            </Button>
          ))}
        </Space>
      </div>

      <ProductImage 
        imageUrl={forestImage}
        alt="참나무 바디 밤"
      />

      <ProductInfo
        brand="수풀"
        name="참나무 바디 밤"
        rating={4.6}
        reviewCount={2500}
        saleCount={1200}
        price="₩49,000"
        description="자연에서 온 참나무 추출물과 히알루론산, 세라마이드가 만나 깊은 보습과 피부 장벽 강화 효과를 선사하는 바디 로션입니다. 건성 피부에 특히 효과적입니다."
        themeType={selectedTheme}
      />

      {/* AI 추천 공간들 */}
      <BrandStory themeType={selectedTheme} />
      <AIAnalysis themeType={selectedTheme} />

      {/* 기존 섹션들 */}
      <div className={styles.detailSection} style={{ backgroundColor: '#ebeae5' }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <RelatedProducts themeType={selectedTheme} />
          <CustomerReviews reviews={mockReviews} themeType={selectedTheme} />
        </Space>
      </div>

      {/* 상세 페이지 이미지 */}
      <div className={styles.detailImageSection}>
        <img 
          src={cosmeticDetailImage}
          alt="제품 상세 정보"
          className={styles.detailImage}
        />
      </div>

      <BottomPurchaseBar themeType={selectedTheme} />
    </div>
  )
} 