const surveyData = {
  mbti: "ENFP",
  colorCode: "#CA6952",
  password: "1234",
};

const url = new URL("https://learn.codeit.kr/api/color-surveys");
const res = await fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(surveyData),
});

// javascript obejct를 json문자열로 변환
// JSON.stringify(대상 객체)

// json문자열을 javascript 객체로 변환
// JSON.parse(대상 문자열)

const data = await res.json();
console.log(data);
