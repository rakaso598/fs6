// 배열을 사용해서 새로운 배열을 만들기 (합치기)
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]

const arr3 = [...arr1, ...arr2]
console.log(arr3) // [ 1, 2, 3, 4 ,5 ,6 ]

const arr4 = [...arr2, ...arr1]
console.log(arr4) // [ 4, 5, 6, 1, 2, 3 ]

const a = {
    first: 'a',
    second: 'b',
    third: 'c',
}

const first = 'a'
const second = 'b'
const third = 'c'
const x = {
    first,
    second,
    third,
}

// const clone = a;
// console.log(clone) // { first: 'a', second: 'b', third: 'c' }
// console.log(a) // { first: 'a', second: 'b', third: 'c' }
// clone.first = 'A'
// console.log(a) // { first: 'A', second: 'b', third: 'c' }
// console.log(clone) // { first: 'A', second: 'b', third: 'c' }

// 값 복사, 참조(레퍼런스) 복사
const clone2 = {...a}
clone2.first = 'A'
console.log(clone2) // { first: 'A', second: 'b', third: 'c' }
console.log(a) // { first: 'a', second: 'b', third: 'c' }

x.first
a['first']
const key = 'first'
a[key]

const d = {
    [key]: 'a'
}
console.log(d)

