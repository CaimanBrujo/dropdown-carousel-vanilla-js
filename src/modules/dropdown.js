export default function setupDropdown() {
  const toggle = document.querySelector('.dropdown-toggle');
  const menu = document.querySelector('.dropdown-menu');
  const overlay = document.querySelector('.dropdown-overlay');

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    toggle.style.visibility = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    toggle.style.visibility = 'visible';
  }

  toggle.addEventListener('click', openMenu);
  overlay.addEventListener('click', closeMenu);
}
