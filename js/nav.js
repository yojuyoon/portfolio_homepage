'use strict';

const toggleBtn = document.querySelector('.navbar__toggleBtn'),
    menu = document.querySelector('.navbar__menu'),
    icons = document.querySelector('.navbar__icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
