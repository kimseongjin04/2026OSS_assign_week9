# 김성진 22300118
### Deployment : GitHub URL, Vercel URL, MockAPI Endpoint URL
- GitHub: https://github.com/2026-2-OSS/assign09-c02-22300118
- Vercel: https://2026ossassignweek9-nine.vercel.app/
- MockAPI: https://6ae2c687bbb54129229a62b1.mockapi.io/books
### Service : 주제, Field, CRUD 기능
- 주제: 도서를 관리할 수 있는 도서 관리 서비스
- Field
  - id: 도서 번호 (MockAPI 자동 생성)
  - title: 제목
  - author: 저자
  - year: 출판연도
  - genre: 장르
  - rating: 평점
- CRUD
  - GET: 페이지를 열면 도서 목록을 불러온다
  - POST: 폼에 입력한 도서를 추가한다
  - PUT: 수정 버튼을 누르면 기존 값을 폼에 불러와서 수정한다
  - DELETE: confirm()으로 확인한 뒤 삭제한다
- Validation: 제목·저자 공백 확인, 출판연도 확인, 평점 확인
- 검색: filter()로 제목 검색
### Key Learning : 이번 주 배운 핵심 내용 3가지
- fetch()는 서버에 요청을 보내고 async/await를 쓰면 응답이 올 때까지 기다렸다가 다음 코드를 실행한다
- 404, 500 같은 오류는 fetch가 자동으로 실패 처리하지 않아서 response.ok로 직접 확인해야 한다
- REST API는 같은 주소에 GET, POST, PUT, DELETE를 바꿔서 보내 CRUD를 한다
### AI / Search Usage : AI 사용 내역
- 사용 목적: 코드 작성 보조, 모르는 부분 질문
- 반영한 기능: MockAPI 테스트 중 PATCH 요청이 막히는 것을 확인해 PUT으로 변경
- 배운 점: find(), filter()를 실제 데이터에 활용하는 방법을 알게 되었습니다
- 본인 추정 AI 코드 기여율: 55%
### Problem & Solution : 개발 중 발생한 문제와 해결 방법
- Problem : PATCH로 수정 요청을 보내면 MockAPI에서 요청이 실패했습니다
- Solution : PUT은 되는 것을 확인하고 수정 요청을 PUT으로 바꿨습니다
### Reflection : 새롭게 알게 된 점 또는 궁금한 점
- 지금까지는 데이터를 배열에만 저장해서 새로고침하면 사라졌는데 MockAPI에 저장하니까 새로고침해도 데이터가 남는다는 것을 알게 되었습니다. 그리고 GET, POST, PUT, DELETE가 주소와 method만 다르고 구조는 비슷하다는 것을 알게 되었습니다.