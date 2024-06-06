var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ],
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ],
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ],
  },
];
const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu');
const subMenuEl = document.querySelector('#sub-menu');

mainEl.style.backgroundColor = 'var(--main-bg)';

const title = document.createElement('h1');
title.textContent = 'DOM Manipulation';
mainEl.appendChild(title);

mainEl.classList.add('flex-ctr');

topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

menuLinks.forEach((menuLink) => {
  const anchorEl = document.createElement('a');
  anchorEl.setAttribute('href', menuLink.href);
  anchorEl.textContent = menuLink.text;
  topMenuEl.append(anchorEl);
});

subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

const topMenuLinks = document.querySelectorAll('#top-menu a');

topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  // if (!Array.from(topMenuLinks).includes(event.target)) {
  //   return;
  // }
  // if (!event.target.closest('#top-menu > a')) {
  //   return;
  // }
  if (event.target.nodeName != 'A') return;
  topMenuLinks.forEach((topMenuLink) => {
    if (
      event.target != topMenuLink &&
      topMenuLink.classList.contains('active')
    ) {
      topMenuLink.classList.remove('active');
    }
  });

  menuLinks.forEach((menuLink) => {
    if (menuLink.text === event.target.textContent && menuLink.subLinks) {
      if (!event.target.classList.contains('active')) {
        subMenuEl.style.top = '100%';
        buildSubmenu(menuLink);
      } else {
        subMenuEl.style.top = '0';
      }
    } else if (!menuLink.subLinks) {
      subMenuEl.style.top = '0';
      title.textContent = event.target.textContent.toUpperCase();
    }
  });
  event.target.classList.toggle('active');
});

subMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName != 'A') return;
  subMenuEl.style.top = '0';
  topMenuLinks.forEach((topMenuLink) => {
    if (topMenuLink.classList.contains('active')) {
      topMenuLink.classList.remove('active');
    }
    title.textContent = event.target.textContent.toUpperCase();
  });
});

function buildSubmenu(menuLink) {
  subMenuEl.textContent = '';
  menuLink.subLinks.forEach((subLink) => {
    const anchorEl = document.createElement('a');
    anchorEl.setAttribute('href', subLink.href);
    anchorEl.textContent = subLink.text;
    subMenuEl.append(anchorEl);
  });
}
