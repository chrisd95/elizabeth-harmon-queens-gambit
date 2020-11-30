// This code is not mine, it is taken from:
// https://webdesign.tutsplus.com/tutorials/simple-fade-effect-on-scroll--cms-35166

const checkpoint = 400;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= checkpoint) {
    opacity = 1 - currentScroll / checkpoint;
  } else {
    opacity = 0;
  }
  document.querySelector(".jumbotron h1.display-8").style.opacity = opacity;
  document.querySelector(".jumbotron .lead").style.opacity = opacity;
});
