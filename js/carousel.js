const imagemin = require('imagemin');
const imagemin_jpeg = require('imagemin-mozjpeg');
const imagemin_png = require('imagemin-pngquant'); 
  
(async() => {
    const files = await imagemin(['assets/imgCarousel/*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [
            imagemin_jpeg (),
            imagemin_png ({
                quality: [0.6, 0.8]
            })
        ]
    });
    
    console.log(files);
  })(); 



// Create slides
let slideposition = 1;
const slides = document.querySelectorAll('.carouselItem');
const totalSlides = slides.length;
const rightButton = document.getElementById('carouselBtnPrevious');
const leftButton = document.getElementById('carouselBtnNext');

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
    }
    slides[slideposition].classList.add('carouselItemVisible');
}

//move slides
function moveToNextSlide() {
    slideposition++;
if (slideposition === totalSlides -1) {
   leftButton.style.visibility= "hidden";
}
rightButton.style.visibility = "visible";
updateSlidePosition();

}

function moveToPreviousSlide() {
    slideposition--;
    if (slideposition === 0) {
    rightButton.style.visibility= "hidden";
}

    leftButton.style.visibility= "visible";
    updateSlidePosition();
}
