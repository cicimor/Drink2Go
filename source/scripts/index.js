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

