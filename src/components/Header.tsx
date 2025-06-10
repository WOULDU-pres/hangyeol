import { memo } from 'react'
import { Layout, Avatar, Button, Typography } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { theme } from '../styles/theme'
import styles from './Header.module.css'

const { Header: AntHeader } = Layout
const { Title } = Typography

interface HeaderProps {
  userName?: string
}

export const Header = memo(function Header({ userName = 'User' }: HeaderProps) {
  return (
    <AntHeader className={styles.header}>
      <div className={styles.container}>
        <Button
          type="text"
          icon={<MenuOutlined />}
          className={styles.menuButton}
        />
        
        <Title
          level={4}
          className={styles.title}
          style={{ color: theme.primary }}
        >
          Home
        </Title>
        
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
      </div>
    </AntHeader>
  )
}) 