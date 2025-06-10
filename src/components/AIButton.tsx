import { Button } from 'antd'
import { RiRobot3Line } from 'react-icons/ri'
import { theme } from '../styles/theme'
import styles from './AIButton.module.css'

interface AIButtonProps {
  onClick?: () => void
  size?: 'small' | 'large'
  'aria-label'?: string
}

export function AIButton({ 
  onClick, 
  size = 'large',
  'aria-label': ariaLabel = '한결이에게 물어보기'
}: AIButtonProps) {
  return (
    <Button
      type="default"
      icon={<RiRobot3Line size={size === 'large' ? 24 : 20} />}
      size={size}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${styles.aiButton} ${size === 'small' ? styles.small : styles.large}`}
      style={{
        backgroundColor: theme.background,
        color: theme.primary,
      }}
    />
  )
} 