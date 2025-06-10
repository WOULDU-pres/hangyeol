import { Card, Typography, Space, Rate, Button, Divider, Badge } from 'antd'
import { ArrowLeftOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { BottomPurchaseBar } from '../components/BottomPurchaseBar'
import forestImage from '../assets/forest_style_cosmetics (3).jpg'

const { Title, Text, Paragraph } = Typography

// 테마 색상 정의 - AIRecommendation과 동일
const theme = {
  primary: '#6F826A',      // 깊은 녹색
  secondary: '#65B741',    // 밝은 녹색  
  accent: '#BBD8A3',       // 연한 녹색
  background: '#F0F1C5',   // 아이보리
  warm: '#BF9264',         // 따뜻한 베이지
  white: '#ffffff'
}

interface ProductDetailPageProps {
  onBack: () => void
}

export function ProductDetailPage({ onBack }: ProductDetailPageProps) {
  const handleWishlist = () => {
    console.log('위시리스트에 추가됨')
  }

  const handleAddToCart = () => {
    console.log('장바구니에 추가됨')
  }

  const handlePurchase = () => {
    console.log('구매하기 클릭됨')
  }

  return (
    <div style={{
      backgroundColor: theme.background,
      minHeight: '100vh',
      paddingBottom: '100px', // 하단 구매바 공간 확보
      overflowX: 'hidden' // 가로 스크롤 제거
    }}>
      {/* 상단 헤더 */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: theme.white,
        padding: '16px 20px',
        borderBottom: `1px solid ${theme.accent}`,
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}>
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={onBack}
          style={{
            color: theme.primary,
            fontSize: '18px'
          }}
        />
        <Title level={4} style={{
          margin: 0,
          color: theme.primary,
          fontSize: '18px'
        }}>
          제품 상세
        </Title>
      </div>

      {/* 상단 제품 이미지 */}
      <div style={{
        position: 'relative',
        height: '300px',
        overflow: 'hidden'
      }}>
        <img
          src={forestImage}
          alt="자연의 향기 바디 케어"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          background: 'linear-gradient(transparent, rgba(240, 241, 197, 0.9))'
        }} />
      </div>

      {/* 제품 기본 정보 */}
      <div style={{ padding: '20px' }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          {/* 제품명 */}
          <div>
            <Text style={{
              fontSize: '12px',
              color: theme.warm,
              fontWeight: '500'
            }}>
              수풀 자연 코스메틱
            </Text>
            <Title level={2} style={{
              margin: '8px 0',
              color: theme.primary,
              fontSize: '24px',
              lineHeight: '1.3'
            }}>
              숲속의 향기 바디 케어
            </Title>
          </div>

          {/* 평점과 리뷰 */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <Rate disabled defaultValue={4.8} allowHalf style={{ fontSize: '16px' }} />
            <Text strong style={{ color: theme.primary }}>4.8</Text>
            <Text style={{ color: theme.primary, opacity: 0.7 }}>
              (2,500+ 리뷰)
            </Text>
            <Badge count="인기" style={{ backgroundColor: theme.secondary }} />
          </div>

          {/* 가격 */}
          <Text style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: theme.secondary
          }}>
            ₩52,000
          </Text>

          {/* 제품 설명 */}
          <Paragraph style={{
            color: theme.primary,
            fontSize: '14px',
            lineHeight: '1.6',
            marginBottom: 0
          }}>
            자연에서 얻은 순수한 성분으로 만든 바디 케어 제품입니다. 
            부드럽고 촉촉한 질감으로 피부에 자연스럽게 흡수되어 
            하루 종일 편안하고 향긋한 기분을 선사합니다. 
            민감한 피부에도 안전하게 사용할 수 있어요.
          </Paragraph>
        </Space>
      </div>

      <Divider style={{ margin: '8px 0', borderColor: theme.accent }} />

      {/* Why Choose Us 섹션 */}
      <div style={{ padding: '20px' }}>
        <Title level={3} style={{
          color: theme.primary,
          fontSize: '18px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          왜 수풀을 선택하시나요?
        </Title>
        
        <div style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'space-between'
        }}>
          {[
            { title: '자연 성분', subtitle: '100%' },
            { title: '순한 처방', subtitle: '인증' },
            { title: '친환경 포장', subtitle: '완료' }
          ].map((item, index) => (
            <Card key={index} style={{
              flex: 1,
              backgroundColor: theme.white,
              border: `2px solid ${theme.accent}`,
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <CheckCircleOutlined style={{
                fontSize: '24px',
                color: theme.secondary,
                marginBottom: '8px'
              }} />
              <div>
                <Text style={{
                  display: 'block',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  color: theme.primary
                }}>
                  {item.title}
                </Text>
                <Text style={{
                  fontSize: '10px',
                  color: theme.warm
                }}>
                  {item.subtitle}
                </Text>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Divider style={{ margin: '8px 0', borderColor: theme.accent }} />

      {/* 관련 제품 섹션 */}
      <div style={{ padding: '20px' }}>
        <Title level={3} style={{
          color: theme.primary,
          fontSize: '18px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          함께 보면 좋은 제품
        </Title>
        
        <div 
          className="horizontal-scroll-hidden"
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '8px'
          }}
        >
          {[
            { name: '진정 페이스 세럼', price: '₩39,000' },
            { name: '수분 충전 크림', price: '₩42,000' },
            { name: '자연 추출 오일', price: '₩45,000' }
          ].map((product, index) => (
            <Card key={index} style={{
              minWidth: '140px',
              backgroundColor: theme.white,
              border: `2px solid ${theme.accent}`,
              borderRadius: '12px'
            }}>
              <div style={{
                height: '80px',
                backgroundColor: theme.background,
                borderRadius: '8px',
                marginBottom: '12px'
              }} />
              <Text style={{
                display: 'block',
                fontSize: '12px',
                fontWeight: 'bold',
                color: theme.primary,
                marginBottom: '4px'
              }}>
                {product.name}
              </Text>
              <Text style={{
                fontSize: '14px',
                color: theme.secondary,
                fontWeight: 'bold'
              }}>
                {product.price}
              </Text>
              <Button
                size="small"
                style={{
                  marginTop: '8px',
                  width: '100%',
                  backgroundColor: theme.secondary,
                  borderColor: theme.secondary,
                  color: theme.white,
                  fontSize: '10px'
                }}
              >
                지금 구매
              </Button>
            </Card>
          ))}
        </div>
      </div>

      <Divider style={{ margin: '8px 0', borderColor: theme.accent }} />

      {/* 후기 섹션 */}
      <div style={{ padding: '20px' }}>
        <Title level={3} style={{
          color: theme.primary,
          fontSize: '18px',
          marginBottom: '16px',
          textAlign: 'center'
        }}>
          고객 후기
        </Title>
        
        <div
          className="horizontal-scroll-hidden"
          style={{
            display: 'flex',
            gap: '12px',
            overflowX: 'auto',
            paddingBottom: '8px'
          }}
        >
          {[
            { rating: 5, text: '정말 좋아요! 피부가 촉촉해지고 향도 은은해서 마음에 들어요.' },
            { rating: 4, text: '자연스러운 성분이라 안심하고 사용할 수 있어요. 추천해요!' },
            { rating: 5, text: '피부에 잘 맞고 하루 종일 촉촉함이 지속돼요.' }
          ].map((review, index) => (
            <Card key={index} style={{
              minWidth: '200px',
              backgroundColor: theme.white,
              border: `2px solid ${theme.accent}`,
              borderRadius: '12px'
            }}>
              <Rate disabled defaultValue={review.rating} style={{
                fontSize: '12px',
                marginBottom: '8px'
              }} />
              <Text style={{
                fontSize: '12px',
                color: theme.primary,
                lineHeight: '1.4'
              }}>
                {review.text}
              </Text>
            </Card>
          ))}
        </div>
      </div>

      {/* 하단 구매바 */}
      <BottomPurchaseBar
        onWishlist={handleWishlist}
        onAddToCart={handleAddToCart}
        onPurchase={handlePurchase}
        price="₩52,000"
      />
      
      {/* 스크롤바 숨기기 스타일 */}
      <style>{`
        .horizontal-scroll-hidden {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE and Edge */
        }
        .horizontal-scroll-hidden::-webkit-scrollbar {
          display: none; /* Webkit browsers */
        }
      `}</style>
    </div>
  )
} 