// Create slides
let slideposition = 0;
const slides = document.querySelectorAll('.carouselItem');
const totalSlides = slides.length;


//animate buttons
document.getElementById('carouselBtnNext')
.addEventListener("click", function() {
    moveToNextSlide();
})

document.getElementById('carouselBtnPrevious')
.addEventListener("click", function() {
    moveToPreviousSlide();
})

//Get silde position
function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('carouselItemVisible');
        slide.classList.add("carouselItemHidden");

        slides[slideposition].classList.add('carouselItemVisible');
    }
}

//move slides
function moveToNextSlide() {
if (slideposition === totalSlides -1) {
    slideposition = 0;
} else {
    slideposition++;
}
    updateSlidePosition();
}

function moveToPreviousSlide() {
    if (slideposition === 0 ) {
        slideposition = totalSlides -1;
    } else {
        slideposition--;
    }

    updateSlidePosition();
}
