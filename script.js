const aboutTitle = document.querySelector("#about-title");
const contactTitle = document.querySelector("#contact-title");

const windowAboutOp = document.querySelector("#ab-window-container");
const arrowLeft = document.querySelector("#arrowLeft");
const arrowRight = document.querySelector("#arrowRight");
const slider = document.querySelector("#slider");
const sliderItems = document.querySelectorAll(".img-project");

// Reload page and show icon
setTimeout(() => {
  document.querySelector("#logo-img").style.opacity = "0";
}, 4000);

setTimeout(() => {
  document.querySelector("#logo-img").style.transform = "scale(0)";
}, 5000);

const openAbout = () => {
  windowAboutOp.style.transform = "scale(1)";
};

const closeAbout = () => {
  windowAboutOp.style.transform = "scale(0)";
};

let position = 0;
const widthItem = Array.from( sliderItems )[0].clientWidth;
const maxPosition = (sliderItems.length - 1) * widthItem;
const minPosition = 0;
console.log(widthItem)

const moveRight = () => {
  if (position < maxPosition) {
    position += widthItem;
  } else if (position === maxPosition) {
    position = 0;
  }
  slider.style.right = `${position}px`;
};

const moveLeft = () => {
  if (position > 0) {
    position -= widthItem;
  } else if (position === minPosition) {
    position = maxPosition
  }
  slider.style.right = `${position}px`;
};

arrowRight.addEventListener("click", moveRight);
arrowLeft.addEventListener("click", moveLeft);
