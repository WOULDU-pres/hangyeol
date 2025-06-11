import { Button, Space, message } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './BottomPurchaseBar.module.css'

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
  price?: string
  themeType?: ThemeType
}

export function BottomPurchaseBar({ 
  onWishlist, 
  onAddToCart, 
  onPurchase,
  price = '₩49,000',
  themeType = 'forest'
}: BottomPurchaseBarProps) {
  
  const selectedTheme = themeConfig[themeType]
  
  const handleAddToCart = () => {
    message.success('장바구니에 추가되었습니다.')
    if (onAddToCart) {
      onAddToCart()
    }
  }

  const handlePurchase = () => {
    message.success('구매되었습니다.')
    if (onPurchase) {
      onPurchase()
    }
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
    </div>
  )
} 