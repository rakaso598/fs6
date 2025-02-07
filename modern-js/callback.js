function sayHi() {
    console.log('hi')
}

const prepare=function (say) {
    console.log('시작')
    say()
    console.log('끝')

}

prepare(sayHi)
prepare(function () {
    console.log('hello')
})
prepare(()=>{
    console.log('halo')
})