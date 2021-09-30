//WELCOME ANIMATION

if(document.querySelector(".welcome") && document.querySelectorAll(".welcome--load-point")) {
  const welcomeBox = document.querySelector(".welcome");

  const welcomeAnimation = () => {
    setTimeout(() => {
      welcomeBox.classList.add("welcome--animate");
      clearInterval();
    }, 2000);
  }

  document.addEventListener("DOMContentLoaded", () => {
    welcomeAnimation();
  })
}
