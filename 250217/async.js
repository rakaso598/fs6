// 비동기 함수 만들자
// 직접 프로미스 객체를 만든다면, resolve, reject를 써줘야함.

// 받은 문자열을 0.3초 후에 반환해주는 함수 만들자.

// any타입 문자열을 인자로, 결과는 Promise<any>타입
const delayString = (string) => {
  // 프로미스는 함수를 인자로 받는데, 인자는 2가지가 있다.
  return new Promise((resolve, reject) => {
    // fulfilled로 바꾼다. -> resolve
    setTimeout(() => {
      resolve(string); // 받은 인자를 resolve()
    }, 300);
    
    // rejected로 바꾼다. -> reject
  });
};

// const fetch = url => {
//   return new Promise((resolve, reject)=>{
//     if (응답성공) {
//       resolve(Response 객체)
//     }
//   })
// }

// fetch(...)
// .then(res=>{})
