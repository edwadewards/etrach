// event menu open 
const menuBtn = document.querySelector('.event-menu-open');
const eventMenu = document.querySelector('.event-menu');

menuBtn.addEventListener('click', () => {
  eventMenu.style.transform = 'scale(1)';
});

// event page photo gallery
const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const opacity = 0.5;

imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {
  imgs.forEach(img => (img.style.opacity = 1));
  current.src = e.target.src;
  current.classList.add('fade');
  setTimeout(() => current.classList.remove('fade'), 500);
  e.target.style.opacity = opacity;
}