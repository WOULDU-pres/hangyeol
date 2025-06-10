import { useState } from 'react'
import { Card, Typography, Spin, Alert, message } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { FaRegSmileWink } from 'react-icons/fa'
import type { AIRecommendedProduct } from '../types/Product'
import { generateClickMessage } from '../services/agentforceApi'
import { theme, forestTheme } from '../styles/theme'
import styles from './AIRecommendation.module.css'
import forestImage from '../assets/forest_style_cosmetics (2).jpg'

const { Title, Text } = Typography

interface AIRecommendationProps {
  product: AIRecommendedProduct | null
  loading: boolean
  error: string | null
  onProductClick?: (productId: string) => void
  onNavigate?: (route: string) => void
}

/**
 * "" 안의 텍스트를 굵은 글씨로 강조하는 함수
 */
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
  const [clickMessage] = useState('청아한 지원님에게 숲의 향기를 가득담은 "수풀"이 잘 어울릴 것 같아요.')

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
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Title 
            level={2} 
            className={styles.title}
            style={{ color: theme.primary }}
          >
            {formatMessage('혹시 "수풀" 들어보셨나요?')}
          </Title>
        </div>

        <Card 
          className={styles.loadingCard}
          style={{ 
            backgroundColor: theme.white,
            border: `2px solid ${forestTheme.warm}`,
          }}
        >
          <div className={styles.loadingContent}>
            <Spin size="large" />
            <Text 
              className={styles.loadingText}
              style={{ color: theme.primary }}
            >
              한결이 추천할 물건을 고르고 있어요
              <FaRegSmileWink 
                className={styles.smileIcon}
                style={{ color: theme.secondary }} 
              />
            </Text>
          </div>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <Title 
            level={2} 
            className={styles.title}
            style={{ color: theme.primary }}
          >
            {formatMessage('혹시 "수풀" 들어보셨나요?')}
          </Title>
        </div>

        <Card 
          className={styles.errorCard}
          style={{ backgroundColor: theme.white }}
        >
          <Alert
            message="잠시 숲속 길을 잃었어요"
            description={error}
            type="error"
            showIcon
            className={styles.errorAlert}
          />
        </Card>
      </div>
    )
  }

  if (!product) {
    return null
  }

  return (
    <div className={styles.container}>
      {/* 상단 제목 */}
      <div className={styles.titleContainer}>
        <Title 
          level={2} 
          className={styles.title}
          style={{ color: theme.primary }}
        >
          {formatMessage('혹시 "수풀" 들어보셨나요?')}
        </Title>
      </div>

      {/* 클릭 메시지 */}
      <div 
        className={styles.clickMessage}
        style={{ 
          backgroundColor: forestTheme.accent,
          border: `2px solid ${forestTheme.background}`,
          boxShadow: theme.shadows.sm
        }}
      >
        <div className={styles.clickMessageContent}>
          <span className={styles.clickMessageIcon}>🌿</span>
          <Text 
            className={styles.clickMessageText}
            style={{ color: theme.primary }}
          >
            {formatMessage(clickMessage)}
          </Text>
        </div>
      </div>

      {/* 메인 제품 카드 */}
      <Card 
        className={styles.productCard}
        style={{ 
          backgroundColor: theme.white,
          border: `2px solid ${forestTheme.warm}`,
          boxShadow: theme.shadows.md
        }}
        hoverable
        onClick={handleProductClick}
        bodyStyle={{ padding: theme.spacing.xxl }}
      >
        <div className={styles.productContent}>
          {/* 상품 이미지 */}
          <div className={styles.productImage}>
            <img 
              src={forestImage}
              alt="참나무 바디 밤"
              className={styles.productImageImg}
              style={{ 
                border: `2px solid ${forestTheme.accent}`,
                boxShadow: theme.shadows.sm
              }}
            />
          </div>

          {/* 상품 정보 */}
          <div className={styles.productInfo}>
            {/* 제품 이름 */}
            <Title 
              level={3} 
              className={styles.productName}
              style={{ color: theme.primary }}
            >
              참나무 바디 밤
            </Title>

            {/* 리뷰 / 구매수 */}
            <div className={styles.productRating}>
              <StarFilled className={styles.ratingIcon} />
              <Text 
                strong 
                className={styles.ratingScore}
                style={{ color: theme.primary }}
              >
                4.6
              </Text>
              <Text 
                className={styles.ratingCount}
                style={{ color: theme.primary }}
              >
                / 2,500+
              </Text>
            </div>

            {/* 가격 */}
            <Text 
              strong 
              className={styles.productPrice}
              style={{ color: theme.secondary }}
            >
              ₩49,000
            </Text>

            {/* 주요 성분 */}
            <div className={styles.productIngredients}>
              <Text 
                className={styles.ingredientsLabel}
                style={{ color: theme.primary }}
              >
                주요 성분: 
              </Text>
              <Text 
                className={styles.ingredientsList}
                style={{ color: forestTheme.warm }}
              >
                히알루론산, 세라마이드, 레티놀
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
} 