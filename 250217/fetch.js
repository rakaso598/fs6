// fetch: 통신을 할때 서버에 요청을 보내는 함수, 서버의 응답이 함수의 결과값

/*

프로미스가 가진 메소드:
.then(함수)

비동기 함수는 Promise를 리턴함.
Promise는 then 메소드가 있다.
Promise의 결과물 이 then 안에서 사용할 수 있다.

프로미스의 상태:
pending: 값이 아직 전달되지 않은 상태.
fulfilled: 성공적으로 값이 전달됨.
rejected: 값 전달에 실패.

*/

// https://learn.codeit.kr/api/employees

// const response = fetch('https://learn.codeit.kr/api/employees')
// console.log(response) // Promise { <pending> }
// const data = response.then(res => res.json())
// console.log(data) // Promise { <pending> }
// data.then(d=> {
//   console.log(d)
// })

// // .then 체이닝
// const response = fetch('https://learn.codeit.kr/api/employees')
//   .then(res => res.json())
//   .then(d => {
//     console.log(d)
//   })

const response = await fetch('https://learn.codeit.kr/api/employees')
const data = await response.json()
console.log(data)