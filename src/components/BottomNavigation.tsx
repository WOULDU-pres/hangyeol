import { useState } from 'react'
import { Button, Flex } from 'antd'
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'
import { theme } from '../styles/theme'
import styles from './BottomNavigation.module.css'

interface BottomNavigationProps {
  onNavigate: (route: string) => void
}

const navItems = [
  { id: 'home', icon: <HomeOutlined />, label: 'Home' },
  { id: 'search', icon: <SearchOutlined />, label: 'Search' },
  { id: 'profile', icon: <UserOutlined />, label: 'Profile' }
]

export function BottomNavigation({ onNavigate }: BottomNavigationProps) {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onNavigate(tabId)
  }

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: theme.white,
      }}
    >
      <Flex className={styles.navContainer}>
        {navItems.map((item) => (
          <Button
            key={item.id}
            type="text"
            icon={item.icon}
            onClick={() => handleTabClick(item.id)}
            className={`${styles.navButton} ${
              activeTab === item.id ? styles.navButtonActive : styles.navButtonInactive
            }`}
          />
        ))}
      </Flex>
    </div>
  )
} 