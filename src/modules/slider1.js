import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';

export default function initSlider() {
  const container = document.querySelector('.slideshow-container');

  container.innerHTML = `
    <div class="mySlides fade">
      <img src="${img1}" class="slide-img">
      <div class="text">One</div>
    </div>
    <div class="mySlides fade">
      <img src="${img2}" class="slide-img">
      <div class="text">Two</div>
    </div>
    <div class="mySlides fade">
      <img src="${img3}" class="slide-img">
      <div class="text">Three</div>
    </div>
    <a class="prev">&#10094;</a>
    <a class="next">&#10095;</a>
  `;

  // Tu lógica de slider (plusSlides, showSlides, etc.)
  let slideIndex = 1;
  const slides = document.getElementsByClassName('mySlides');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');

  function showSlides(n) {
    if (n > slides.length) slideIndex = 1;
    if (n < 1) slideIndex = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  showSlides(slideIndex);

  if (prev && next) {
    prev.addEventListener('click', () => plusSlides(-1));
    next.addEventListener('click', () => plusSlides(1));
  }
}
