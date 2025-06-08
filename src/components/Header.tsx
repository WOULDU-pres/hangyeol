import { memo } from 'react'
import { Layout, Avatar, Button, Typography } from 'antd'
import { MenuOutlined } from '@ant-design/icons'

const { Header: AntHeader } = Layout
const { Title } = Typography

interface HeaderProps {
  userName?: string
}

export const Header = memo(function Header({ userName = 'User' }: HeaderProps) {
  return (
    <AntHeader 
      style={{
        background: 'transparent',
        padding: '14px 14px 0 14px',
        height: 'auto',
        lineHeight: 'normal',
        marginBottom: '20px',
      }}
    >
      <div 
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '42px',
        }}
      >
        <Button
          type="text"
          icon={<MenuOutlined />}
          style={{
            border: 'none',
            boxShadow: 'none',
            padding: '0',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
        
        <Title
          level={4}
          style={{
            margin: 0,
            fontFamily: "'Sulphur Point', sans-serif",
            fontWeight: 700,
            fontSize: '16px',
            color: '#504949',
            letterSpacing: '1px',
          }}
        >
          Home
        </Title>
        
        <Avatar
          size={42}
          style={{
            backgroundColor: '#f6eded',
            color: '#504949',
            fontWeight: 600,
            fontSize: '16px',
          }}
        >
          {userName.charAt(0)}
        </Avatar>
      </div>
    </AntHeader>
  )
}) 