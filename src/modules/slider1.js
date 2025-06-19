import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

export default function initSlider1() {
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

    const image = document.createElement('img');
    image.src = slide.src;
    image.alt = slide.caption;
    image.classList.add('slide-img');

    const caption = document.createElement('div');
    caption.classList.add('text');
    caption.textContent = slide.caption;

    slideDiv.appendChild(image);
    slideDiv.appendChild(caption);
    slidesWrapper.appendChild(slideDiv);
  });

  const prev = document.createElement('a');
  prev.classList.add('prev');
  prev.innerHTML = '&#10094;';
  prev.addEventListener('click', () => showSlides((slideIndex -= 1)));

  const next = document.createElement('a');
  next.classList.add('next');
  next.innerHTML = '&#10095;';
  next.addEventListener('click', () => showSlides((slideIndex += 1)));

  container.appendChild(slidesWrapper);
  container.appendChild(prev);
  container.appendChild(next);
  document.querySelector('.site-main').appendChild(container);

  let slideIndex = 1;
  showSlides(slideIndex);

  function showSlides(n) {
    const slides = container.querySelectorAll('.mySlides');

    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    slides.forEach((slide) => (slide.style.display = 'none'));
    slides[slideIndex - 1].style.display = 'block';
  }
}
