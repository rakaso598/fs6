import {
  getArticleList,
  getArticle,
  createArticle,
  deleteArticle,
  patchArticle,
} from "./ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  deleteProduct,
  patchProduct,
} from "./ProductService.js";

// 목록조회: page, pageSize, orderBy, keyword

// const articleList = await getArticleList(1, 10, undefined);
// console.log(articleList);

// const articleList = await getArticleList(1, 10, undefined, "이름");
// console.log(articleList);

// 개별조회: articleId

// const article = await getArticle(3);
// console.log(article);

// 게시글생성:

// const createArticleData = {
//   image: "https://example.com/...",
//   content: "게시글 내용입니다.",
//   title: "게시글 제목입니다.",
// };
// const createArticleResponse = await createArticle(createArticleData);
// console.log(createArticleResponse);

// 게시글삭제

// const deleteArticleResponse = await deleteArticle(447);
// console.log(deleteArticleResponse);

// 게시글수정

// const patchArticleData = {
//   image: "https://example.com/...",
//   content: "게시글 내용입니다.",
//   title: "게시글 제목입니다.",
// };
// const patchArticleResponse = await patchArticle(448, patchArticleData);
// console.log(patchArticleResponse);

// const productList = await getProductList();
// console.log(productList);

// const product = await getProduct();
// console.log(product);// const createProductResponse = await createProduct();
// console.log(createProductResponse);

// const deleteProductResponse = await deleteProduct();
// console.log(deleteProductResponse);

// const patchProductResponse = await patchProduct();
// console.log(patchProductResponse);
