import { Card, Typography, Progress, Space, Row, Col } from 'antd'
import { RobotOutlined, StarFilled, ExperimentOutlined, SkinOutlined } from '@ant-design/icons'
import { theme, forestTheme, newSpringTheme, coolTheme, warmTheme } from '../styles/theme'
import styles from './AIAnalysis.module.css'

const { Title, Text } = Typography

type ThemeType = 'forest' | 'spring' | 'cool' | 'warm'

const themeConfig = {
  forest: forestTheme,
  spring: newSpringTheme,
  cool: coolTheme,
  warm: warmTheme
}

interface AnalysisItem {
  title: string
  value: string | number
  percentage?: number
  description: string
  icon: React.ReactNode
  color: string
}

interface AIAnalysisProps {
  themeType?: ThemeType
}

export function AIAnalysis({ themeType = 'forest' }: AIAnalysisProps) {
  const selectedTheme = themeConfig[themeType]
  
  const analysisData: AnalysisItem[] = [
    {
      title: '리뷰 대비 실 구매자수',
      value: '94%',
      percentage: 94,
      description: '100명 중 94명이 재구매 의사 표현',
      icon: <StarFilled />,
      color: selectedTheme.primary
    },
    {
      title: '가성비 (타 제품군 간 비교)',
      value: '8.7/10',
      percentage: 87,
      description: '동급 제품 대비 25% 높은 성능/가격 비율',
      icon: <ExperimentOutlined />,
      color: selectedTheme.secondary
    },
    {
      title: '성분',
      value: '최적 조합',
      percentage: 96,
      description: '히알루론산, 세라마이드가 건성피부에 최적화된 성분으로 깊은 보습과 피부 장벽 강화 효과를 제공합니다.',
      icon: <ExperimentOutlined />,
      color: selectedTheme.accent
    },
    {
      title: '피부 타입',
      value: '건성/복합성',
      percentage: 95,
      description: '지원님의 피부타입과 98% 일치. 특히 건조한 부위의 집중 케어에 탁월한 효과를 보입니다.',
      icon: <SkinOutlined />,
      color: 'warm' in selectedTheme ? selectedTheme.warm : selectedTheme.secondary
    }
  ]

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <RobotOutlined 
          className={styles.aiIcon}
          style={{ color: selectedTheme.primary }}
        />
        <Title 
          level={3} 
          className={styles.title}
          style={{ color: selectedTheme.primary }}
        >
          AI 상세 분석 결과
        </Title>
      </div>
      
      <Text 
        className={styles.subtitle}
        style={{ color: theme.text.secondary }}
      >
        데이터 기반으로 분석한 '참나무 바디 밤'의 추천 근거입니다.
      </Text>

      <div className={styles.analysisGrid}>
        {analysisData.map((item, index) => (
          <Card
            key={index}
            className={styles.analysisCard}
            style={{
              backgroundColor: theme.white,
              border: `1px solid ${selectedTheme.accent}`,
              boxShadow: theme.shadows.sm
            }}
          >
            <Row align="middle" gutter={16}>
              <Col span={4}>
                <div 
                  className={styles.iconContainer}
                  style={{ 
                    backgroundColor: item.color,
                    color: theme.white
                  }}
                >
                  {item.icon}
                </div>
              </Col>
              
              <Col span={20}>
                <Space direction="vertical" size={8} style={{ width: '100%' }}>
                  <div className={styles.itemHeader}>
                    <Text 
                      strong 
                      className={styles.itemTitle}
                      style={{ color: selectedTheme.primary }}
                    >
                      {item.title}
                    </Text>
                    <Text 
                      className={styles.itemValue}
                      style={{ color: selectedTheme.secondary }}
                    >
                      {item.value}
                    </Text>
                  </div>
                  
                  {item.percentage && (
                    <Progress
                      percent={item.percentage}
                      showInfo={false}
                      strokeColor={item.color}
                      trailColor="#f0f0f0"
                      className={styles.progressBar}
                    />
                  )}
                  
                  <Text 
                    className={styles.itemDescription}
                    style={{ color: theme.text.secondary }}
                  >
                    {item.description}
                  </Text>
                </Space>
              </Col>
            </Row>
          </Card>
        ))}
      </div>
      
      <div 
        className={styles.summary}
        style={{
          backgroundColor: selectedTheme.background,
          border: `2px solid ${selectedTheme.accent}`
        }}
      >
        <Text 
          className={styles.summaryText}
          style={{ color: selectedTheme.primary }}
        >
          💡 <strong>AI 종합 평가:</strong> <span style={{ color: '#FF9B45', fontSize: '16px' }}>지원님</span>의 피부 특성과 선호도를 종합 분석한 결과, 
          '참나무 바디 밤'은 <strong style={{ color: '#CD5656', fontSize: '16px' }}>98.2%</strong>의 높은 만족도를 예측합니다.
        </Text>
      </div>
    </div>
  )
} 