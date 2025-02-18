import axios from "axios";

const url = new URL("https://learn.codeit.kr/api/color-surveys");
const params = {
  mbti: 'intp',
  limit: 50,
}



const res = await axios.get(url, { params });





const { data } = res;

console.log(data)