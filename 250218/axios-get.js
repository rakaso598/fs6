import axios from "axios";

// GET /api/color-surveys/:id


const url = new URL("https://learn.codeit.kr/api/color-surveys/13");


const res = await axios.get(url);
const data = await res.data;

console.log(data);
