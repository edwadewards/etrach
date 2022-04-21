const slides = document.querySelectorAll('[data-slide]')
const slideButtons = document.querySelectorAll('[data-slide-btn]')

function openSlide(event, slide) {  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = 'scale(0)';
  }  

  for (let i = 0; i < slideButtons.length; i++) {
    slideButtons[i].className = slideButtons[i].className.replace(' active-slide', '');
  }  

  document.getElementById(slide).style.transform = 'scale(1)';
  event.currentTarget.className += ' active-slide';  
}