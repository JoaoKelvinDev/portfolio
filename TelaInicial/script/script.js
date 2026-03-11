
if (btnMobile && menuDiv) {
  btnMobile.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Menu clicado, classes antes:', menuDiv.className);
    menuDiv.classList.toggle('hidden');
    console.log('Menu clicado, classes depois:', menuDiv.className);
  });
}
// ---------- Animações com ScrollReveal ----------
if (typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    distance: '40px',
    duration: 800,
    easing: 'ease-in-out',
    reset: false
  });

  sr.reveal('.reveal-left', { origin: 'left', delay: 200 });
  sr.reveal('.reveal-right', { origin: 'right', delay: 400 });
  sr.reveal('.reveal-bottom', { origin: 'bottom', delay: 200 });
  sr.reveal('.reveal-scale', { scale: 0.85, delay: 200 });
  
  sr.reveal('.project-card', { interval: 200 });
  sr.reveal('.timeline-item', { interval: 200, origin: 'left' });
}

window.addEventListener('scroll', onScrollSpy);
window.addEventListener('load', onScrollSpy);