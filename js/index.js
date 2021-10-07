// earth on the corner 

const continentPages = ["africa.html", "europe.html", "asia.html", "northAmerica.html", "oceania.html", "southAmerica.html"]

function goToRandomPage() {
    document.querySelector("#earthOnTheCorner").classList.add("animation");
    let page = continentPages[Math.floor(Math.random() * continentPages.length)];
    setTimeout(() => {
        window.location.href = page
    }, 2000)

}

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