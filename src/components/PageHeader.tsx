import { Button, Typography } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { theme } from '../styles/theme'
import styles from './PageHeader.module.css'

const { Title } = Typography

interface PageHeaderProps {
  title: string
  onBack?: () => void
  showBackButton?: boolean
}

export function PageHeader({ 
  title, 
  onBack, 
  showBackButton = true 
}: PageHeaderProps) {
  return (
    <div className={styles.header} style={{ backgroundColor: theme.white }}>
      {showBackButton && (
        <Button
          icon={<ArrowLeftOutlined />}
          type="text"
          onClick={onBack}
          className={styles.backButton}
          style={{ color: theme.primary }}
        />
      )}
      <Title 
        level={4} 
        className={styles.title}
        style={{ color: theme.primary }}
      >
        {title}
      </Title>
      {!showBackButton && <div className={styles.spacer} />}
    </div>
  )
} 