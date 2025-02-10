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

// {
//     samsung: 10,
//     apple: 20
// }

// devices 배열에 어떤 브랜드가 몇 개가 있는지 알고싶음. (reduce)
// 브랜드 이름을 키로 가지고, 기기의 개수를 값으로 갖는 객체를 만들어보자
// 단, 초기값은 빈 객체 {} 를 사용해야 합니다.

const deviceCount = devices.reduce((acc, { brand }) => {
    // acc.Samsung = 0;
    // acc.Apple = 0;
    // acc.LG = 0;
    // acc.Microsoft = 0;
    // acc.Asus = 0;

    // 현재 브랜드가 없으면 초기화
    // 생성된 키의 값 ++

    if (!acc[brand]) acc[brand] = 0
    acc[brand]++
    return acc

}, {})
console.log(deviceCount)

