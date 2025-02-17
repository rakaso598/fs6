// fetch: 통신을 할때 서버에 요청을 보내는 함수, 서버의 응답이 함수의 결과값

// https://learn.codeit.kr/api/employee

const response = fetch('https://learn.codeit.kr/api/employee')
response.then(res =>{
  return res.json()
})
console.log(response) // Promise { <pending> }

/*
프로미스가 가진 메소드:
- .then(함수)

*/
