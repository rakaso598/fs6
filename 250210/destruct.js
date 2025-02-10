// 객체 분해

const user1 = {
    name: 'User1',
    title: 'Title1',
    cat: {
        name: 'Cat1',
        breed: 'Breed1',
        age: 2
    }
}

const { name: asdf, cat, ...rest } = user1
const { title: position } = user1
const { cat: { age, ...catRest }, ...userRest } = user1 // 중첩 분해

console.log(position, asdf)
console.log(age, catRest, userRest)