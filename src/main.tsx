import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ConfigProvider } from 'antd';
import './styles/globals.css';
import App from './App.tsx';

// Ant Design 모바일 최적화 테마
const theme = {
  token: {
    colorPrimary: '#504949',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#fafafa',
    borderRadius: 12,
    fontSize: 14,
    fontFamily: "'Sulphur Point', sans-serif",
  },
  components: {
    Layout: {
      bodyBg: '#fafafa',
    },
    Button: {
      borderRadius: 12,
      controlHeight: 48,
    },
    Input: {
      borderRadius: 12,
      controlHeight: 48,
      paddingInline: 14,
    },
    Card: {
      borderRadius: 12,
    },
    Tabs: {
      fontSize: 12,
      fontWeight: 700,
    },
  },
};

// Render the main app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={theme}>
      <App />
    </ConfigProvider>
  </StrictMode>,
);
