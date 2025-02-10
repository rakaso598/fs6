// try {

//     console.log('before') // before

//     const title = 'AAA'
//     console.log(asdf) // 참조 에러 발생

//     console.log('after') // 출력 X

// } catch (error) {
//     console.log(error.name) // ReferenceError
//     console.log(error.message) // asdf is not defined
//     console.log('에러 발생') // 에러 발생
// }

const func = () => {
    const title = 'AAA'
    console.log(asdf)
} // ERROR!


try {
    func() // 에러가 날 함수를 호출해도 try catch에서 잡을까?
} catch (error) {
    console.log('catch') // catch
}

