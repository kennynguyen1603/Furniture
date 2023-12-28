import { products, bedProd, sofaProd, tableProd, chairProd, LightingProd,decoreProd } from "./home_products.js";

function renderList(list) {
  const elListProducts = document.querySelector(".wrap-popular-prod");
  //   console.log(
  //     "🚀 ~ file: index.js:5 ~ renderList ~ elListProducts:",
  //     elListProducts
  //   );
  let htmlListProduct = list
    .map(
      (item) =>
        `<div class="col col-lg-4 col-md-6 col-sm-6" cate="${item.categories.join(
          " "
        )}">
            <div class="image">
                <img src="${item.thumbnail}" alt="">
            </div>
            <div class="caption">
                <h3>
                    <a href="./product-detail.html?idSP=${item.idSP}">${
          item.title
        }</a>
                </h3>
                <span>$367</span>
            </div>
        </div>`
    )
    .join("");
  elListProducts.innerHTML = htmlListProduct;
}
renderList(products);

function activetab(tabId) {
  const tabEls = document.querySelectorAll("#tap-menu a.nav-link.nav-item");
  tabEls.forEach((tab) => {
    tab.classList.remove("active");
    if (tab.href.includes(tabId)) {
      tab.classList.add("active");
    }
  });
}

function onChangeUrl(params) {
  window.addEventListener("hashchange", function () {
    const tabId = location.hash;
    // console.log(tabId.slice(1));
    const arrs = {
      all: products,
      sofa: sofaProd,
      table: tableProd,
      chair: chairProd,
      bed: bedProd,
      lightning: LightingProd,
      decore: decoreProd,
    };
    if (arrs[tabId.slice(1)]) {
      renderList(arrs[tabId.slice(1)]);
      activetab(tabId);
    }
  });
}
onChangeUrl();