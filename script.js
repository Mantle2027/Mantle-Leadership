/* When the registration Google Form is ready, paste its complete https:// URL between these quotation marks. */
const REGISTRATION_URL = "";
const menuButton = document.getElementById('menu-toggle');
const menu = document.getElementById('primary-nav');
menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.getElementById('copyright-year').textContent = String(new Date().getFullYear());
if (/^https:\/\//i.test(REGISTRATION_URL)) {
  document.querySelectorAll('a[href="#register"]').forEach(a => {
    a.href = REGISTRATION_URL;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
  });
  document.getElementById('registration-link').href = REGISTRATION_URL;
  document.getElementById('registration-help').textContent = 'Opens the registration form in a new tab.';
  document.querySelector('.registration-status').textContent = 'Expressions of interest are now welcome.';
}
