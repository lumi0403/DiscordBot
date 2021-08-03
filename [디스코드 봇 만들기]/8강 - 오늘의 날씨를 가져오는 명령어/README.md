# Discord-Korea-Weather-Info
이 소스는 디스코드에서 공공데이터포털의 동네날씨예보API를 이용한 특정 지역의 당일 날씨를 알려주는 봇입니다

API 링크 : https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057682

**API사용 시 저작권 표기 필수입니다.**

## API 사용법
https://www.data.go.kr/index.do 사이트에 들어가서 계정이 있다면 로그인 없다면 절차에 맞춰 회원가입을 진행합니다

https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057682 사이트에 들어가서 활용 신청을 누릅니다

그리고 신청한 API로 들어가서 일반 인증키를 복사하고 Commands폴더의 Weather.js 파일에 "서비스"라고 적힌 부분에 넣어줍니다 (=이것은 지우시면 안됩니다)

## 사용법
npm install을 통해 패키지 파일을 설치해줍니다
config.json파일에 token 부분을 자신의 봇 토큰으로 넣어줍니다
터미널에 node .으로 실행을 시킵니다.

## 주의사항
**API 저작권 미표기로 인한 문제는 책임지지 않습니다**

**이 프로젝트 파일은 프로젝트의(API제외) 저작권을 표기하지 않고 사용하여도 됩니다**

## API저작권
본 저작물은 기상청에서 19년작성하여 공공누리 제1유형으로 개방한 동네예보 조회서비스(작성자:기상청)를 이용하였으며,

해당 저작물은 '공공데이터포털,https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15057682 에서 무료로 다운받으실 수 있습니다.
