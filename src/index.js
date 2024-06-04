const mainEl = document.querySelector('main');

mainEl.style.backgroundColor = 'var(--main-bg)';

const title = document.createElement('h1');
title.textContent = 'DOM Manipulation';
mainEl.appendChild(title);

mainEl.classList.add('flex-ctr');
