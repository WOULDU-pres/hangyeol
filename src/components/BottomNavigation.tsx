import { useState } from 'react'
import styles from './BottomNavigation.module.css'

interface BottomNavigationProps {
  onNavigate: (route: string) => void
}

const navItems = [
  { id: 'home', icon: 'grid', label: 'Home' },
  { id: 'search', icon: 'search', label: 'Search' },
  { id: 'profile', icon: 'user', label: 'Profile' }
]

export function BottomNavigation({ onNavigate }: BottomNavigationProps) {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onNavigate(tabId)
  }

  const renderIcon = (iconType: string, isActive: boolean) => {
    const color = isActive ? '#2d2d2d' : '#2d2d2d'
    
    switch (iconType) {
      case 'grid':
        return (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="1" y="1" width="8" height="8" rx="1" fill={color} stroke={color}/>
            <rect x="13" y="1" width="8" height="8" rx="1" fill={color} stroke={color}/>
            <rect x="13" y="13" width="8" height="8" rx="1" fill={color} stroke={color}/>
            <rect x="1" y="13" width="8" height="8" rx="1" fill={color} stroke={color}/>
          </svg>
        )
      case 'search':
        return (
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <circle cx="9" cy="9" r="8" stroke={color} strokeWidth="1"/>
            <path d="m17 17-4.35-4.35" stroke={color} strokeWidth="1"/>
          </svg>
        )
      case 'user':
        return (
          <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
            <circle cx="10" cy="7" r="4" stroke={color} strokeWidth="1"/>
            <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" stroke={color} strokeWidth="1"/>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <nav className={styles.bottomNavigation}>
      <div className={styles.navContainer}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${activeTab === item.id ? styles.active : ''}`}
            onClick={() => handleTabClick(item.id)}
          >
            <div className={styles.navIcon}>
              {renderIcon(item.icon, activeTab === item.id)}
            </div>
          </button>
        ))}
      </div>
    </nav>
  )
} 