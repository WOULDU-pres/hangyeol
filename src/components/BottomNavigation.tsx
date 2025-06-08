import { useState } from 'react'
import { Button, Flex } from 'antd'
import { HomeOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons'

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
      style={{
        position: 'fixed',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '414px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f0f0f0',
        padding: '8px 0',
        zIndex: 1000,
      }}
    >
      <Flex justify="space-around" align="center">
        {navItems.map((item) => (
          <Button
            key={item.id}
            type="text"
            icon={item.icon}
            onClick={() => handleTabClick(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '50px',
              border: 'none',
              boxShadow: 'none',
              color: activeTab === item.id ? '#2d2d2d' : '#888888',
              fontSize: '22px',
            }}
          />
        ))}
      </Flex>
    </div>
  )
} 