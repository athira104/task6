const hamburger = document.querySelector('.hamburger');
const sidebar = document.querySelector('.side-bar');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
