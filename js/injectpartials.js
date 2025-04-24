async function inject(id, url) {
  const html = await fetch(url).then(r => r.text());
  document.getElementById(id).innerHTML = html;

  // Activar menú hamburguesa si es el navbar
  if (id === 'navbar') {
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
  inject('navbar', '/partials/navbar.html');
  inject('footer', '/partials/footer.html');

  // Activar carrusel después de que el DOM está cargado
  const carousel = document.getElementById("carousel");

  if (carousel) {
    let scrollAmount = 1;
    let scrollSpeed = 20;
    let scrollInterval;

    function autoSlide() {
      scrollInterval = setInterval(() => {
        carousel.scrollLeft += scrollAmount;
        if (carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth) {
          carousel.scrollLeft = 0;
        }
      }, scrollSpeed);
    }

    function pauseAutoSlide() {
      clearInterval(scrollInterval);
    }

    function resumeAutoSlide() {
      autoSlide();
    }

    function scrollCarousel(direction) {
      const step = 300;
      carousel.scrollBy({
        left: direction * step,
        behavior: "smooth",
      });
    }

    // Exponer funciones globalmente para botones
    window.scrollCarousel = scrollCarousel;
    window.pauseAutoSlide = pauseAutoSlide;
    window.resumeAutoSlide = resumeAutoSlide;

    // Iniciar auto slide
    autoSlide();
  }
});
