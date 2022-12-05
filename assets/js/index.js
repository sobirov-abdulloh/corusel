let slidePosition = 0;

let slides = document.getElementsByClassName("carousel_item");
let totalSlides = slides.length;

let nextBtn = document.getElementById("btn_next"),
  prevBtn = document.getElementById("btn_prev");

nextBtn.addEventListener("click", function () {
  moveToNextSlide();
});
prevBtn.addEventListener("click", function () {
  moveToPrevSlide();
});

function updateslidePosition() {
  for (let slide of slides) {
    slide.classList.remove("corusel_item---visible");
    slide.classList.add("corusel_item---hidden");
  }
  slides[slidePosition].classList.add("corusel_item---visible");
}
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateslidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateslidePosition();
}
