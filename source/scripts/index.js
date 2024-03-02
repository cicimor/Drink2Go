/* в этот файл добавляет скрипты*/
let navToggle = document.querySelector('.nav__toggle')
let navWrapper = document.querySelector('.nav__wrapper--closed')

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



let backButton = document.querySelector('.slider__button-back')
let nextButton = document.querySelector('.slider__button-next')


let slideIndex = 1;

showSlides(slideIndex);

backButton.addEventListener('click', function () {
  showSlides(slideIndex -= 1);
})

nextButton.addEventListener('click', function () {
  showSlides(slideIndex += 1);
})

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slider__main");

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }

  for (let slide of slides) {
    slide.classList.add('slider__main--hidden');
    slide.classList.remove('slider__main--visibles');
    console.log(slideIndex)
  }
  slides[slideIndex - 1].classList.add('slider__main--visibles');
  slides[slideIndex - 1].classList.remove('slider__main--hidden');

  let mainSlider = document.querySelector(".main__slider")
  let sliderID1 = document.getElementById("slider1-id")
  let sliderID2 = document.getElementById("slider2-id")
  let sliderID3 = document.getElementById("slider3-id")

  if (sliderID1.classList.contains("slider__main--visibles")) {
    mainSlider.classList.add('slider__flat-white')
    mainSlider.classList.remove('slider__lavender')
    mainSlider.classList.remove('slider__espresso')
  }

  if (sliderID2.classList.contains("slider__main--visibles")) {
    mainSlider.classList.remove('slider__flat-white')
    mainSlider.classList.add('slider__lavender')
    mainSlider.classList.remove('slider__espresso')
  }

  if (sliderID3.classList.contains("slider__main--visibles")) {
    mainSlider.classList.remove('slider__flat-white')
    mainSlider.classList.remove('slider__lavender')
    mainSlider.classList.add('slider__espresso')
  }
}


window.onload = function () {
  slideMin();
  slideMax();
  setArea();
  setMinInput()
  setMaxInput()
};

const minVal = document.querySelector(".double-slider__min-val");
const maxVal = document.querySelector(".double-slider__max-val");
const priceInputMin = document.querySelector(".double-slider__input-field--min-input");
const priceInputMax = document.querySelector(".double-slider__input-field--max-input");
const minGap = 200;
const range = document.querySelector(".double-slider__slider-track");
const sliderMinValue = parseInt(minVal.min);
const sliderMaxValue = parseInt(minVal.max);

function slideMin() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if(gap <= minGap) {
    minVal.value = parseInt(maxVal.value) - minGap;
  }
  priceInputMin.value = minVal.value
  setArea();

}

function slideMax() {
  let gap = parseInt(maxVal.value) - parseInt(minVal.value);
  if(gap <= minGap) {
    maxVal.value = parseInt(minVal.value) + minGap;
  }
  priceInputMax.value = maxVal.value;
  setArea();
}

function setArea() {
  range.style.left = (minVal.value / sliderMaxValue) * 100 + "%";
  range.style.right = 100 - (maxVal.value / sliderMaxValue) *100 + "%"
}
function setMinInput() {
  let minPrise = parseInt(priceInputMin.value)
  if(minPrise < sliderMinValue) {
    priceInputMin.value = sliderMinValue;
  }
  minVal.value = priceInputMin.value;
  slideMin();
}

function setMaxInput() {
  let maxPrise = parseInt(priceInputMax.value)
  if(maxPrise < sliderMaxValue) {
    priceInputMin.value = sliderMinValue;
  }
  maxVal.value = priceInputMax.value;
  slideMax();
}





