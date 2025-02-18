import axios from "axios";

const updateSurvey = async (id, data) => {
  try {
    const url = new URL("https://learn.codeit.kr/api/color-surveys");
    const res = await axios.delete(url, data);
    return res.data;
  } catch (e) {
    if (e.response) {
      console.log(e.response.status);
      console.log(e.response.data);
    } else {
      console.log("request failed");
    }
  }
};
