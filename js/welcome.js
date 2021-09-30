//WELCOME ANIMATION

if(document.querySelector(".welcome") && document.querySelectorAll(".welcome--load-point")) {
  const welcomeBox = document.querySelector(".welcome");
  const welcomePoints = document.querySelectorAll(".welcome--load-point");

  let interval = 1000/3;

  const welcomePointsWave = () => {
    setInterval(() => {
      welcomePoints[0].classList.toggle("welcome--load-point-animate-wave");
      setTimeout(() => {
        welcomePoints[1].classList.toggle("welcome--load-point-animate-wave");
      }, interval);
      setTimeout(() => {
        welcomePoints[2].classList.toggle("welcome--load-point-animate-wave");
      }, interval*2)
    }, 500);
    setInterval(()=> {
      setInterval(() => {
        welcomePoints[0].classList.toggle("welcome--load-point-animate-wave");
        setTimeout(() => {
          welcomePoints[1].classList.toggle("welcome--load-point-animate-wave");
        }, interval);
        setTimeout(() => {
          welcomePoints[2].classList.toggle("welcome--load-point-animate-wave");
        }, interval*2)
      }, 500)
    }, 1000)
  }

  welcomePointsWave();

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
