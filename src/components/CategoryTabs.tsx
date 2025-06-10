import { Tabs } from 'antd'
import styles from './CategoryTabs.module.css'

interface CategoryTabsProps {
  onCategoryChange: (category: string) => void
}

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'face', label: 'Face Care' },
  { id: 'body', label: 'Body Care' },
  { id: 'hair', label: 'Hair Care' }
]

export function CategoryTabs({ onCategoryChange }: CategoryTabsProps) {
  const handleTabChange = (activeKey: string) => {
    onCategoryChange(activeKey)
  }

  const items = categories.map((category) => ({
    key: category.id,
    label: category.label,
    children: null, // We don't need content, just the tab functionality
  }))

  return (
    <div className={styles.container}>
      <Tabs
        defaultActiveKey="all"
        onChange={handleTabChange}
        size="small"
        tabPosition="top"
        className={styles.tabs}
        items={items}
        tabBarStyle={{
          marginBottom: 0,
          borderBottom: 'none',
        }}
        tabBarGutter={35}
      />
    </div>
  )
} 