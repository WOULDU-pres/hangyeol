import { memo } from 'react'
import { Layout, Avatar, Button, Typography } from 'antd'
import { MenuOutlined, ArrowLeftOutlined } from '@ant-design/icons'
import { theme } from '../styles/theme'
import styles from './Header.module.css'

const { Header: AntHeader } = Layout
const { Title } = Typography

interface HeaderProps {
  userName?: string
  onBack?: () => void
  showAvatar?: boolean
  title?: string
}

export const Header = memo(function Header({ 
  userName = 'User', 
  onBack, 
  showAvatar = true, 
  title = 'Home' 
}: HeaderProps) {
  return (
    <AntHeader className={styles.header}>
      <div className={styles.container}>
        <Button
          type="text"
          icon={onBack ? <ArrowLeftOutlined /> : <MenuOutlined />}
          className={styles.menuButton}
          onClick={onBack}
        />
        
        <Title
          level={4}
          className={styles.title}
          style={{ color: theme.primary }}
        >
          {title}
        </Title>
        
        {showAvatar && (
          <Avatar
            size={42}
            className={styles.avatar}
            style={{
              backgroundColor: theme.background,
              color: theme.primary,
            }}
          >
            {userName.charAt(0)}
          </Avatar>
        )}
        
        {!showAvatar && <div className={styles.spacer} />}
      </div>
    </AntHeader>
  )
}) 