function renderHeaderPage() {
  const elHeader = document.getElementById("header-page-main");
  elHeader.innerHTML = `<div class="header-area">
  <div class="main-header header-sticky">
    <div class="container-fluid">
      <div
        class="menu-wrapper align-items-center justify-content-between"
      >
        <div class="header-left d-flex align-items-center">
          <!---->
          <div class="logo1">
            <a href="home.html"
              ><img src="./data/product-detail/image/logo.png.webp" alt
            /></a>
          </div>

          <div class="logo2">
            <a href="index.html"
              ><img src="./data/product-detail/image/logo2.png.webp" alt
            /></a>
          </div>

          <div class="main-menu d-none d-lg-block">
            <nav>
              <ul id="navigation">
                <li><a href="index.html">Home</a></li>
                <li><a href="products.html">Products</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="product-details.html">Product Details</a></li>
                <li>
                  <a href="blog.html">Blog</a>
                  <ul class="submenu">
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="blog_details.html">Blog Details</a></li>
                    <li><a href="elements.html">Elements</a></li>
                  </ul>
                </li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div class="header-right1 d-flex align-items-center">
          <div class="search">
            <ul class="d-flex align-items-center">
              <li>
                <form action="#" class="form-box f-right">
                  <input
                    type="text"
                    name="Search"
                    placeholder="Search products"
                  />
                  <div class="search-icon">
                    <i class="ti-search"></i>
                  </div>
                </form>
              </li>
              <li>
                <a href="login.html" class="account-btn" target="_blank"
                  >My Account</a
                >
              </li>
              <li>
                <div class="card-stor">
                  <img src="./data/product-detail/image/card.svg" alt />
                  <span>0</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-12">
          <div class="mobile_menu d-block d-lg-none"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    `;
}

function addEventScrollStickyMenu() {
  const mainHeader = document.querySelector(".main-header");

  window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
      mainHeader.classList.add("sticky-bar");
    } else {
      mainHeader.classList.remove("sticky-bar");
    }
  });
}

renderHeaderPage();
addEventScrollStickyMenu();
