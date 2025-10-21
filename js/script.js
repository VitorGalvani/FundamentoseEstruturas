// Seleciona elementos
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

// Evento para abrir/fechar o menu mobile
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Fechar menu ao clicar em um link (opcional)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });
});

// Submenu dropdown (funciona também no mobile)
const dropdownLinks = document.querySelectorAll('nav li > a');

dropdownLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    const submenu = link.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      e.preventDefault();
      submenu.classList.toggle('open');
    }
  });
});
