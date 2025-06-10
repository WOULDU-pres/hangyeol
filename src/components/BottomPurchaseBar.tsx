import { Button, Space } from 'antd'
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons'

// 테마 색상 정의 - AIRecommendation과 동일
const theme = {
  primary: '#6F826A',      // 깊은 녹색
  secondary: '#65B741',    // 밝은 녹색  
  accent: '#BBD8A3',       // 연한 녹색
  background: '#F0F1C5',   // 아이보리
  warm: '#BF9264',         // 따뜻한 베이지
  white: '#ffffff'
}

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
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '414px',
      backgroundColor: theme.white,
      borderTop: `2px solid ${theme.accent}`,
      padding: '16px 20px',
      boxShadow: '0 -4px 12px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px'
      }}>
        {/* 가격 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <span style={{
            fontSize: '12px',
            color: theme.primary,
            opacity: 0.7
          }}>
            가격
          </span>
          <span style={{
            fontSize: '20px',
            fontWeight: 'bold',
            color: theme.secondary
          }}>
            {price}
          </span>
        </div>

        {/* 버튼들 */}
        <Space size={8}>
          {/* 하트 버튼 */}
          <Button
            icon={<HeartOutlined />}
            size="large"
            onClick={onWishlist}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              border: `2px solid ${theme.accent}`,
              backgroundColor: theme.white,
              color: theme.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />

          {/* 장바구니 버튼 */}
          <Button
            icon={<ShoppingCartOutlined />}
            size="large"
            onClick={onAddToCart}
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              border: `2px solid ${theme.accent}`,
              backgroundColor: theme.accent,
              color: theme.primary,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          />

          {/* 구매하기 버튼 */}
          <Button
            type="primary"
            size="large"
            onClick={onPurchase}
            style={{
              minWidth: '120px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: theme.secondary,
              borderColor: theme.secondary,
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 4px 12px rgba(101, 183, 65, 0.3)'
            }}
          >
            구매하기
          </Button>
        </Space>
      </div>
    </div>
  )
} 