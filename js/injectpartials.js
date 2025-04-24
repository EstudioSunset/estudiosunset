async function inject(id, url) {
    const html = await fetch(url).then(r => r.text());
    document.getElementById(id).innerHTML = html;
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    inject('navbar',  '/partials/navbar.html');
    inject('footer',  '/partials/footer.html');
  });
  