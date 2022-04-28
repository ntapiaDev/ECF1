// Nav mobile
const navBtn = document.querySelector('.header__top__nav');
const topBtn = document.querySelector('.header__top__topNav');
const allBtn = document.querySelectorAll('.header__top__nav-btn');
const middleBtn = document.querySelector('.header__top__middleNav');
const bottomBtn = document.querySelector('.header__top__bottomNav');
const navMenu = document.querySelector('.header__nav__mobile-nav');

const handleNav = () => {
    navMenu.style.height = navMenu.style.height === '120px' ? '1px' : '120px';
    topBtn.style.transform = topBtn.style.transform === 'rotate(45deg) translateX(7px) translateY(6px)' ? 'rotate(0)' : 'rotate(45deg) translateX(7px) translateY(6px)';
    middleBtn.style.opacity = middleBtn.style.opacity === '0' ? '1' : '0';
    bottomBtn.style.transform = bottomBtn.style.transform === 'rotate(-45deg) translateX(7px) translateY(-6px)' ? 'rotate(0)' : 'rotate(-45deg) translateX(7px) translateY(-6px)';
    // Couleur du bouton
    allBtn.forEach(btn => btn.style.backgroundColor = navMenu.style.height === '120px' ? '#87bb34' : '#EEE');
}

navBtn.addEventListener('click', handleNav);

// Slider mobile
const leftBtn = document.querySelector('.main__project-left');
const rightBtn = document.querySelector('.main__project-right');
const sliderContainer = document.querySelector('.main__project__container');
const sliderIcons = document.querySelectorAll('.main__project__circle');
let index = 0;

const moveSlide = (direction) => {
    index = direction === '+' & index < 5
        ? index + 1 
        : direction === '+' & index === 5
            ? index = 0
            : direction === '-' & index > 0
                ? index - 1 : 5;
    sliderContainer.style.transform = 'translate('+ -(index) * 100/6 + '%)';
    sliderIcons.forEach(slider => slider.style.backgroundColor = 'rgb(48, 48, 48)')
    sliderIcons[index].style.backgroundColor = '#87bb34';
}

leftBtn.addEventListener('click', () => moveSlide('-'));
rightBtn.addEventListener('click', () => moveSlide('+'));