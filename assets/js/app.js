// White mode
const colorBtn = document.querySelector('.header__top__color');
let darkMode = true;
const changeColor = () => {
    let root = document.documentElement;
    document.querySelector('body').style.color = darkMode ? '#000' : '#FFF';
    document.querySelectorAll('a').forEach(a => a.style.color = darkMode ? '#000' : '#FFF');
    darkMode ? root.style.setProperty('--light-dark', '#FFF') : root.style.setProperty('--light-dark', '#2E2E2E');
    darkMode ? root.style.setProperty('--medium-dark', '#DDD') : root.style.setProperty('--medium-dark', '#262626');
    darkMode ? root.style.setProperty('--dark-dark', '#CCC') : root.style.setProperty('--dark-dark', '#1E1E1E');
    darkMode ? root.style.setProperty('--dark', '#AAA') : root.style.setProperty('--dark', '#121212');
    colorBtn.style.backgroundColor = darkMode ? 'rgb(48, 48, 48)' : 'rgb(255, 255, 255)';
    allBtn.forEach(btn => btn.style.backgroundColor = darkMode ? 'rgb(48, 48, 48)' : '#EEE');
    document.querySelectorAll('.main__project-btn').forEach(btn => btn.style.backgroundColor = darkMode ? 'rgb(48, 48, 48)' : '#EEE');
    document.querySelectorAll('.fa-btn').forEach(btn => btn.style.color = darkMode ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)');
    darkMode = darkMode ? false : true;
}

colorBtn.addEventListener('click', changeColor);

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
    allBtn.forEach(btn => btn.style.backgroundColor = navMenu.style.height === '120px' ? '#87bb34' 
        : darkMode ? '#EEE' : 'rgb(48, 48, 48)');
}

navBtn.addEventListener('click', handleNav);

// Slider mobile
const leftBtn = document.querySelector('.main__project-left');
const rightBtn = document.querySelector('.main__project-right');
const sliderContainer = document.querySelector('.main__project__container');
const sliderIcons = document.querySelectorAll('.main__project__circle');
let index = 1;

const reset = (value) => {
    const init = () => {
        index = value;
        sliderContainer.style.transition = 'none';
        sliderContainer.style.transform = 'translate('+ -(index) * 100/8 + '%)';
        setTimeout(() => sliderContainer.style.transition = 'transform 0.3s', 10);
        document.removeEventListener('transitionend', init);
    }
    document.addEventListener('transitionend', init)
}
const moveSlide = (direction) => {
    index = direction === '+' & index < 7
        ? index + 1 
        : direction === '+' & index === 7
            ? index = 0
            : direction === '-' & index > 0
                ? index - 1 : 7;
    sliderContainer.style.transform = 'translate('+ -(index) * 100/8 + '%)';
    index === 7 ? reset(1) : index === 0 ? reset(6) : null;
    sliderIcons.forEach(slider => slider.style.backgroundColor = 'rgb(48, 48, 48)')
    let iconIndex = index - 1
    iconIndex === 6 ? iconIndex = 0 : iconIndex === -1 ? iconIndex = 5 : null;
    sliderIcons[iconIndex].style.backgroundColor = '#87bb34';
}

leftBtn.addEventListener('click', () => moveSlide('-'));
rightBtn.addEventListener('click', () => moveSlide('+'));

// Modale

const modaleBtns = document.querySelectorAll('.main__project__openModale-btn');
const modaleContainer = document.querySelector('.main__project__modale-container');
const modale = document.querySelector('.main__project__modale');

const openModale = (e) => {
    modaleContainer.style.display = "flex";
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => modale.style.transform = 'translate(0)', 100);
    document.querySelector('.main__project__modale__img img').src = e.target.parentElement.parentElement.children[1].src;
    document.querySelector('.main__project__modale__content h3').textContent = e.target.parentElement.parentElement.nextElementSibling.children[0].textContent;
}
const closeModale = (e) => {
    if (e.target === modaleContainer) {
        modale.style.transform = 'translate(-100vw)';
        setTimeout(() => {
            modaleContainer.style.display = "none";
            document.querySelector('body').style.overflow = 'auto';
        }, 100);
    }
}

modaleBtns.forEach(btn => btn.addEventListener('click', openModale));
modaleContainer.addEventListener('click', closeModale);