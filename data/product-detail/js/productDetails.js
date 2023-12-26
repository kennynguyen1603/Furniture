import products from "../data/products.js";
const productDetails = products[0];
import { descriptions } from "../data/demo.js";
import { specification } from "../data/demo.js";
import { reviews } from "../data/demo.js";
import { comments } from "../data/demo.js";
import { renderSlide } from "./slide-product-details.js";
/**
 * @param {Array} images
 */

function renderProductfirst() {
  const data = document.querySelector(".s_product_text");
  if (data) {
    data.innerHTML = `
      <h3 title="Faded SkyBlu Denim Jeans">
      ${productDetails.title}
    </h3>
    <h2>${productDetails.price}</h2>
    <ul class="list">
      <li>
        <a class="active" href="#">
          <span>Category</span> : Household</a
        >
      </li>
      <li>
        <a href="#"> <span>Availibility</span> : ${
          productDetails.availibility ? "In Stock" : "Out Stock"
        }</a>
      </li>
    </ul>
    <p>
      ${productDetails.description}
    </p>
    <div class="card_area">
                <div class="product_count d-inline-block">
                  <button class="inumber-decrement">
                    <i class="ti-minus"></i>
                  </button>
                  <input
                    class="input-number"
                    type="text"
                    value="1"
                    min="0"
                    max="10"
                  />
                  <button class="number-increment">
                    <i class="ti-plus"></i>
                  </button>
                </div>
                <div class="add_to_cart">
                  <a href="#" class="btnCart">add to cart</a>
                  <a href="#" class="like_us"> <i class="ti-heart"></i> </a>
                </div>
                <div class="social_icon d-inline-block">
                  <a href="#" class="fb"><i class="fa fa-facebook-f"></i></a>
                  <a href="#" class="tw"><i class="fa fa-twitter"></i></a>
                  <a href="#" class="li"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </div>
              </div>
    `;
  }
}

renderProductfirst();

// ham tìm ID của sản phẩm sau đó render ra màn hình

function getIDProduct() {
  console.log("hello");
  let search = location.search;
  let idsp = null;
  if (!search) {
    idsp = 1;
  } else {
    search = search.replace("?", "");
    console.log("search", search);
    const urlParams = new URLSearchParams(search); // tao danh sach object
    console.log("urlParams", urlParams.get("idSP"));
    idsp = urlParams.get("idSP") || null;
  }
  console.log("here", idsp);
  if (!idsp) {
    return render404ProductPage();
  }

  const product = products.find((product) => {
    return product.idSP == idsp;
  });
  console.log("product Details:", product);

  if (!product) {
    return render404ProductPage();
  }

  // displayProductView();

  renderDescription(idsp);
  renderSpecification(idsp);
  renderComment(idsp);
  renderReview(idsp);
  renderProductDetails(idsp);
  renderSlide(product.image);
}

// function renderVisibleProductPage() {
//   const el = document.querySelector(".notfound");
//   el.style.Visibility = "hidden";

//   const productView = document.querySelector(".product_image_area");
//   const tablist = document.querySelector(".product_description_area");

//   productView.style.visibility = "visible";
//   tablist.style.Visibility = "visible";
// }

function render404ProductPage() {
  const el = document.querySelector(".notfound");
  el.style.visibility = "visible";

  const productView = document.querySelector(".product_image_area");
  const tablist = document.querySelector(".product_description_area");

  productView.style.visibility = "hidden";
  tablist.style.visibility = "hidden";
}

//goi ham

getIDProduct();

// function render theo ID của sản phẩm

function renderDescription(id) {
  let eDescription = document.querySelector(".Description");
  let data = descriptions.find((item) => item.idSP == id);
  if (eDescription) {
    eDescription.innerHTML = `
    <div
              class=""
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
    <p>
    ${data.description}
    </p>
    </div>`;
  }
}

function renderSpecification(id) {
  let eSpecification = document.querySelector(".Specification");
  let data = specification.find((item) => item.idSP == id);
  console.log("spe:", data);
  if (eSpecification) {
    eSpecification.innerHTML = `
    <div class="" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <div class="table-responsive">
    <table class="table">
      <tbody>
        <tr>
          <td>
            <h5>Width</h5>
          </td>
          <td>
            <h5>${data.Width}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Height</h5>
          </td>
          <td>
            <h5>${data.Height}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Depth</h5>
          </td>
          <td>
            <h5>${data.Depth}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Weight</h5>
          </td>
          <td>
            <h5>${data.Weight}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Quality checking</h5>
          </td>
          <td>
            <h5>${data.qualityChecking}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Freshness Duration</h5>
          </td>
          <td>
            <h5>${data.freshnessDuration}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>When packeting</h5>
          </td>
          <td>
            <h5>${data.whenPackaging}</h5>
          </td>
        </tr>
        <tr>
          <td>
            <h5>Each Box contains</h5>
          </td>
          <td>
            <h5>${data.eachBoxcontains}</h5>
          </td>
        </tr>
        
      </tbody>
    </table>
  </div>
</div>
  `;
  }
}

function renderComment(id) {
  let eComment = document.querySelector(".Comments");
  let data = comments.find((item) => item.idSP == id);
  console.log("comment => ", data.commentList);
  if (eComment) {
    eComment.innerHTML = `
    <div
              class=""
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
            <div class="row">
            <div class="col-lg-6">
            <div class="comment_list">
            <div class="review_item">
              <div class="media">
                <div class="d-flex">
                  <img src="${data.commentList[0].avatar}" alt />
                </div>
                <div class="media-body">
                  <h4>${data.commentList[0].nameUser}</h4>
                  <h5>${data.commentList[0].commentDate}</h5>
                  <a class="reply_btn" href="#">Reply</a>
                </div>
              </div>
              <p>
              ${data.commentList[0].commentContent}
              </p>
            </div>
            <div class="review_item reply">
              <div class="media">
                <div class="d-flex">
                  <img src="${data.commentList[1].avatar}" alt />
                </div>
                <div class="media-body">
                  <h4>${data.commentList[1].nameUser}</h4>
                  <h5>${data.commentList[1].commentDate}</h5>
                  <a class="reply_btn" href="#">Reply</a>
                </div>
              </div>
              <p>
              ${data.commentList[1].commentContent}
              </p>
            </div>
            <div class="review_item">
              <div class="media">
                <div class="d-flex">
                  <img src="${data.commentList[2].avatar}" alt />
                </div>
                <div class="media-body">
                  <h4>${data.commentList[2].nameUser}</h4>
                  <h5>${data.commentList[2].commentDate}</h5>
                  <a class="reply_btn" href="#">Reply</a>
                </div>
              </div>
              <p>
              ${data.commentList[2].commentContent}
              </p>
            </div>
          </div>
            </div>
            <div class="col-lg-6">
                  <div class="review_box">
                    <h4>Post a comment</h4>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            id="email"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            id="number"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Message"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <button type="submit" value="submit" class="btn">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
    </div>
    </div>        
    `;
  }
}

function renderReview(id) {
  let eReview = document.querySelector(".Reviews");
  let data = reviews.find((item) => item.idSP == id);
  console.log("data => ", data);
  if (eReview) {
    eReview.innerHTML = `
    <div
              class=""
              id="review"
              role="tabpanel"
              aria-labelledby="review-tab"
            >
              <div class="row">
                <div class="col-lg-6">
                  <div class="row total_rate">
                    <div class="col-6">
                      <div class="box_total">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="rating_list">
                        <h3>Based on 3 Reviews</h3>
                        <ul class="list">
                          <li>
                            <a href="#"
                              >5 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              >4 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              >3 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              >2 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01</a
                            >
                          </li>
                          <li>
                            <a href="#"
                              >1 Star
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i> 01</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="review_list">
                    <div class="review_item">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img src="./image/review-1.png.webp" alt />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p class="p-mb">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img src="./image/review-2.png.webp" alt />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p class="p-mb">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                    <div class="review_item">
                      <div class="media d-flex">
                        <div class="d-flex">
                          <img src="./image/review-3.png.webp" alt />
                        </div>
                        <div class="media-body">
                          <h4>Blake Ruiz</h4>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                        </div>
                      </div>
                      <p class="p-mb">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="review_box">
                    <h4>Add a Review</h4>
                    <div class="rating d-flex">
                      <p>Your Rating:</p>
                      <ul class="list d-flex">
                        <li>
                          <a href="#">
                            <i class="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-star"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i class="fa fa-star"></i>
                          </a>
                        </li>
                      </ul>
                      <p>Outstanding</p>
                    </div>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      novalidate="novalidate"
                    >
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="email"
                            class="form-control"
                            name="email"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="number"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-12">
                        <div class="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            rows="1"
                            placeholder="Review"
                          ></textarea>
                        </div>
                      </div>
                      <div class="col-md-12 text-right">
                        <button type="submit" value="submit" class="btn">
                          Submit Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
    
    `;
  }
}

function renderProductDetails(id) {
  let productText = document.querySelector(".s_product_text");
  let data = products.find((item) => item.idSP == id);
  if (productText) {
    productText.innerHTML = `
      <h3 title="Faded SkyBlu Denim Jeans">
      ${data.title}
    </h3>
    <h2>${data.price}</h2>
    <ul class="list">
      <li>
        <a class="active" href="#">
          <span>Category</span> : Household</a
        >
      </li>
      <li>
        <a href="#"> <span>Availibility</span> : ${
          data.availibility ? "In Stock" : "Out Stock"
        }</a>
      </li>
    </ul>
    <p>
      ${data.description}
    </p>
    <div class="card_area">
                <div class="product_count d-inline-block">
                  <button class="inumber-decrement">
                    <i class="ti-minus"></i>
                  </button>
                  <input
                    class="input-number"
                    type="text"
                    value="1"
                    min="0"
                    max="10"
                  />
                  <button class="number-increment">
                    <i class="ti-plus"></i>
                  </button>
                </div>
                <div class="add_to_cart">
                  <a href="#" class="btnCart">add to cart</a>
                  <a href="#" class="like_us"> <i class="ti-heart"></i> </a>
                </div>
                <div class="social_icon d-inline-block">
                  <a href="#" class="fb"><i class="fa fa-facebook-f"></i></a>
                  <a href="#" class="tw"><i class="fa fa-twitter"></i></a>
                  <a href="#" class="li"
                    ><i class="fa fa-linkedin" aria-hidden="true"></i
                  ></a>
                </div>
              </div>
    `;
  }
}

// thay doi class active o duoi phan mo ta

function changeTab(elTablist, thisEl, tabActive) {
  clearClassActive(elTablist);
  thisEl.classList.add("active");
  const elTabContents = document.querySelectorAll(".tab-content > div");
  for (let i = 0; i < elTabContents.length; i++) {
    const tab = elTabContents[i].getAttribute("tab");
    if (tab === tabActive) elTabContents[i].style.display = "block";
    else elTabContents[i].style.display = "none";
  }
}

function clearClassActive(elTabList) {
  for (let i = 0; i < elTabList.length; i++) {
    elTabList[i].classList.remove("active");
  }
}

function addEventClickTab() {
  const elTabItems = document.querySelectorAll(".tab-menu button");
  for (let i = 0; i < elTabItems.length; i++) {
    const id = elTabItems[i].getAttribute("id");
    elTabItems[i].onclick = function () {
      changeTab(elTabItems, elTabItems[i], id);
    };
  }
}

addEventClickTab();
