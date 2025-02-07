// {

//     console.log('hello' === 'hello')
//     Symbol(3)
//     console.log(Symbol('hello') === Symbol('hello'))

//     console.log(Boolean(null)) // false
//     console.log(Boolean('null')) // true
//     console.log(Boolean(undefined)) // false

// }

{
    // 거짓으로 판별
    const falsy = [
        false,
        null,
        undefined,
        NaN,
        0,
        '',
    ]

        for ( let i of falsy ) {
            console.log("isFalsy?= ", Boolean(i));
        }

}

{
    // 참으로 판별
    const truthy = [
        true,
        'hello',
        12.3,
        -333,
        [],
        {},
    ]

    for ( let i of truthy ) {
        console.log("isTruthy?= ", Boolean(i));
    }
}
