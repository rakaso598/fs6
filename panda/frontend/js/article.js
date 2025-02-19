import axios from "axios";

const getArticleListURL =
  "https://panda-market-api-crud.vercel.app/articles?page=1&pageSize=10&orderBy=recent";
const getArticleList = async () => {
  const res = await axios.get(getArticleListURL);
  return res.data;
};
const articleList = await getArticleList();
console.log(articleList);

const getArticleURL = "https://panda-market-api-crud.vercel.app/articles/427";
const getArticle = async () => {
  const res = await axios.get(getArticleURL);
  return res.data;
};
const article = await getArticle();
console.log(article);

const createArticleURL = "https://panda-market-api-crud.vercel.app/articles";
const createArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const createArticle = async () => {
  const res = await axios.post(createArticleURL, createArticleData);
  return res.data;
};
const createArticleResponse = await createArticle();
console.log(createArticleResponse);

const deleteArticleURL =
  "https://panda-market-api-crud.vercel.app/articles/495";
const deleteArticle = async () => {
  const res = await axios.delete(deleteArticleURL);
  return res.data;
};
const deleteArticleResponse = await deleteArticle();
console.log(deleteArticleResponse);

const patchArticleURL = "https://panda-market-api-crud.vercel.app/articles/427";
const patchArticleData = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};
const patchArticle = async () => {
  const res = await axios.patch(patchArticleURL, patchArticleData);
  return res.data;
};
const patchArticleResponse = await patchArticle();
console.log(patchArticleResponse);
