// lightbox 
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);
const lightboxImages = document.querySelectorAll('img');


lightboxImages.forEach(i => {
  i.addEventListener('click', () => {
    lightbox.classList.add('active');
    const lightboxImg = document.createElement('img');
    lightboxImg.src = i.src;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(lightboxImg); 
  })
})

lightbox.addEventListener('click', (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove('active');
})