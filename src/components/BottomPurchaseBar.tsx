import { Button, Space, message } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { theme, springTheme } from '../styles/theme'
import styles from './BottomPurchaseBar.module.css'

interface BottomPurchaseBarProps {
  onWishlist?: () => void
  onAddToCart?: () => void
  onPurchase?: () => void
  price?: string
}

export function BottomPurchaseBar({ 
  onWishlist, 
  onAddToCart, 
  onPurchase,
  price = '₩49,000'
}: BottomPurchaseBarProps) {
  
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
        borderTop: `2px solid ${springTheme.accent}`,
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
            style={{ color: theme.secondary }}
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
              borderColor: springTheme.accent,
              backgroundColor: theme.white,
              color: theme.primary,
            }}
          />

          {/* 장바구니 버튼 */}
          <Button
            icon={<ShoppingCartOutlined />}
            size="large"
            onClick={handleAddToCart}
            className={`${styles.iconButton} ${styles.cartButton}`}
            style={{
              borderColor: springTheme.accent,
              backgroundColor: springTheme.accent,
              color: theme.primary,
            }}
          />

          {/* 구매하기 버튼 */}
          <Button
            type="primary"
            size="large"
            onClick={handlePurchase}
            className={styles.purchaseButton}
            style={{
              backgroundColor: theme.secondary,
              borderColor: theme.secondary,
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