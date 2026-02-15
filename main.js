document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');
if (navToggle && menu){
  navToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}
