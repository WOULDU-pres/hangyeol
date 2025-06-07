import styles from './Header.module.css'

interface HeaderProps {
  userName?: string
}

export function Header({ userName = 'User' }: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.headerLeft}>
          <div className={styles.menuIcon}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        
        <h1 className={styles.headerTitle}>Home</h1>
        
        <div className={styles.headerRight}>
          <div className={styles.profileImage}>
            <div className={styles.profilePlaceholder}>
              {userName.charAt(0)}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
} 