import axios from "axios";

// 핸들러
const requestErrorHandler = (e) => {
  if (e.response) {
    console.error(`${e.response.status},${e.response.data}`);
    return `${e.response.status},${e.response.data}`;
  } else {
    console.error(e.message);
    return `${e.message}`;
  }
};

// 아티클목록
const getArticleListURL =
  "https://panda-market-api-crud.vercel.app/articles?page=1&pageSize=10&orderBy=recentt";
const getArticleList = async () => {
  try {
    const res = await axios.get(getArticleListURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};
const articleList = await getArticleList();
console.log(articleList);

// 아티클
const getArticleURL = "https://panda-market-api-crud.vercel.app/articles/427";
const getArticle = async () => {
  try {
    const res = await axios.get(getArticleURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};
const article = await getArticle();
console.log(article);

// 아티클생성
const createArticleURL = "https://panda-market-api-crud.vercel.app/articles";
const createArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const createArticle = async () => {
  try {
    const res = await axios.post(createArticleURL, createArticleData);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};
const createArticleResponse = await createArticle();
console.log(createArticleResponse);

// 아티클삭제
const deleteArticleURL =
  "https://panda-market-api-crud.vercel.app/articles/495";
const deleteArticle = async () => {
  try {
    const res = await axios.delete(deleteArticleURL);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};
const deleteArticleResponse = await deleteArticle();
console.log(deleteArticleResponse);

// 아티클수정
const patchArticleURL = "https://panda-market-api-crud.vercel.app/articles/427";
const patchArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const patchArticle = async () => {
  try {
    const res = await axios.patch(patchArticleURL, patchArticleData);
    return res.data;
  } catch (e) {
    return requestErrorHandler(e);
  }
};
const patchArticleResponse = await patchArticle();
console.log(patchArticleResponse);
