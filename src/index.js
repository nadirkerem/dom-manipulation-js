const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu');

mainEl.style.backgroundColor = 'var(--main-bg)';

const title = document.createElement('h1');
title.textContent = 'DOM Manipulation';
mainEl.appendChild(title);

mainEl.classList.add('flex-ctr');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');
