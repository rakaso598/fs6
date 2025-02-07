// 옵셔널 체이닝 (dot method)
const user1 = {
    name : 'user1',
    cat: {
        name: 'Crew',
        breed: 'british shorthair'
    }
}

const user2 = {
    name : 'user2'
}

const printCatName = user => {
    console.log(user.cat?.name)
}

printCatName(user2)