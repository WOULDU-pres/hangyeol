import { useState } from 'react'
import { Card, Typography, Spin, Alert, message } from 'antd'
import { StarFilled } from '@ant-design/icons'
import type { AIRecommendedProduct } from '../types/Product'
import { generateClickMessage } from '../services/agentforceApi'
import forestImage from '../assets/forest_style_cosmetics (2).jpg'

const { Title, Text } = Typography

// 테마 색상 정의 - 차후 내부 테마에 맞게 변경 가능
const theme = {
  primary: '#6F826A',      // 깊은 녹색 - 주요 텍스트
  secondary: '#65B741',    // 밝은 녹색 - 강조, 버튼
  accent: '#BBD8A3',       // 연한 녹색 - 부드러운 강조
  background: '#F0F1C5',   // 아이보리 - 카드 배경
  warm: '#BF9264',         // 따뜻한 베이지 - 보더, 따뜻한 요소
  white: '#ffffff'
}

interface AIRecommendationProps {
  product: AIRecommendedProduct | null
  loading: boolean
  error: string | null
  onProductClick?: (productId: string) => void
  onNavigate?: (route: string) => void
}

// "" 안의 텍스트를 굵은 글씨로 강조하는 함수
const formatMessage = (message: string) => {
  const parts = message.split(/"([^"]*)"/)
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} style={{ 
          fontWeight: 'bold', 
          color: theme.secondary 
        }}>
          {part}
        </span>
      )
    }
    return part
  })
}

export function AIRecommendation({ 
  product, 
  loading, 
  error, 
  onProductClick,
  onNavigate 
}: AIRecommendationProps) {
  const [clickMessage] = useState('청아한 \'지원\'님에게 숲의 향기를 가득담은 "수풀"이 잘 어울릴 것 같아요.')

  const handleProductClick = () => {
    if (product) {
      const personalizedMessage = generateClickMessage(product.name)
      message.success(personalizedMessage, 3)
      
      if (onProductClick) {
        onProductClick(product.id)
      }
      
      // 상세 페이지로 이동
      if (onNavigate) {
        onNavigate('productDetail')
      }
    }
  }

  if (loading) {
    return (
      <div style={{ margin: '16px 14px' }}>
        {/* 상단 제목 - 박스 제거 */}
        <div style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <Title level={2} style={{ 
            margin: 0,
            color: theme.primary,
            fontSize: '28px',
            fontWeight: 'bold'
          }}>
            {formatMessage('"수풀" 들어보셨나요?')}
          </Title>
        </div>

        <Card 
          style={{ 
            backgroundColor: theme.white,
            border: `2px solid ${theme.warm}`,
            borderRadius: '16px',
            minHeight: '250px'
          }}
        >
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '60px 20px'
          }}>
            <Spin size="large" />
            <Text style={{ 
              marginTop: '20px', 
              color: theme.primary,
              fontSize: '16px'
            }}>
              자연이 선사하는 맞춤 케어를 찾고 있어요...
            </Text>
          </div>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div style={{ margin: '16px 14px' }}>
        {/* 상단 제목 - 박스 제거 */}
        <div style={{
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          <Title level={2} style={{ 
            margin: 0,
            color: theme.primary,
            fontSize: '28px',
            fontWeight: 'bold'
          }}>
            {formatMessage('"수풀" 들어보셨나요?')}
          </Title>
        </div>

        <Card 
          style={{ 
            backgroundColor: theme.white,
            border: '2px solid #ff4d4f',
            borderRadius: '16px'
          }}
        >
          <Alert
            message="잠시 숲속 길을 잃었어요"
            description={error}
            type="error"
            showIcon
            style={{ border: 'none' }}
          />
        </Card>
      </div>
    )
  }

  if (!product) {
    return null
  }

  return (
    <div style={{ margin: '16px 14px' }}>
      {/* 상단 제목 - 박스 제거 */}
      <div style={{
        textAlign: 'center',
        marginBottom: '20px'
      }}>
        <Title level={2} style={{ 
          margin: 0,
          color: theme.primary,
          fontSize: '28px',
          fontWeight: 'bold'
        }}>
          {formatMessage('"수풀" 들어보셨나요?')}
        </Title>
      </div>

      {/* 메인 제품 카드 */}
      <Card 
        style={{ 
          backgroundColor: theme.white,
          border: `2px solid ${theme.warm}`,
          borderRadius: '16px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 6px 20px rgba(0,0,0,0.1)'
        }}
        hoverable
        onClick={handleProductClick}
        bodyStyle={{ padding: '24px' }}
      >
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* 상품 이미지 */}
          <div style={{ flexShrink: 0 }}>
            <img 
              src={forestImage}
              alt="참나무 바디 밤"
              style={{ 
                width: '140px', 
                height: '140px', 
                objectFit: 'cover',
                borderRadius: '12px',
                border: `2px solid ${theme.accent}`,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
            />
          </div>

          {/* 상품 정보 */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* 제품 이름 */}
            <Title level={3} style={{ 
              margin: 0,
              fontSize: '20px',
              fontWeight: 'bold',
              color: theme.primary
            }}>
              참나무 바디 밤
            </Title>

            {/* 리뷰 / 구매수 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <StarFilled style={{ color: '#faad14', fontSize: '16px' }} />
              <Text strong style={{ 
                fontSize: '16px', 
                color: theme.primary 
              }}>
                4.6
              </Text>
              <Text style={{ 
                fontSize: '14px', 
                color: theme.primary,
                opacity: 0.7
              }}>
                / 2,500+
              </Text>
            </div>

            {/* 가격 */}
            <Text strong style={{ 
              fontSize: '20px', 
              color: theme.secondary 
            }}>
              ₩49,000
            </Text>

            {/* 주요 성분 */}
            <div>
              <Text style={{ 
                fontSize: '14px', 
                color: theme.primary,
                fontWeight: '500'
              }}>
                주요 성분: 
              </Text>
              <Text style={{ 
                fontSize: '14px', 
                color: theme.warm,
                marginLeft: '8px'
              }}>
                히알루론산, 세라마이드, 레티놀
              </Text>
            </div>
          </div>
        </div>
      </Card>

      {/* 클릭 메시지 - 항상 표시 */}
      <div style={{ 
        marginTop: '16px',
        padding: '20px',
        backgroundColor: theme.accent,
        borderRadius: '12px',
        border: `2px solid ${theme.background}`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '24px' }}>🌿</span>
          <Text style={{ 
            fontSize: '16px',
            color: theme.primary,
            fontWeight: '500',
            lineHeight: '1.5'
          }}>
            {formatMessage(clickMessage)}
          </Text>
        </div>
      </div>
    </div>
  )
} 