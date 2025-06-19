import './style.css';
import setupDropdown from './modules/dropdown.js';
import initSlider1 from './modules/slider1.js';
import initSlider2 from './modules/slider2.js';

document.addEventListener('DOMContentLoaded', () => {
  setupDropdown();
  initSlider1();
  initSlider2();
});
