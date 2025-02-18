// 함수 밖에서 데이터를 받아서 생성
// POST learn.codeit.kr/api/color-surveys

// axios ( URL, PARAMS )

{
const url = new URL("https://learn.codeit.kr/api/color-surveys");
const params = {
  mbti: "ENFP",
  colorCode: "#CA6952",
  password: "1234",
};

const res = await axios.post(url, params);
const data = await res.data;
}

{
const url = new URL("https://learn.codeit.kr/api/color-surveys/13");


const res = await axios.get(url);
const data = await res.data;

console.log(data);
}