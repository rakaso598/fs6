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

const articleListParams = {
  page: 1,
  pageSize: 10,
  keyword: "상품",
};
const articleList = await getArticleList(articleListParams);
console.log(articleList);

// const article = await getArticle();
// console.log(article);

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
