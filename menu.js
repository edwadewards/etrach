// event menu open 
const menuBtn = document.querySelector('.event-menu-open');
const eventMenu = document.querySelector('.event-menu');

menuBtn.addEventListener('click', () => {
  eventMenu.style.transform = 'scale(1)';
});

// mobile menu
const hamburger = document.querySelector('.mobile-hamburger');
const menu = document.querySelector('.mobile-nav-menu');
const pageOne = document.querySelector('.menu-page-one');
const pageTwo = document.querySelector('.menu-page-two');
const pageForward = document.querySelector('.page-forward');
const pageBack = document.querySelector('.page-back');
const close = document.querySelector('.menu-close');

hamburger.addEventListener('click', () => {
  menu.style.transform = 'translateX(0%)';
})

pageForward.addEventListener('click', () => {
  pageOne.style.transform = 'translateX(100%)';
  pageTwo.style.transform = 'translateX(0%)';
})

pageBack.addEventListener('click', () => {
  pageTwo.style.transform = 'translateX(100%)';
  pageOne.style.transform = 'translateX(0%)';
})

close.addEventListener('click', () => {
  menu.style.transform = 'translateX(100%)';
})
