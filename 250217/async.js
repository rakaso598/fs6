// 비동기 함수 만들자
// 직접 프로미스 객체를 만든다면, resolve, reject를 써줘야함.

// 받은 문자열을 0.3초 후에 반환해주는 함수 만들자.

// any타입 문자열을 인자로, 결과는 Promise<any>타입인 함수
const delayString = (string) => {

  // 프로미스는 함수를 인자로 받는데, 인자는 2가지가 있다.
  return new Promise((resolve, reject) => {
    
    // String이 문자열인지 어떻게 알 수 있을까
    if (typeof string === "string") {
      setTimeout(() => {
        resolve(string);
      }, 300); // fulfilled
    } else {
      reject("string only");
    }

    // reject 함수를 쓰는데, 이때 넘긴 데이터는 어디서 사용할 수 있을까?
    // -> 프라미스 객체의 catch 메소드
  });
};

// 프로미스 객체를 다루기 .then .catch
delayString(123)
  .then(result => {
    console.log(result)
  })
  // reject일 시,
  .catch(e => {
    console.log(e)
  })
  .finally(()=>{
    console.log("done")
  })

// await으로 처리하기 try~catch
try {
  const awaitDelayStringResult = await delayString(123)
  console.log(awaitDelayStringResult)
} catch (e) {
  console.log(e)
} finally {
  console.log("done")
}

// console.log(await delayString("hello"));
