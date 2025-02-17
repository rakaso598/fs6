// fetch: 통신을 할때 서버에 요청을 보내는 함수, 서버의 응답이 함수의 결과값

/*
프로미스가 가진 메소드:
.then(함수)
*/


// https://learn.codeit.kr/api/employees

// const response = fetch('https://learn.codeit.kr/api/employees')
// console.log(response) // Promise { <pending> }
// const data = response.then(res => res.json())
// console.log(data) // Promise { <pending> }
// data.then(d=> {
//   console.log(d)
// })

const response = fetch('https://learn.codeit.kr/api/employees')
  .then(res => res.json())
  .then(d => {
    console.log(d)
  })
