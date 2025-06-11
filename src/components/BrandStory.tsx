import { Typography } from 'antd'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './BrandStory.module.css'
import detailForestImage from '../assets/detail_forest.png'
import detailSpringImage from '../assets/detail_spring.png'
import detailCoolImage from '../assets/detail_cool.png'
import detailWarmImage from '../assets/detail_warm.png'

const { Title, Text } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

const themeConfig = {
  forest: {
    theme: forestTheme,
    backgroundImage: detailForestImage,
    brandName: '수풀',
    title: '자연이 전하는 이야기',
    story: {
      intro: '수풀은 도시 한복판에서 우연히 만난 작은 숲길에서 영감을 받았어요. 그곳에선 시간이 다르게 흘렀거든요. 급하지도, 느리지도 않은 자연만의 리듬, 그 깊은 평온함을 담고 싶었답니다.',
      middle: '지원님을 만나면 마음이 차분해져요.<br />마치 깊은 숲속에 들어선 것처럼 복잡했던 생각들이<br />하나둘 정리되면서 진짜 중요한 것들만 남게 되더라고요.<br />그런 고요하지만 깊은 힘을 가진 분이에요.',
      closing: '수풀은 지원님이 가진 그 자연스러운 평온함을 그대로 옮겨 담았어요.<br />사용할 때마다 마음 한구석에 작은 숲이 생기는, 그런 경험을 선사하고 싶어요.',
      finalMessage: '때로는 멈춰 서는 것도 필요해요.<br />수풀과 함께라면 언제든 마음의 숲에서 쉬어갈 수 있을 거예요.'
    }
  },
  spring: {
    theme: newSpringTheme,
    backgroundImage: detailSpringImage,
    brandName: '꽃내음',
    title: '봄이 속삭이는 이야기',
    story: {
      intro: '꽃내음은 첫 눈에 반한 벚꽃처럼, 순간의 설렘을 영원히 간직하고 싶은 마음에서 시작되었어요. 바람에 흩날리는 꽃잎 하나하나가 전하는 작은 기적들, 그 소중함을 닮고 싶었답니다.',
      middle: '지원님을 보면 4월의 첫 벚꽃이 떠올라요.<br />어느새 조용히 피어나 모든 이의 발걸음을 멈추게 하고,<br />스쳐가는 이들에게 "아, 봄이구나" 하는 깨달음을,<br />그리고 가슴 한편에 따스한 미소를 남기는 분이에요.',
      closing: '꽃내음은 그런 지원님의 순간들을 향기로 담아내고 싶었어요.<br />벚꽃이 피어나듯 자연스럽게, 하지만 깊이 있게 기억되는 그런 향으로요.',
      finalMessage: '꽃잎은 떨어져도 향기는 남아,<br />꽃내음과 함께라면 언제나 봄날 같은 하루를 선물받을 거예요.'
    }
  },
  cool: {
    theme: coolTheme,
    backgroundImage: detailCoolImage,
    brandName: '청량',
    title: '청량함이 들려주는 이야기',
    story: {
      intro: '청량은 눈 뜨는 순간 맞이하는 새벽 공기처럼, 모든 것을 깨끗하게 정리해주는 힘에서 영감을 받았어요. 복잡한 하루를 한 순간에 정리해주는 시원한 바람의 마법을 담고 싶었거든요.',
      middle: '지원님만의 특별함은 정말 신기해요.<br />마치 깨끗한 유리창 같아서, 만나는 사람들이<br />자신도 모르게 더 선명하고 맑아지는 느낌을 받아요.<br />복잡했던 마음이 어느새 정돈되어 있더라고요.',
      closing: '청량은 그런 지원님의 에너지를 그대로 담아내려고 해요.<br />한 번 바르면 세상이 좀 더 선명해지고, 마음도 한결 가벼워지는 그런 제품으로요.',
      finalMessage: '맑음은 전염되는 법이에요.<br />청량과 함께라면 매일이 새로 시작하는 기분일 거예요.'
    }
  },
  warm: {
    theme: warmTheme,
    backgroundImage: detailWarmImage,
    brandName: '따스함',
    title: '온기가 전하는 이야기',
    story: {
      intro: '따스함은 할머니의 품 같은 그 편안함에서 시작됐어요. 어떤 날이든 "괜찮다, 괜찮아"라고 말해주는 그런 포근함, 지친 하루의 끝에서 만나는 고마운 온기를 담고 싶었거든요.',
      middle: '지원님에게는 참 특별한 마법이 있어요.<br />함께 있으면 세상이 조금 더 안전해지는 느낌?<br />마치 따뜻한 차 한 잔을 건네받는 것처럼<br />마음 한구석이 스르르 녹아내리며 편안해지는 거죠.',
      closing: '따스함은 그런 지원님의 온기를 고스란히 담아내려고 해요.<br />피부에 닿는 순간부터 마음까지 따뜻해지는, 진짜 포근함을 전해드리고 싶어요.',
      finalMessage: '어떤 날이든 괜찮아질 거예요.<br />따스함과 함께라면 매일 안아주는 온기를 느낄 수 있을 테니까요.'
    }
  }
}

interface BrandStoryProps {
  themeType?: ThemeType
}

export function BrandStory({ themeType = 'forest' }: BrandStoryProps) {
  const config = themeConfig[themeType]
  
  // 배경 이미지 처리 - 모든 테마에 실제 이미지 사용
  const backgroundImageUrl = config.backgroundImage

  return (
    <div className={styles.container} style={{ borderColor: config.theme.accent }}>
      <div 
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          opacity: 0.2
        }}
      />
      
      <div className={styles.content}>
        <Title 
          level={3} 
          className={styles.title}
          style={{ color: config.theme.primary }}
        >
          {config.title}
        </Title>
        
        <div className={styles.storyContent}>
          <Text className={styles.storyText} style={{ color: theme.text.primary }}>
            <strong style={{ color: config.theme.primary }}>{config.brandName}</strong>은 {config.story.intro}
          </Text>
          
          <br /><br />
          
          <Text className={styles.storyText} style={{ color: theme.text.primary }}>
            <strong style={{ color: '#FFD586', fontSize: '17px' }}>지원님</strong>은 {config.story.middle.split('<br />').map((line, index) => (
              index === 0 ? line : <><br key={index} />{line}</>
            ))}
          </Text>
          
          <br /><br />
          
          <Text className={styles.storyText} style={{ color: theme.text.primary }}>
            <strong style={{ color: config.theme.primary }}>{config.brandName}</strong>은 {config.story.closing.split('<br />').map((line, index) => (
              index === 0 ? line : <><br key={index} />{line}</>
            ))}
          </Text>
          
          <br /><br />
          
          <Text 
            className={styles.closingText} 
            style={{ 
              color: 'warm' in config.theme ? config.theme.warm : config.theme.secondary,
              fontStyle: 'italic'
            }}
          >
            {config.story.finalMessage.split('<br />').map((line, index) => (
              index === 0 ? line : <><br key={index} />{line}</>
            ))}
          </Text>
        </div>
      </div>
    </div>
  )
} 