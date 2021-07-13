# 항해 시네마 🍿

**항해 시네마 프로젝트의 Front-end Repo입니다.**

🍿 [사이트]()

🎬 [유튜브]()

📁 [백엔드 Repo]()

## 개요

- 프로젝트 : 항해 시네마
- 개발 인원 : 5명(리액트 2명, 스프링 3명)
- 개발 기간 : 2021.07.09 ~ 2021.07.15
- 주요 기능 : 영화 목록 및 상세 정보, 영화 리뷰 작성 및 좋아요
- 개발 : React, Redux Toolkit, Axios
- 디자인 : Ant Design, Styled-components
- 테스트 : JSON Server, Postman, Faker.js, Shortid
- 협업 : Slack, [Notion](https://www.notion.so/d30d58c74c47472fadf86200fdc03d7a), Git

## 특징

### Redux Toolkit

- thunk와 immer가 내장되어 있다.
- redux devtools도 내장되어 있다.
- takeLatest, takeEvery 이외에는 거의 쓰지 않기 때문에 saga도 쓰지 않아도 될 것 같다.
  → throttle, debounce는 lodash와 thunk의 조합으로 해결할 수 있다.
- 코드량이 상당히 줄어들었다.

### Git Flow

- 4개의 브랜치로 협업
- main 브랜치는 버전 release용 브랜치로 사용
- develop 브랜치를 주축으로 개발 진행
- 기능별 브랜치가 아닌 개발자별로 브랜치를 생성하여 작업 진행

### Figma

- 디자인 단계에 들어가기 전에 Figma를 가지고 구체적인 와이어프레이밍 작업을 거침

  👉 [피그마 링크](https://www.figma.com/file/CsQy3j8MBb2tCdpFWwjLJ7/Hanghae-Cinema?node-id=0%3A1)
