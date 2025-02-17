// https://learn.codeit.kr/api/employees

// https://learn.codeit.kr/api/employees/{id}

// async 함수 안에서는 순서를 지켜서 동작함!

// 문제: 개별 id 조회를 10번 사용해서 순서대로 전부 출력하도록 하자.

// const printEmployees = async () => {
//   for (let i = 1; i <= 10; i++) {
//     const res = await fetch(`https://learn.codeit.kr/api/employees/${i}`);
//     const data = await res.json();
//     console.log(data);
//   }
// };
// printEmployees();

// 순서를 지키지 않고 빠르게 하기

// const printEmployeesFast = async (i) => {
//   const res = await fetch(`https://learn.codeit.kr/api/employees/${i}`);
//   const data = await res.json();
//   console.log(data);
// };

// for (let i = 1; i <= 10; i++) {
//   printEmployeesFast(i);
// }

// 빠른 이유? 10번을 비동기로 호출했기 때문에 위 함수와 달리 반환을 기다리지 않음.
// await을 붙여서 await printEmployeesFast(i); 로 쓰면 순서를 지켜 10번 출력함.

// await을 붙이고 안붙이고의 차이? await을 안붙이면 실행 결과를 기다리지 않고 한번에 비동기 요청
// await을 붙이면 앞의 실행 결과를 기다렸다가 비동기 요청.
// await은 곧 앞선 순서의 결과를 기다렸다가 결과가 나오면 다음 순서를 실행한다는 것

// promise 배열로 반환하기 ( Promise.all() )
const promises = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) =>
  printEmployeesFast(id)
);
const results = await Promise.all(promises); // .all: 전체가 pending이 아닐때까지 기다렸다가 반환
console.log(results);

// 1. 순서 지켜서 출력 -> 2.3초
// 2. 순서없이 출력 -> 0.15초
// 3. Promise.all 순서도 지키면서 나름 빠르게 -> 0.3초