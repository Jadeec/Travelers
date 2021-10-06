// INTERSECTION OBSERVER FOR LAZY LOADING

const images = document.querySelectorAll('.pagesImages');

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const image = entry.target;
    const newSrc = image.getAttribute('data-src');
    image.src = newSrc;
    imgObserver.unobserve(entry.target);
  });
});

images.forEach((image) => {
  imgObserver.observe(image);
});
