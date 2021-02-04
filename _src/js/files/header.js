const mainNavigation = document.querySelector('.main-navigation');
const navToggle = document.querySelector('.main-navigation__toggle');


//если скрипты не подгрузятся
mainNavigation.classList.remove('main-navigation--no-js');

if (!mainNavigation.classList.contains('main-navigation--no-js')) {
  mainNavigation.classList.add('main-navigation--closed');
  mainNavigation.classList.remove('main-navigation--opened');
}

//поведение кнопки
navToggle.addEventListener('click', function () {
  if (mainNavigation.classList.contains('main-navigation--closed')) {
    mainNavigation.classList.remove('main-navigation--closed');
    mainNavigation.classList.add('main-navigation--opened');
  } else {
    mainNavigation.classList.add('main-navigation--closed');
    mainNavigation.classList.remove('main-navigation--opened');
  }
})
