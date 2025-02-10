// 배열 분해

const rank = ['a','b','c','d']

const func2 = (hello, [fir,sec,...rest], bye) => {
    console.log(hello)
    console.log(fir)
    console.log(sec)
    console.log(bye)
    console.log(rest)
}

// 배열 인덱스를 쓰지 않기
// 함수블록 안에 새로운 변수 선언하지 않기
// 마지막에 배열의 나머지 요소를 한번에 출력하기

func2("안녕", rank, "잘가")
// 안녕
// a
// b
// 잘가
// [ 'c', 'd' ]