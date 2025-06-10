import { Card, Typography, Space, Row, Col } from 'antd'
import { PageHeader } from '../components/PageHeader'
import { ProductImage } from '../components/ProductImage'
import { ProductInfo } from '../components/ProductInfo'
import { RelatedProducts } from '../components/RelatedProducts'
import { CustomerReviews } from '../components/CustomerReviews'
import { BottomPurchaseBar } from '../components/BottomPurchaseBar'
import { theme } from '../styles/theme'
import styles from './ProductDetailPage.module.css'
import forestImage from '../assets/forest_style_cosmetics (3).jpg'

const { Title, Text } = Typography

interface ProductDetailPageProps {
  onBack: () => void
}

const mockRelatedProducts = [
  { 
    name: '올스테이 파운데이션', 
    price: '₩3.90',
    benefits: ['워터프루프', '24시간 지속']
  },
  { 
    name: '파운데이션 와이드 커버', 
    price: '₩4.20',
    benefits: ['풀커버', '자연스러운 마감']
  },
  { 
    name: '다크 서클 파운데이션', 
    price: '₩4.50',
    benefits: ['다크서클 커버', '밝은 톤업']
  }
]

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

const mockIngredients = [
  '사용법',
  '성분',
  '효과'
]

const whyChooseItems = [
  { title: '피부과 테스트 완료', icon: '✓' },
  { title: '알레르기 테스트 완료', icon: '✓' },
  { title: '논코메도제닉', icon: '✓' }
]

export function ProductDetailPage({ onBack }: ProductDetailPageProps) {
  return (
    <div 
      className={styles.container}
      style={{ backgroundColor: '#F0F1C5' }}
    >
      <PageHeader title="제품 상세" onBack={onBack} />

      <ProductImage 
        imageUrl={forestImage}
        alt="Poreless Liquid Foundation"
      />

      <ProductInfo
        brand="Adf"
        name="Poreless Liquid Foundation"
        rating={4.6}
        reviewCount={200}
        saleCount={99}
        price="₩5.60"
        description="이 컨실러는 피부의 어두운 부위를 매끄럽게 덮어주고 쉽게 블렌딩되어 더 밝은 안색을 연출합니다. 오래 지속되는 더블 래스팅 세럼 파운데이션입니다."
      />

      {/* 세부 정보 섹션들 */}
      <div className={styles.detailSection} style={{ backgroundColor: '#ebeae5' }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          
          {/* 성분 정보 */}
          <div>
            <Title level={4} className={styles.ingredientsTitle}>
              성분 정보
            </Title>
            <div className={styles.ingredientsList}>
              {mockIngredients.map((ingredient, index) => (
                <div key={index} className={styles.ingredientItem}>
                  <div className={styles.ingredientDot} />
                  <Text className={styles.ingredientText}>
                    {ingredient}
                  </Text>
                </div>
              ))}
            </div>
          </div>

          <RelatedProducts products={mockRelatedProducts} />
          <CustomerReviews reviews={mockReviews} />
        </Space>
      </div>

      {/* Why Choose Us 섹션 */}
      <div className={styles.whyChooseSection} style={{ backgroundColor: theme.white }}>
        <Title level={4} className={styles.whyChooseTitle}>
          왜 선택해야 할까요?
        </Title>
        
        <Row gutter={8} className={styles.whyChooseGrid}>
          {whyChooseItems.map((item, index) => (
            <Col span={8} key={index}>
              <Card 
                className={styles.whyChooseCard}
                style={{ backgroundColor: '#f0efea' }}
              >
                <div 
                  className={styles.whyChooseIcon}
                  style={{ backgroundColor: '#3f6845' }}
                >
                  {item.icon}
                </div>
                <Text className={styles.whyChooseText}>
                  {item.title}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <BottomPurchaseBar />
    </div>
  )
} 