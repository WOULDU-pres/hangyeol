import { useState } from 'react'
import { Card, Typography, Spin, Alert, message } from 'antd'
import { StarFilled } from '@ant-design/icons'
import { FaRegSmileWink } from 'react-icons/fa'
import type { AIRecommendedProduct } from '../types/Product'
import { generateClickMessage } from '../services/agentforceApi'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import { themeProducts, type ThemeType as ImportedThemeType } from '../data/themeProducts'
import styles from './AIRecommendation.module.css'
import forestImage from '../assets/forest_style_cosmetics (2).jpg'
import springImage from '../assets/spring_style_cosmetics (1).jpg'
import coolImage from '../assets/cool_style_cosmetics.png'
import warmImage from '../assets/warm_style_cosmetics.png'

const { Title, Text } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

// 테마별 이미지 매핑
const themeImages = {
  forest: forestImage,
  spring: springImage,
  cool: coolImage,
  warm: warmImage
}

// 테마별 스타일 매핑
const getThemeStyle = (themeType: ThemeType) => {
  switch (themeType) {
    case 'forest':
      return forestTheme
    case 'spring':
      return newSpringTheme
    case 'cool':
      return coolTheme
    case 'warm':
      return warmTheme
    default:
      return forestTheme
  }
}

// 테마별 보더 색상 선택 함수
const getThemeBorderColor = (themeType: ThemeType) => {
  const themeStyle = getThemeStyle(themeType)
  return 'warm' in themeStyle ? themeStyle.warm : themeStyle.highlight || themeStyle.secondary
}

// 테마별 강조 색상 선택 함수
const getThemeHighlightColor = (themeType: ThemeType) => {
  const themeStyle = getThemeStyle(themeType)
  return 'warm' in themeStyle ? themeStyle.warm : themeStyle.highlight || themeStyle.secondary
}

// 테마별 배경 색상 선택 함수 (클릭메시지용)
const getThemeBackgroundColor = (themeType: ThemeType) => {
  const themeStyle = getThemeStyle(themeType)
  return themeStyle.accent
}

// 테마별 카드 테두리 색상 선택 함수 (다양화)
const getThemeCardBorderColor = (themeType: ThemeType) => {
  const themeStyle = getThemeStyle(themeType)
  return themeStyle.primary
}

// 테마별 이모지 선택 함수
const getThemeEmoji = (themeType: ThemeType) => {
  switch (themeType) {
    case 'forest':
      return '🌿'
    case 'spring':
      return '🌸'
    case 'cool':
      return '❄️'
    case 'warm':
      return '🔥'
    default:
      return '🌿'
  }
}

// 테마별 클릭메시지 텍스트 색상 (가독성 개선)
const getThemeMessageTextColor = (themeType: ThemeType) => {
  switch (themeType) {
    case 'forest':
      return '#2d3436' // 진한 회색
    case 'spring':
      return '#2d3436' // 진한 회색
    case 'cool':
      return '#2d3436' // 진한 회색
    case 'warm':
      return '#2d3436' // 진한 회색
    default:
      return '#2d3436'
  }
}

// 브랜드별 문구 바리에이션 (브랜드명만 포함)
const brandMessages = {
  '수풀': [
    '혹시 "수풀" 들어보셨나요?',
    '자연의 향기 "수풀" 어떠세요?',
    '"수풀"과 함께 자연을 느껴보세요'
  ],
  '꽃내음': [
    '혹시 "꽃내음" 들어보셨나요?',
    '봄의 향기 "꽃내음" 어떠세요?',
    '"꽃내음"과 함께 봄을 만나보세요'
  ],
  '청량': [
    '혹시 "청량" 들어보셨나요?',
    '시원한 감촉 "청량" 어떠세요?',
    '"청량"과 함께 시원함을 느껴보세요'
  ],
  '온화': [
    '혹시 "온화" 들어보셨나요?',
    '포근한 온기 "온화" 어떠세요?',
    '"온화"와 함께 따뜻함을 느껴보세요'
  ]
}

// 테마별 제품 데이터는 ../data/themeProducts.ts에서 import

// 랜덤 브랜드 메시지 선택 함수
const getRandomBrandMessage = (brand?: string): string => {
  if (brand && brandMessages[brand as keyof typeof brandMessages]) {
    const messages = brandMessages[brand as keyof typeof brandMessages]
    return messages[Math.floor(Math.random() * messages.length)]
  }
  return '혹시 이런 제품은 어떠세요?'
}

// 테마별 클릭 메시지 선택 함수
const getThemeClickMessage = (themeType: ThemeType): string => {
  return themeProducts[themeType].clickMessage
}

interface AIRecommendationProps {
  product: AIRecommendedProduct | null
  loading: boolean
  error: string | null
  onProductClick?: (productId: string) => void
  onNavigate?: (route: string, theme?: ThemeType) => void
  themeType: ThemeType
}

/**
 * "" 안의 텍스트를 굵은 글씨로 강조하는 함수
 */
const formatMessage = (message: string, themeType: ThemeType) => {
  const parts = message.split(/"([^"]*)"/)
  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return (
        <span key={index} style={{ 
          fontWeight: 'bold', 
          color: getThemeCardBorderColor(themeType)
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
  onNavigate,
  themeType
}: AIRecommendationProps) {
  const handleProductClick = () => {
    if (product) {
      const personalizedMessage = generateClickMessage(product.name)
      message.success(personalizedMessage, 3)
      
      if (onProductClick) {
        onProductClick(product.id)
      }
      
      // 상세 페이지로 이동 (테마 정보와 함께)
      if (onNavigate) {
        onNavigate('productDetail', themeType)
      }
    }
  }

  if (loading) {
    return (
      <div className={styles.container}>
        <Card 
          className={styles.loadingCard}
          style={{ 
            backgroundColor: theme.white,
            border: `2px solid ${getThemeCardBorderColor(themeType)}`,
          }}
        >
          <div className={styles.loadingContent}>
            <Spin size="large" />
            <Text 
              className={styles.loadingText}
              style={{ color: getThemeHighlightColor(themeType) }}
            >
              한결이 추천할 물건을 고르고 있어요
              <FaRegSmileWink 
                className={styles.smileIcon}
                style={{ color: getThemeHighlightColor(themeType) }} 
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
          style={{ color: getThemeHighlightColor(themeType) }}
        >
          {formatMessage(getRandomBrandMessage(themeProducts[themeType].brand), themeType)}
        </Title>
      </div>

      {/* 클릭 메시지 */}
      <div 
        className={styles.clickMessage}
        style={{ 
          backgroundColor: getThemeBackgroundColor(themeType),
          border: `2px solid ${getThemeCardBorderColor(themeType)}`,
          boxShadow: theme.shadows.sm
        }}
      >
        <div className={styles.clickMessageContent}>
          <span className={styles.clickMessageIcon}>{getThemeEmoji(themeType)}</span>
          <Text 
            className={styles.clickMessageText}
            style={{ color: getThemeMessageTextColor(themeType) }}
          >
            {formatMessage(getThemeClickMessage(themeType), themeType)}
          </Text>
        </div>
      </div>

      {/* 메인 제품 카드 */}
      <Card 
        className={styles.productCard}
        style={{ 
          backgroundColor: theme.white,
          border: `2px solid ${getThemeCardBorderColor(themeType)}`,
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
              src={themeImages[themeType]}
              alt={themeProducts[themeType].name}
              className={styles.productImageImg}
              style={{ 
                border: `2px solid ${getThemeCardBorderColor(themeType)}`,
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
              style={{ color: getThemeHighlightColor(themeType) }}
            >
              {themeProducts[themeType].name}
            </Title>

            {/* 리뷰 / 구매수 */}
            <div className={styles.productRating}>
              <StarFilled className={styles.ratingIcon} />
              <Text 
                strong 
                className={styles.ratingScore}
                style={{ color: getThemeHighlightColor(themeType) }}
              >
                {themeProducts[themeType].rating}
              </Text>
              <Text 
                className={styles.ratingCount}
                style={{ color: getThemeHighlightColor(themeType) }}
              >
                / {themeProducts[themeType].reviewCount}
              </Text>
            </div>

            {/* 가격 */}
            <Text 
              strong 
              className={styles.productPrice}
              style={{ color: theme.secondary }}
            >
              {themeProducts[themeType].price}
            </Text>

            {/* 주요 성분 */}
            <div className={styles.productIngredients}>
              <Text 
                className={styles.ingredientsLabel}
                style={{ color: getThemeHighlightColor(themeType) }}
              >
                주요 성분: 
              </Text>
              <Text 
                className={styles.ingredientsList}
                style={{ color: getThemeCardBorderColor(themeType) }}
              >
                {themeProducts[themeType].ingredients}
              </Text>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
} 