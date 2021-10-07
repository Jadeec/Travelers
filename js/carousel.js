// Create slides
let slideposition = 1;
const slides = document.querySelectorAll('.carouselItem');
const totalSlides = slides.length;
const rightButton = document.getElementById('carouselBtnPrevious');
const leftButton = document.getElementById('carouselBtnNext');

// Get silde position
function updateSlidePosition() {
  slides.forEach((slide) => {
    slide.classList.remove('carouselItemVisible');
  });
  slides[slideposition].classList.add('carouselItemVisible');
}

// move slides
function moveToNextSlide() {
  slideposition += 1;
  if (slideposition === totalSlides - 1) {
    leftButton.style.visibility = 'hidden';
  }
  rightButton.style.visibility = 'visible';
  updateSlidePosition();
}

function moveToPreviousSlide() {
  slideposition -= 1;
  if (slideposition === 0) {
    rightButton.style.visibility = 'hidden';
  }

  leftButton.style.visibility = 'visible';
  updateSlidePosition();
}

// animate buttons
document.getElementById('carouselBtnNext').addEventListener('click', () => {
  moveToNextSlide();
});

document.getElementById('carouselBtnPrevious').addEventListener('click', () => {
  moveToPreviousSlide();
});
