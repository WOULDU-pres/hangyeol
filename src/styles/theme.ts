// Global Theme Configuration
// 전체 애플리케이션에서 사용하는 테마 색상 정의

// 기본 테마 색상 (모든 일반 버튼에 사용)
export const defaultTheme = {
  primary: '#504949',
  secondary: '#3f6845',
  background: '#f6f4f4',
  white: '#ffffff',
  text: {
    primary: '#1a1a1a',
    secondary: '#666666',
    light: '#999999'
  }
}

// 봄 테마 색상 (AI 추천 컴포넌트, 상세페이지 하단구매바 전용)
export const springTheme = {
  primary: '#FFD6BA',    // 연한 살구색
  secondary: '#FFE8CD',  // 연한 복숭아색
  tertiary: '#FFF2EB',   // 아이보리
  accent: '#FFDCDC',     // 연한 핑크
  highlight: '#FF9898'   // 코랄 핑크
}

// 숲 테마 색상 (AI 추천 컴포넌트, 상세페이지 하단구매바 전용)
export const forestTheme = {
  primary: '#6F826A',    // 깊은 녹색
  secondary: '#65B741',  // 밝은 녹색
  accent: '#BBD8A3',     // 연한 녹색
  background: '#F0F1C5', // 아이보리
  warm: '#BF9264'        // 따뜻한 베이지
}

// 쿨 테마 색상 (향후 확장용 - AI 추천 컴포넌트, 상세페이지 하단구매바 전용)
export const coolTheme = {
  primary: '#5B8DBE',    // 시원한 블루
  secondary: '#7BB3D9',  // 연한 블루
  accent: '#A8D0F0',     // 아이스 블루
  background: '#F0F8FF', // 앨리스 블루
  highlight: '#4A90E2'   // 비비드 블루
}

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  xxl: '24px'
}

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px'
}

export const shadows = {
  sm: '0 1px 3px rgba(0, 0, 0, 0.1)',
  md: '0 2px 8px rgba(0, 0, 0, 0.05)',
  lg: '0 4px 16px rgba(0, 0, 0, 0.1)'
}

export const fontSizes = {
  xs: '10px',
  sm: '12px',
  md: '14px',
  lg: '16px',
  xl: '18px',
  xxl: '20px',
  xxxl: '24px'
}

// 테마 컬렉션
export const themes = {
  default: defaultTheme,
  spring: springTheme,
  forest: forestTheme,
  cool: coolTheme
}

// 메인 테마 객체 (기본 테마를 기반으로)
export const theme = {
  ...defaultTheme,
  spacing,
  borderRadius,
  shadows,
  fontSizes,
  // 특수 테마들
  themes
}

export type ThemeType = typeof theme
export type ThemeNames = keyof typeof themes 