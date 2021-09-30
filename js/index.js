const images = document.querySelectorAll('img');

let imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const image = entry.target;
        const newSrc = image.getAttribute('data-src')
        image.src = newSrc;
        console.log(image);
        imgObserver.unobserve(entry.target);
    });
});

images.forEach((image) => {
    imgObserver.observe(image);
})
