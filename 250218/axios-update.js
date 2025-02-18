import axios from "axios";

const url = new URL("https://learn.codeit.kr/api/color-surveys/14");
const params = {
  "mbti": "ISTJ",
  "colorCode": "#000000",
  "password": "0123"
}

const res = await axios.patch(url, params);
const data = await res.data;

console.log(data);
