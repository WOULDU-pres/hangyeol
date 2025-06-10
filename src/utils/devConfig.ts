// 개발 환경에서 AI 추천을 테스트하기 위한 설정
// 실제 API 연결 시 이 파일의 ALWAYS_SHOW_AI_RECOMMENDATION을 false로 변경하면 됩니다.

export const DEV_CONFIG = {
  // 개발 중에는 항상 AI 추천을 표시 (실제 배포 시 false로 변경)
  ALWAYS_SHOW_AI_RECOMMENDATION: true,
  
  // 기본 추천 상품 (실제 API 연결 전까지 사용)
  DEFAULT_AI_RECOMMENDATION: {
    id: 'dev-recommendation-001',
    name: '개발자를 위한 특별 추천 상품',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop&crop=center',
    tags: ['#개발중', '#AI추천', '#테스트'],
    description: '개발 환경에서 AI 추천 기능을 테스트하기 위한 샘플 상품입니다. 실제 API 연결 후 이 상품은 자동으로 사라집니다.',
    price: 49000,
    brand: 'Dev Brand'
  }
}

// 환경 체크 함수
export function isDevelopment(): boolean {
  return import.meta.env.DEV === true
}

// 개발 환경에서 AI 추천을 항상 표시할지 결정
export function shouldShowDefaultRecommendation(): boolean {
  return isDevelopment() && DEV_CONFIG.ALWAYS_SHOW_AI_RECOMMENDATION
} 