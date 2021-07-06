let navBar = document.querySelector(".navigation");

window.addEventListener("scroll", function() {
  if (window.scrollY > 0) {
    navBar.classList.add("nav-shrink");
  } else {
    navBar.classList.remove("nav-shrink");
  }
});

const slide = document.querySelector('.slide');
const slideImg = document.querySelectorAll('.slide img');
let currentSlide = 0;
const size = slide.clientWidth;

function changeSlide(newSlide) {
  slide.style.transform = 'translateX(' + (-size * newSlide) + 'px)';
  slide.style.transition = ' .5s';
}

function autoSlide() {
  
  if (currentSlide < 2) {
    currentSlide++;
    changeSlide(currentSlide);
  } else {
    slide.style.transform = 'translateX(0)';
    currentSlide = 0; 
  }
}

setInterval(autoSlide, 3000);

const mobileMnuBtn = document.querySelector('.burger');
const mobileMnu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.tinted-overlay');

mobileMnuBtn.addEventListener('click', function() {
  mobileMnu.classList.toggle('mobile-menu-expand');
  overlay.classList.toggle('tinted-overlay-show');
});

document.addEventListener('click', function() {
  mobileMnu.classList.remove('mobile-menu-expand');
  overlay.classList.remove('tinted-overlay-show');
});

mobileMnu.addEventListener('click', function(event) {
  event.stopPropagation();
});

mobileMnuBtn.addEventListener('click', function(event) {
  event.stopPropagation();
});

