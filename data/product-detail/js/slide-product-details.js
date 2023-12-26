let slideIndex = 1;

function renderImagesFullSize(images) {
  let boxSlide = document.querySelector("#slide-images .image-full");
  let htmlInner = "";
  images.forEach((item, index) => {
    htmlInner += `<div class="slide-item">
      <div class="numbertext">${index} / ${images.length}</div>
      <img
        src="${item}"
        style="width: 100%"
      />
    </div>`;
  });
  boxSlide.innerHTML = htmlInner;
}

function renderImagesThumbnail(images) {
  let boxImagesThumb = document.getElementById("images-thumb");
  console.log("boxImagesThumb", boxImagesThumb);
  // let htmlThumb = "";

  images.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "column";

    const image = document.createElement("img");
    image.style.width = "100%";
    image.className = "demo cursor";
    image.alt = "";
    image.src = item;
    image.onclick = () => {
      currentSlide(index + 1);
    };
    div.appendChild(image);

    boxImagesThumb.appendChild(div);
  });
}

export function renderSlide(images) {
  renderImagesFullSize(images);
  renderImagesThumbnail(images);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slide-item");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("captionshow"); // Corrected ID here
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

function addClickEventForBtnSilde() {
  const nextBtn = document.getElementById("next-slide");
  const preBtn = document.getElementById("pre-slide");
  if (nextBtn && preBtn) {
    nextBtn.onclick = () => {
      plusSlides(1);
    };
    preBtn.onclick = () => {
      plusSlides(-1);
    };
  }
}

setTimeout(() => {
  showSlides(slideIndex);
  addClickEventForBtnSilde();
}, 0);
