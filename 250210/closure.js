// 클로저
const closure = () => {
    let x = 10; // 재정의 가능한 변수
    // 변수 x의 값을 바꿀 방법이 없음

    return () => {
        console.log(x)
    } // 10
}

// const func = closure()
// func()

closure()() // 리턴되는 함수를 또 실행

const func = closure()


// 클로저 ver.2 - 숫자 셋을 곱하는 함수
const multiplyClosure = x => {
    return y => {
        return z => {
            return x * y * z
        }
    }
}

const multiplyClosureMini = x => y => z => x * y * z
console.log('Mini: ' + multiplyClosureMini(2)(3)(4))

console.log('Original: ' + multiplyClosure(2)(3)(4))

// 커링 Currying
const multiplySix = multiplyClosure(2)(3)
console.log(multiplySix(10)) // 60

const multiplyNine = multiplyClosure(3)(3)
console.log(multiplySix(10))

const multiplyTwoClosure = multiplyClosure(2)
const multiplyThreeClosure = multiplyClosure(3)

const getTotal = multiplyTwoClosure(5)(6)
console.log(getTotal)


// multiplyClosure 함수를 한줄로 줄여보자!
// return 금지
// { , } 금지

