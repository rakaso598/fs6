const url = new URL('https://learn.codeit.kr/api/color-surveys')
url.searchParams.append('mbti','intp')
url.searchParams.append('limit',50)

const res = await fetch(url)
const data = await res.json()


console.log(data)