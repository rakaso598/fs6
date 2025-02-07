// console.log(this)

// function printThis() {
//     console.log(this)
// }

const printThis = () => {
    console.log(this)
}

const first = {
    content: 'first',
    printThis: printThis,

}

const second = {
    content: 'second',
    printThis: printThis,
}

printThis()
first.printThis()
second.printThis()
