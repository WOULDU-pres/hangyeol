import type { AgentforceApiResponse, AIRecommendedProduct } from '../types/Product'
import { DEV_CONFIG, shouldShowDefaultRecommendation } from '../utils/devConfig'

// 현재 단계에서는 agentforce API는 호출했다고 가정하고 진행
// 실제 API 엔드포인트가 준비되면 이 부분을 수정
// const AGENTFORCE_API_URL = 'https://api.agentforce.example.com/recommend'

/**
 * agentforce AI 추천 API 호출
 * @param searchQuery 검색어
 * @returns AI 추천 상품 정보
 * 
 * TODO: 실제 API 연결 시 수정 필요
 * 1. AGENTFORCE_API_URL을 실제 엔드포인트로 변경
 * 2. 아래 주석된 fetch 코드 활성화
 * 3. mockRecommendation 로직 제거
 */
export async function getAIRecommendation(searchQuery: string): Promise<AgentforceApiResponse> {
  try {
    // 1초 응답 시간을 시뮬레이션하기 위한 딜레이
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // TODO: 실제 API 호출로 교체 예정
    // const response = await fetch(`${AGENTFORCE_API_URL}?query=${encodeURIComponent(searchQuery)}`)
    // const data = await response.json()
    
    // 현재는 가짜 데이터로 응답
    const mockRecommendation: AIRecommendedProduct = {
      id: `ai-rec-${Date.now()}`,
      name: `${searchQuery}에 최적화된 추천 상품`,
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=300&fit=crop&crop=center',
      tags: ['#AI추천', '#맞춤형', '#인기상품'],
      description: `${searchQuery} 검색에 기반한 AI 맞춤 추천 상품입니다. 사용자의 취향과 트렌드를 분석하여 선별했습니다.`,
      price: (Math.floor(Math.random() * 100000) + 10000).toString(),
      brand: 'AI Select'
    }

    return {
      success: true,
      data: mockRecommendation
    }
  } catch (error) {
    console.error('agentforce API 호출 실패:', error)
    return {
      success: false,
      error: 'AI 추천 상품을 불러오는데 실패했습니다. 잠시 후 다시 시도해주세요.'
    }
  }
}

/**
 * 개발 환경에서 기본 추천 상품 반환
 * 실제 API 연결 전까지 사용
 */
export function getDefaultRecommendation(): AgentforceApiResponse {
  if (shouldShowDefaultRecommendation()) {
    return {
      success: true,
      data: DEV_CONFIG.DEFAULT_AI_RECOMMENDATION as unknown as AIRecommendedProduct
    }
  }
  
  return {
    success: false,
    error: '추천 상품을 불러올 수 없습니다.'
  }
}

/**
 * 추천 상품 클릭 시 메시지 생성
 * @param productName 상품명
 * @returns 개인화된 메시지
 */
export function generateClickMessage(productName: string): string {
  const messages = [
    `산뜻한 지원님께 알맞는 ${productName}을 준비해봤어요.`,
    `${productName}이 지원님의 스타일에 완벽하게 어울릴 것 같아요.`,
    `지원님을 위해 특별히 선별한 ${productName}입니다.`
  ]
  
  return messages[0] // 요구사항에 따른 기본 메시지 사용
} 