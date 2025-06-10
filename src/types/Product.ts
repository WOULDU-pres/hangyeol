export interface Product {
  id: string
  name: string
  category: string
  price: string
  image: string
  rating?: number
  featured?: boolean
}

// AI 추천 상품 전용 타입
export interface AIRecommendedProduct {
  id: string
  name: string
  image: string
  tags: string[]
  description: string
  price?: string
  brand?: string
}

// API 응답 타입
export interface AgentforceApiResponse {
  success: boolean
  data?: AIRecommendedProduct
  error?: string
} 