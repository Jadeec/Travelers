/* eslint-disable no-plusplus */
// Create slides
let slidePosition = 1;
const slides = document.querySelectorAll('.carouselItem');
const totalSlides = slides.length;

// Get silde position
function updateSlidePosition() {
  slides.forEach((slide) => {
    slide.classList.remove('carouselItemVisible');
  });
  slides[slidePosition].classList.add('carouselItemVisible');
}

// move slides
function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPreviousSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    // eslint-disable-next-line no-plusplus
    slidePosition--;
  }

  updateSlidePosition();
}

// animate buttons
document.getElementById('carouselBtnNext').addEventListener('click', () => {
  moveToNextSlide();
});

document.getElementById('carouselBtnPrevious').addEventListener('click', () => {
  moveToPreviousSlide();
});
