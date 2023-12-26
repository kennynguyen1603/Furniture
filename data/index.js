import { products } from "./products.js";
// @param {Array} List
/**
 *
 * @param {Array} list
 */

function renderList(list) {
  const elListProducts = document.getElementsByClassName("wrap-popular-prod");
  console.log(
    "🚀 ~ file: index.js:10 ~ renderList ~ elListProducts:",
    elListProducts
  );
  let htmlListProduct = "";
  if (elListProducts) {
    list.forEach((product) => {
      htmlListProduct += `
        <div class="image">
        <img src="${product.thumbnail}" alt="">
      </div>
      <div class="caption">
        <h3>
          <a href="./product-details.html?idSP=${product.id}">${product.title}</a>
        </h3>
        <span>${product.price}</span>
      </div>
    </div>
    <div class="col col-lg-4 col-md-6 col-sm-6">
      <div class="image">
        <img src="${product.thumbnail}" alt="">
      </div>
      <div class="caption">
        <h3>
          <a href="">${product.title}</a>
        </h3>
        <span>${product.price}</span>
      </div>
    </div>
    <div class="col col-lg-4 col-md-6 col-sm-6">
      <div class="image">
        <img src="${product.thumbnail}" alt="">
      </div>
      <div class="caption">
        <h3>
          <a href="">${product.title}</a>
        </h3>
        <span>${product.price}</span>
      </div>`;
    });
  }
  elListProducts.innerHTML = htmlListProduct;
}
renderList(products);
