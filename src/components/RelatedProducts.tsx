import { Typography } from 'antd'
import { IoIosStarHalf } from 'react-icons/io'
import { forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './RelatedProducts.module.css'
import springImage1 from '../assets/spring_style_cosmetics (1).jpg'
import springImage2 from '../assets/spring_style_cosmetics.jpg'
import forestImage1 from '../assets/forest_style_cosmetics (1).jpg'
import forestImage2 from '../assets/forest_style_cosmetics (2).jpg'
import forestImage3 from '../assets/forest_style_cosmetics (3).jpg'
import coolImage from '../assets/cool_style_cosmetics.png'
import warmImage from '../assets/warm_style_cosmetics.png'

const { Title } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

interface RelatedProduct {
  id: string
  name: string
  brand: string
  price: string
  image: string
  rating: number
  reviewCount: number
  aiScore: number
}

const themeProductsData = {
  forest: [
    {
      id: 'f1',
      name: '참나무 바디 밤',
      brand: '수풀',
      price: '₩52,000',
      image: forestImage1,
      rating: 4.4,
      reviewCount: 1680,
      aiScore: 83
    },
    {
      id: 'f2',
      name: '제주 편백나무 크림',
      brand: '자연본색',
      price: '₩47,000',
      image: forestImage2,
      rating: 4.2,
      reviewCount: 2340,
      aiScore: 78
    },
    {
      id: 'f3',
      name: '우지차 녹차 바디 밤',
      brand: '푸른숲',
      price: '₩45,000',
      image: forestImage3,
      rating: 4.6,
      reviewCount: 1920,
      aiScore: 86
    }
  ],
  spring: [
    {
      id: 's1',
      name: '벚꽃 블라썸 크림',
      brand: '꽃내음',
      price: '₩28,000',
      image: springImage1,
      rating: 4.7,
      reviewCount: 3240,
      aiScore: 89
    },
    {
      id: 's2',
      name: '로즈 페탈 에센스',
      brand: '꽃마을',
      price: '₩36,000',
      image: springImage2,
      rating: 4.3,
      reviewCount: 2150,
      aiScore: 81
    },
    {
      id: 's3',
      name: '프로방스 라벤더 미스트',
      brand: '꽃내음',
      price: '₩42,000',
      image: springImage1,
      rating: 4.5,
      reviewCount: 1870,
      aiScore: 84
    }
  ],
  cool: [
    {
      id: 'c1',
      name: '아이스 쿨링 젤',
      brand: '청량',
      price: '₩32,000',
      image: coolImage,
      rating: 4.8,
      reviewCount: 2890,
      aiScore: 92
    },
    {
      id: 'c2',
      name: '글레이셜 하이드라 세럼',
      brand: '청명한날',
      price: '₩29,000',
      image: coolImage,
      rating: 4.4,
      reviewCount: 3450,
      aiScore: 87
    },
    {
      id: 'c3',
      name: '페퍼민트 프레시 밤',
      brand: '맑은바람',
      price: '₩38,000',
      image: coolImage,
      rating: 4.6,
      reviewCount: 1650,
      aiScore: 85
    }
  ],
  warm: [
    {
      id: 'w1',
      name: '카카오 버터 밤',
      brand: '따스함',
      price: '₩55,000',
      image: warmImage,
      rating: 4.9,
      reviewCount: 1420,
      aiScore: 94
    },
    {
      id: 'w2',
      name: '시나몬 스파이스 크림',
      brand: '포근함',
      price: '₩48,000',
      image: warmImage,
      rating: 4.5,
      reviewCount: 2760,
      aiScore: 88
    },
    {
      id: 'w3',
      name: '바닐라 아몬드 버터',
      brand: '온기담은',
      price: '₩44,000',
      image: warmImage,
      rating: 4.3,
      reviewCount: 1980,
      aiScore: 82
    }
  ]
}

interface RelatedProductsProps {
  themeType?: ThemeType
  products?: RelatedProduct[]
}

export function RelatedProducts({ themeType = 'forest', products }: RelatedProductsProps) {
  const currentProducts = products || themeProductsData[themeType]
  const currentTheme = {
    forest: forestTheme,
    spring: newSpringTheme,
    cool: coolTheme,
    warm: warmTheme
  }[themeType]

  const themeSubtitles = {
    forest: '자연이 추천하는 천연 제품',
    spring: '꽃향기 가득한 봄 제품',
    cool: '시원하고 깔끔한 제품',
    warm: '따뜻하고 포근한 제품'
  }

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Title level={4} className={styles.title} style={{ color: currentTheme.primary }}>
          혹시 이런 제품은 어때요?
        </Title>
        <div className={styles.subtitle}>{themeSubtitles[themeType]}</div>
      </div>
      
      <div className={styles.productsContainer}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <img 
              src={product.image} 
              alt={product.name}
              className={styles.productImage}
            />
            <div className={styles.productName}>{product.name}</div>
            <div className={styles.brandName}>{product.brand}</div>
            <div className={styles.price}>{product.price}</div>
            <div className={styles.rating}>
              <span className={styles.stars}><IoIosStarHalf size={16} /></span>
              <span className={styles.ratingText}>{product.rating} ({product.reviewCount.toLocaleString()})</span>
            </div>
            <div className={styles.aiEvaluation} style={{ color: currentTheme.primary }}>
              💡 AI 종합 평가 <span className={styles.aiScore} style={{ color: currentTheme.secondary }}>{product.aiScore}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
} 