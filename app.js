const els = document.querySelectorAll('.fadein');

window.addEventListener('scroll', () => {
  els.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight*0.5) {
      el.classList.add('show');
    }
  });
});


const artiels = document.querySelectorAll('.arti');

window.addEventListener('scroll', () => {
  artiels.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight*0.7) {
      el.classList.add('show');
    }
  });
});

const Logyels = document.querySelectorAll('.Logy');

window.addEventListener('scroll', () => {
  Logyels.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight*0.7) {
      el.classList.add('show');
    }
  });
});

const we_3els = document.querySelectorAll('.we_3shadow');

window.addEventListener('scroll', () => {
  we_3els.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight*0.4) {
      el.classList.add('show');
    }
  });
});