import { Tabs } from 'antd'

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
    <div style={{ padding: '0 14px', marginBottom: '30px' }}>
      <Tabs
        defaultActiveKey="all"
        onChange={handleTabChange}
        size="small"
        tabPosition="top"
        style={{
          fontFamily: "'Sulphur Point', sans-serif",
          fontSize: '12px',
          fontWeight: 700,
          letterSpacing: '1px',
        }}
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