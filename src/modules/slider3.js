import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

export default function initSlider3() {
  const container = document.createElement('section');
  container.classList.add('slideshow-container');

  const slidesData = [
    { src: img1, caption: 'ONE' },
    { src: img2, caption: 'TWO' },
    { src: img3, caption: 'THREE' },
  ];

  const slidesWrapper = document.createElement('div');
  slidesWrapper.classList.add('slides-wrapper');

  slidesData.forEach((slide) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('mySlides', 'fade');
    slideDiv.innerHTML = `
      <img src="${slide.src}" class="slide-img">
      <div class="text">${slide.caption}</div>
    `;
    slidesWrapper.appendChild(slideDiv);
  });

  container.appendChild(slidesWrapper);
  document.querySelector('.site-main').appendChild(container);

  let slideIndex = -1;
  const slides = container.querySelectorAll('.mySlides');

  function showSlides() {
    slides.forEach((slide) => (slide.style.display = 'none'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].style.display = 'block';
  }

  showSlides(); // show first
  setInterval(showSlides, 4000);
}
