import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

export default function initSlider2() {
  const container = document.createElement('section');
  container.classList.add('slideshow-container');

  const slidesData = [
    { src: img1, caption: 'ONE' },
    { src: img2, caption: 'TWO' },
    { src: img3, caption: 'THREE' },
  ];

  const slidesWrapper = document.createElement('div');
  slidesWrapper.classList.add('slides-wrapper');

  const dotsWrapper = document.createElement('div');
  dotsWrapper.classList.add('dots');

  slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('mySlides', 'fade');
    slideDiv.innerHTML = `
      <img src="${slide.src}" class="slide-img">
      <div class="text">${slide.caption}</div>
    `;
    slidesWrapper.appendChild(slideDiv);

    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.dataset.index = index;
    dotsWrapper.appendChild(dot);
  });

  container.appendChild(slidesWrapper);
  container.appendChild(dotsWrapper);
  document.querySelector('.site-main').appendChild(container);

  const slides = container.querySelectorAll('.mySlides');
  const dots = container.querySelectorAll('.dot');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      currentIndex = parseInt(dot.dataset.index, 10);
      showSlide(currentIndex);
    });
  });

  showSlide(currentIndex);
}
