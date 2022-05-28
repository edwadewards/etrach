// Intersection Observers
const fadeIn = document.querySelectorAll('.photo-gallery > img');

const observerOptions = {
  threshold: .6,
  rootMargin: "0px 0px -40px 0px"
};

const scrollsIn = new IntersectionObserver
(function(
  entries, 
  scrollsIn
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      scrollsIn.unobserve(entry.target);
    }
  });
},
observerOptions);

fadeIn.forEach(element => {
  scrollsIn.observe(element);
});



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