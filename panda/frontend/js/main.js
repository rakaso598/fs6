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

const articleList = await getArticleList(1, 10, undefined, "이름");
console.log(articleList);

// 개별조회: articleId

const article = await getArticle(3);
console.log(article);

// const createArticleResponse = await createArticle();
// console.log(createArticleResponse);

// const deleteArticleResponse = await deleteArticle();
// console.log(deleteArticleResponse);

// const patchArticleResponse = await patchArticle();
// console.log(patchArticleResponse);

// const productList = await getProductList();
// console.log(productList);

// const product = await getProduct();
// console.log(product);

// const createProductResponse = await createProduct();
// console.log(createProductResponse);

// const deleteProductResponse = await deleteProduct();
// console.log(deleteProductResponse);

// const patchProductResponse = await patchProduct();
// console.log(patchProductResponse);
