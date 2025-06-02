const burger = document.getElementById('burger');
const nav = document.getElementById('navlink');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
});
