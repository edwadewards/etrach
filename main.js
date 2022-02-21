// color change on club leader's names
const lastName = document.querySelectorAll('.last-name');

lastName.forEach(name => {
  name.addEventListener('mouseover', () => {
    let color = '#' + Math.floor(Math.random()*16777215).toString(16);
    name.style.color = color;
  });
});


// image slider
const slider = document.querySelector('.gallery-slide');
const images = Array.from(slider.children);
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');


const activeImg = images[0].getBoundingClientRect().width;

const setPosition = (image, index) => {
  image.style.left = activeImg * index + 'px';
};
images.forEach(setPosition);

const moveSlider = (slider, currentImg, targetImg) => {
  slider.style.transform = 'translateX(-' + targetImg.style.left + ')';
  currentImg.classList.remove('current-img');
  targetImg.classList.add('current-img');
};

prev.addEventListener('click', e => {
  const currentImg = slider.querySelector('.current-img');
  const prevImg = currentImg.previousElementSibling;
  moveSlider(slider, currentImg, prevImg);
});

next.addEventListener('click', e => {
  const currentImg = slider.querySelector('.current-img');
  const nextImg = currentImg.nextElementSibling;
  moveSlider(slider, currentImg, nextImg);
});

