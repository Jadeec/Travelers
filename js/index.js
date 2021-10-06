// INTERSECTION OBSERVER FOR LAZY LOADING

const images = document.querySelectorAll('.pagesImages');

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const img = entry.target;
    if (entry.intersectionRatio > 0) {
      const newSrc = img.getAttribute('data-src');
      img.src = newSrc;
      img.classList.add('slide');
    } else {
      img.classList.remove('slide');
    }
  });
});

images.forEach((element) => {
  imgObserver.observe(element);
});
