{
    // 호이스팅: 코드를 실행하기 전에 컴퓨터 이 코드에 어떤게 있는지 미리 기록해두는 것.

    sayHi() // 함수가 먼저 선언됨

    function sayHi() {
        console.log('hi')
    } // hi
}

{
    try {
        sayHi()
    } catch {
        console.log("ERR: 함수가 먼저 호출됨")
    }
    
    // 함수표현식
    const sayHi = function () {
        console.log('hi')
    } // hi
}