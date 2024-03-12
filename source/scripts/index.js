/* в этот файл добавляет скрипты*/
const navToggle = document.querySelector('.nav__toggle');
const navWrapper = document.querySelector('.nav__wrapper--closed');

navToggle.addEventListener('click', function () {
  if (navToggle.classList.contains('nav__toggle--disable')) {
    navWrapper.classList.remove('nav__wrapper--closed');
    navWrapper.classList.add('nav__wrapper--opened');
    navToggle.classList.remove('nav__toggle--disable');
    navToggle.classList.add('nav__toggle--enable');
  } else {
    navWrapper.classList.add('nav__wrapper--closed');
    navWrapper.classList.remove('nav__wrapper--opened');
    navToggle.classList.add('nav__toggle--disable');
    navToggle.classList.remove('nav__toggle--enable');
  }
});

const backButton = document.querySelector('.slider__button-back');
const nextButton = document.querySelector('.slider__button-next');
const slideLine1 = document.querySelector('.slider__line--1');
const slideLine2 = document.querySelector('.slider__line--2');
const slideLine3 = document.querySelector('.slider__line--3');

let slideIndex = 1;

showSlides(slideIndex);

backButton.addEventListener('click', function () {
  showSlides(slideIndex -= 1);
});

nextButton.addEventListener('click', function () {
  showSlides(slideIndex += 1);
});

slideLine1.addEventListener('click', function () {
  showSlides(slideIndex = 1);
});

slideLine2.addEventListener('click', function () {
  showSlides(slideIndex = 2);
});

slideLine3.addEventListener('click', function () {
  showSlides(slideIndex = 3);
});

function showSlides(n) {
  const slides = document.getElementsByClassName('slider__main');
  const slidesLine = document.getElementsByClassName('slider__line');

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (const slide of slides) {
    slide.classList.add('slider__main--hidden');
    slide.classList.remove('slider__main--visibles');
  }

  for (const slideLine of slidesLine) {
    slideLine.classList.remove('slider__line--curent');
  }
  slidesLine[slideIndex - 1].classList.add('slider__line--curent');
  slides[slideIndex - 1].classList.add('slider__main--visibles');
  slides[slideIndex - 1].classList.remove('slider__main--hidden');

  const mainSlider = document.querySelector('.main__slider');
  const sliderID1 = document.getElementById('slider1-id');
  const sliderID2 = document.getElementById('slider2-id');
  const sliderID3 = document.getElementById('slider3-id');

  if (sliderID1.classList.contains('slider__main--visibles')) {
    mainSlider.classList.add('slider__flat-white');
    mainSlider.classList.remove('slider__lavender');
    mainSlider.classList.remove('slider__espresso');
  }

  if (sliderID2.classList.contains('slider__main--visibles')) {
    mainSlider.classList.remove('slider__flat-white');
    mainSlider.classList.add('slider__lavender');
    mainSlider.classList.remove('slider__espresso');
  }

  if (sliderID3.classList.contains('slider__main--visibles')) {
    mainSlider.classList.remove('slider__flat-white');
    mainSlider.classList.remove('slider__lavender');
    mainSlider.classList.add('slider__espresso');
  }
}


window.onload = function () {
  slideMin();
  slideMax();
  setArea();
  setMinInput();
  setMaxInput();
};

const minVal = document.querySelector('.double-slider__min-val');
const maxVal = document.querySelector('.double-slider__max-val');
const priceInputMin = document.querySelector('.double-slider__input-field--min-input');
const priceInputMax = document.querySelector('.double-slider__input-field--max-input');
const minGap = 200;
const range = document.querySelector('.double-slider__slider-track');
const sliderMinValue = parseInt(minVal.min,10);
const sliderMaxValue = parseInt(minVal.max,10);

function slideMin() {
  const gap = parseInt(maxVal.value,10) - parseInt(minVal.value,10);
  if (gap <= minGap) {
    minVal.value = parseInt(maxVal.value,10) - minGap;
  }
  priceInputMin.value = minVal.value;
  setArea();

}

function slideMax() {
  const gap = parseInt(maxVal.value,10) - parseInt(minVal.value,10);
  if (gap <= minGap) {
    maxVal.value = parseInt(minVal.value,10) + minGap;
  }
  priceInputMax.value = maxVal.value;
  setArea();
}

function setArea() {
  range.style.left = (minVal.value / sliderMaxValue) * 100 + '%';
  range.style.right = 100 - (maxVal.value / sliderMaxValue) * 100 + '%';
}
function setMinInput() {
  const minPrise = parseInt(priceInputMin.value,10);
  if (minPrise < sliderMinValue) {
    priceInputMin.value = sliderMinValue;
  }
  minVal.value = priceInputMin.value;
  slideMin();
}

function setMaxInput() {
  const maxPrise = parseInt(priceInputMax.value,10);
  if (maxPrise < sliderMaxValue) {
    priceInputMin.value = sliderMinValue;
  }
  maxVal.value = priceInputMax.value;
  slideMax();
}

const paginationBack = document.querySelector('.catalog__pagination-button--back');
const paginationNext = document.querySelector('.catalog__pagination-button--next');
const paginationButton1 = document.querySelector('.catalog__pagination-button--1');
const paginationButton2 = document.querySelector('.catalog__pagination-button--2');
const paginationButton3 = document.querySelector('.catalog__pagination-button--3');

let paginationIndex = 2;

pagination(paginationIndex);

paginationBack.addEventListener('click', function () {
  pagination(paginationIndex -= 1);
});

paginationNext.addEventListener('click', function () {
  pagination(paginationIndex += 1);
});

paginationButton1.addEventListener('click', function() {
  pagination(paginationIndex = 1);
});

paginationButton2.addEventListener('click', function() {
  pagination(paginationIndex = 2);
});

paginationButton3.addEventListener('click', function() {
  pagination(paginationIndex = 3);
});

function pagination() {
  const paginations = document.getElementsByClassName('catalog__pagination-button');

  for (const paginatione of paginations) {
    paginatione.classList.remove('catalog__pagination-button--hidden');
    paginatione.classList.remove('catalog__pagination-button--curent');
  }


  if (paginationIndex === 1) {
    paginationBack.classList.add('catalog__pagination-button--hidden');
  }

  if (paginationIndex === paginations.length - 2) {
    paginationNext.classList.add('catalog__pagination-button--hidden');
  }

  paginations[paginationIndex].classList.add('catalog__pagination-button--curent');

}
