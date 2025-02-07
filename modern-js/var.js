function sayHi() {
    const name = 'cola';
    console.log(name)
}

for (let i = 0; i < 5; i++) {
    console.log(i)
}

try {
    console.log(name)
} catch {
    console.log("error: name이 정의되지 않음")
}

try {
console.log('i의 값: ', i)
} catch {
    console.log("error: i가 정의되지 않음")
}

// var : 함수 스코프
// const, let : 블록 스코프