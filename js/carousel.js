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
        slides[slideposition].classList.add('carouselItemVisible');
    }
}



//move slides 
function moveToNextSlide() {
if (slideposition === totalSlides -1) {
   leftButton.style.visibility= "hidden"; 
} else {
    slideposition++; 
}
rightButton.style.visibility = "visible";   
updateSlidePosition(); 

}

function moveToPreviousSlide() {
    if (slideposition === 0) {
    rightButton.style.visibility= "hidden"; 
} else {
    slideposition--; 
}

    leftButton.style.visibility= "visible";      
    updateSlidePosition(); 
} 
