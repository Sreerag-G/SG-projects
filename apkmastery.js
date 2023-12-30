const appsContainer = document.querySelector('.apps-container');
const scrollLeftButton = document.querySelector('.scroll-left');
const scrollRightButton = document.querySelector('.scroll-right');

let scrollPosition = 0;

scrollLeftButton.addEventListener('click', () => {
  scrollPosition -= 120;
  if (scrollPosition < 0) {
    scrollPosition = 0;
  }
  appsContainer.style.transform = translateX(${-scrollPosition}px);
});

scrollRightButton.addEventListener('click', () => {
  scrollPosition += 120;
  const maxScroll = appsContainer.scrollWidth - appsContainer.clientWidth;
  if (scrollPosition > maxScroll) {
    scrollPosition = maxScroll;
  }
  appsContainer.style.transform = translateX(${-scrollPosition}px);
});
