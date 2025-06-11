import { useState } from 'react'
import { Button, Space, message, Modal, Typography } from 'antd'
import { HeartOutlined, ShoppingCartOutlined, CheckCircleOutlined } from '@ant-design/icons'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './BottomPurchaseBar.module.css'

const { Title, Text } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

const themeConfig = {
  forest: forestTheme,
  spring: newSpringTheme,
  cool: coolTheme,
  warm: warmTheme
}

interface BottomPurchaseBarProps {
  onWishlist?: () => void
  onAddToCart?: () => void
  onPurchase?: () => void
  onGoHome?: () => void
  price?: string
  themeType?: ThemeType
}

export function BottomPurchaseBar({ 
  onWishlist, 
  onAddToCart, 
  onPurchase,
  onGoHome,
  price = '₩49,000',
  themeType = 'forest'
}: BottomPurchaseBarProps) {
  
  const selectedTheme = themeConfig[themeType]
  const [showPurchaseModal, setShowPurchaseModal] = useState(false)
  
  const handleAddToCart = () => {
    message.success('장바구니에 추가되었습니다.')
    if (onAddToCart) {
      onAddToCart()
    }
  }

  const handlePurchase = () => {
    setShowPurchaseModal(true)
    if (onPurchase) {
      onPurchase()
    }
  }

  const handleGoHome = () => {
    setShowPurchaseModal(false)
    if (onGoHome) {
      onGoHome()
    }
  }

  const handleConfirm = () => {
    setShowPurchaseModal(false)
  }

  return (
    <div 
      className={styles.container}
      style={{
        backgroundColor: theme.white,
        borderTop: `2px solid ${selectedTheme.accent}`,
        boxShadow: theme.shadows.sm,
      }}
    >
      <div className={styles.content}>
        {/* 가격 */}
        <div className={styles.priceSection}>
          <span 
            className={styles.priceLabel}
            style={{ color: theme.primary }}
          >
            가격
          </span>
          <span 
            className={styles.priceValue}
            style={{ color: selectedTheme.primary }}
          >
            {price}
          </span>
        </div>

        {/* 버튼들 */}
        <Space className={styles.buttonGroup}>
          {/* 하트 버튼 */}
          <Button
            icon={<HeartOutlined />}
            size="large"
            onClick={onWishlist}
            className={`${styles.iconButton} ${styles.heartButton}`}
            style={{
              borderColor: selectedTheme.accent,
              backgroundColor: theme.white,
              color: selectedTheme.primary,
            }}
          />

          {/* 장바구니 버튼 */}
          <Button
            icon={<ShoppingCartOutlined />}
            size="large"
            onClick={handleAddToCart}
            className={`${styles.iconButton} ${styles.cartButton}`}
            style={{
              borderColor: selectedTheme.accent,
              backgroundColor: selectedTheme.accent,
              color: selectedTheme.primary,
            }}
          />

          {/* 구매하기 버튼 */}
          <Button
            type="primary"
            size="large"
            onClick={handlePurchase}
            className={styles.purchaseButton}
            style={{
              backgroundColor: selectedTheme.primary,
              borderColor: selectedTheme.primary,
              boxShadow: theme.shadows.md
            }}
          >
            구매하기
          </Button>
        </Space>
      </div>

      {/* 구매 완료 모달 */}
      <Modal
        open={showPurchaseModal}
        onCancel={handleConfirm}
        footer={null}
        centered
        closable={false}
        width={320}
        style={{ textAlign: 'center' }}
      >
        <div style={{ padding: '20px 0' }}>
          <CheckCircleOutlined 
            style={{ 
              fontSize: 48, 
              color: selectedTheme.primary,
              marginBottom: 16 
            }} 
          />
          <Title 
            level={3} 
            style={{ 
              color: selectedTheme.primary,
              marginBottom: 8 
            }}
          >
            구매되었습니다!
          </Title>
          <Text style={{ color: theme.text.secondary, display: 'block', marginBottom: 24 }}>
            주문이 성공적으로 완료되었습니다.
          </Text>
          
          <Space size="middle" style={{ width: '100%' }}>
            <Button 
              size="large" 
              onClick={handleGoHome}
              style={{ 
                flex: 1,
                borderColor: selectedTheme.accent,
                color: selectedTheme.primary 
              }}
            >
              돌아가기
            </Button>
            <Button 
              type="primary" 
              size="large" 
              onClick={handleConfirm}
              style={{ 
                flex: 1,
                backgroundColor: selectedTheme.primary,
                borderColor: selectedTheme.primary 
              }}
            >
              확인
            </Button>
          </Space>
        </div>
      </Modal>
    </div>
  )
} 