// Menu highlight on scroll
window.addEventListener('DOMContentLoaded', () => {
  const scrollPosition = new IntersectionObserver(sections => {
    sections.forEach(section => {
      const id = section.target.getAttribute('id');
      if (section.intersectionRatio > 0) {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active-link');
      } else {
        document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active-link');
      }
    });
  });
  document.querySelectorAll('.photo-gallery[id]').forEach((section) => {
    scrollPosition.observe(section);
  })
})


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