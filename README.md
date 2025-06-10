# 한결 - AI 추천 모바일 쇼핑몰

20~30대 여성을 위한 AI 추천 기반 모바일 쇼핑몰 웹앱입니다.

## 🚀 기능

- 키워드 검색 기반 AI 상품 추천
- 개인화된 추천 메시지
- 모바일 최적화 UI/UX
- 검색 결과 및 상품 탐색

## 🛠️ 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build
```

## 🤖 AI 추천 기능 (개발 중)

현재 AI 추천 기능은 **개발 환경에서 테스트를 위해 기본 추천 상품을 표시**하도록 설정되어 있습니다.

### 실제 agentforce API 연결 시 수정 사항:

1. **`src/utils/devConfig.ts`** - 개발용 플래그 비활성화:
   ```typescript
   export const DEV_CONFIG = {
     ALWAYS_SHOW_AI_RECOMMENDATION: false, // 👈 false로 변경
     // ...
   }
   ```

2. **`src/services/agentforceApi.ts`** - 실제 API 엔드포인트 활성화:
   ```typescript
   // 주석 제거하고 실제 API 호출 코드 활성화
   const response = await fetch(`${AGENTFORCE_API_URL}?query=${encodeURIComponent(searchQuery)}`)
   const data = await response.json()
   ```

3. **개발용 파일 제거** (선택사항):
   - `src/utils/devConfig.ts` 파일 삭제
   - `getDefaultRecommendation` 함수 제거

### 현재 개발 상태:
- ✅ AI 추천 UI/UX 완료
- ✅ 로딩/에러 상태 처리 완료
- ✅ 클릭 인터랙션 완료
- 🔄 실제 API 연결 대기 중

## 📱 사용 방법

1. 메인 페이지에서 상품 검색
2. 검색 결과 페이지에서 AI 추천 상품 확인 (최상단 파란 테두리)
3. 추천 상품 클릭 시 개인화된 메시지 확인

## 🏗️ 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
├── pages/              # 페이지 컴포넌트
├── services/           # API 서비스
├── types/              # TypeScript 타입 정의
├── utils/              # 유틸리티 함수
├── data/               # 목 데이터
└── styles/             # 스타일 파일
```

## 🔧 기술 스택

- **Frontend**: React + TypeScript + Vite
- **UI Library**: Ant Design
- **Styling**: CSS Modules + Inline Styles
- **Icons**: React Icons + Ant Design Icons
- **API**: agentforce (연결 예정)
