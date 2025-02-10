const chars = ['A', 'B', 'C', 'D']

// for (let char of chars) {
//     console.log(`Grade: ${char}`)
// }
// Grade: A
// Grade: B
// Grade: C
// Grade: D

// let tmp = []
// chars.forEach((char, index) => {
//     // 한 배열에 모두 담으려면
//     tmp.push(`Grade: ${char}`)
// })
// console.log(tmp) // [ 'Grade: A', 'Grade: B', 'Grade: C', 'Grade: D' ]

// // Map: 기존 요소 하나하나를 바꿔서 새로운 배열에 넣어준다
// const newChars = chars.map(char => `Grade: ${char}`)
// chars.map((char, index) => `Grade ${index}: ${char}`)

// console.log(newChars) // [ 'Grade: A', 'Grade: B', 'Grade: C', 'Grade: D' ]


// filter : 조건에 맞는 애들만 추려서 새로운 배열로 돌려준다.

const devices = [
    { name: 'Galaxy Note', brand: 'Samsung' },
    { name: 'Macbook Pro', brand: 'Apple' },
    { name: 'iPad', brand: 'Apple' },
    { name: 'Galaxy Watch', brand: 'Samsung' },
    { name: 'iMac', brand: 'Apple' },
    { name: 'Galaxy Buds', brand: 'Samsung' },
    { name: 'Gram', brand: 'LG' },
    { name: 'Galaxy Book', brand: 'Samsung' },
    { name: 'Surface Pro', brand: 'Microsoft' },
    { name: 'ZenBook', brand: 'Asus' },
    { name: 'Macbook Air', brand: 'Apple' },
]

// 애플 제품만 필터
// const apples = devices.filter(device => device.brand === 'Apple')
// // => 불린타입(트루)인 아이템으로 반환. 브랜드가 Apple인 경우, 아이템 배열 반환
// console.log(apples)

// 문제: devices에서 이름이 두 단어 이상인 기기만 포함한 새로운 배열 만들자!
// const questArr = devices.filter(device => device.name.split(' ').length >= 2)
// console.log(questArr)
// [
//     { name: 'Galaxy Note', brand: 'Samsung' },
//     { name: 'Macbook Pro', brand: 'Apple' },
//     { name: 'Galaxy Watch', brand: 'Samsung' },
//     { name: 'Galaxy Buds', brand: 'Samsung' },
//     { name: 'Galaxy Book', brand: 'Samsung' },
//     { name: 'Surface Pro', brand: 'Microsoft' },
//     { name: 'Macbook Air', brand: 'Apple' }
// ]
// console.log('a b'.split(' ').length) // 2

// // find : 찾으면 반환하고 순환 끝
// const firstAppleDevice = devices.find(d => d.brand === 'Apple')
// console.log(firstAppleDevice) // { name: 'Macbook Pro', brand: 'Apple' }

// // 찾는 요소가 없다면 undefined 반환
// const googleDevice = devices.find(d => d.brand === 'Google')
// console.log(googleDevice) // undefined

// some - 조건에 맞는게 하나라도 있다면 true를 반환
// every - 전부 조건에 맞아야 true를 반환

// Quest2. LG 기기가 있는지 여부를 변수에 담아 출력. some
// 그다음, 배열의 기기가 전부 애플기기인지 여부를 변수에 담아 출력. every

// const isThereLG = devices.some(d=>d.brand === 'LG')
// console.log(isThereLG) // true

// const isEveryAllApple = devices.every(d=>d.brand === 'Apple')
// console.log(isEveryAllApple) // false


// reduce 함수

const numbers = [2, 3, 4, 6, 8, 11]
// // reduce(함수, 초기값)
// // (이전 결과값, 현재 요소) => 다음 결과값
// // 초기값 0
// const total = numbers.reduce((acc,e)=>{
//     const next = acc + e
//     console.log(`(${acc},${e}) => ${next}`)

//     return next
// },0)
// console.log(total) // 20

// {
//     even: 0,
//     odd: 0
// }

const obj = numbers.reduce((acc, e) => {
    // if (e % 2 === 0) { // 짝수
    //     acc.even++
    // } else {
    //     acc.odd++
    // }
    // !(e % 2) ? acc.even++ : acc.odd++
    acc[e % 2 ? 'odd' : 'even']++ // 인덱스 선택 odd인지 even인지
    return acc // 리턴해야 다음요소가 바뀐값을 받음
}, { even: 0, odd: 0 })
// console.log(obj) // { even: 4, odd: 2 }

// reduce를 사용해서 마치 map을 쓴 것처럼
// numbers의 각 숫자가 두배씩된 새로운 배열을 출력하자!
const obj2 = numbers.reduce((acc, curr) => {
    acc.push(curr * 2)
    return acc
}, [])
// console.log(obj2) // [ 4, 6, 8, 12, 16, 22 ]
