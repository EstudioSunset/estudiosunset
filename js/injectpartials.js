async function inject(id, url) {
  const html = await fetch(url).then(r => r.text());
  document.getElementById(id).innerHTML = html;

  // Si inyectamos el navbar, activamos el botón hamburguesa
  if (id === 'navbar') {
    // Esperamos al próximo ciclo de evento para asegurar que el DOM esté actualizado
    setTimeout(() => {
      const toggleBtn = document.querySelector('.menu-toggle');
      const navLinks = document.querySelector('.navbar-links');

      if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
          toggleBtn.classList.toggle('active');
          navLinks.classList.toggle('active');
        });
      }
    }, 0);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  inject('navbar',  '/partials/navbar.html');
  inject('footer',  '/partials/footer.html');
});
