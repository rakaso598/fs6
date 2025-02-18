// DELETE /api/color-surveys/:id

import axios from "axios";


const url = new URL("https://learn.codeit.kr/api/color-surveys/13");
const params = {
  password: "0123"
};

const res = await axios.delete(url, params);
const data = await res.data;

console.log(data);
