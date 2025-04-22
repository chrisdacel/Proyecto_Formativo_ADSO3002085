// slider seccion_02 /primicia

const slider = document.querySelector('.slider-center-large');
const slides = Array.from(slider.querySelectorAll('.item'));
let current = 0;

function updateSlider() {
  const total = slides.length;
  slides.forEach(s => s.classList.remove('small-left','small-right','large','small'));

  const left  = (current - 1 + total) % total;
  const center= current;
  const right = (current + 1) % total;

  slides[left].classList.add('small-left', 'small');
  slides[center].classList.add('large');
  slides[right].classList.add('small-right', 'small');
}

updateSlider();
setInterval(() => {
  current = (current + 1) % slides.length;
  updateSlider();
}, 6000);

//  fin slider seccion_02/primicia


// sliders seccion_02

document.querySelectorAll('.slider').forEach(slider => {
    const contenedorItems = slider.querySelector('.contenedor_items');
    const btnPrev        = slider.querySelector('.atras_btn');
    const btnNext        = slider.querySelector('.adelante_btn');
    const items          = slider.querySelectorAll('.visible');
    const visibleCount   = 4;
    let indice           = 0;
    const totalItems     = items.length;
    const anchoItem      = items[0].offsetWidth;
  
    function actualizar() {
      const desplaz = -(indice * anchoItem);
      contenedorItems.style.transform = `translateX(${desplaz}px)`;
      if (indice === 0) {
        btnPrev.classList.add('desactivado');
      } else {
        btnPrev.classList.remove('desactivado');
      }
    
      if (indice >= totalItems - visibleCount) {
        btnNext.classList.add('desactivado');
      } else {
        btnNext.classList.remove('desactivado');
      }
    }
  
    btnNext.addEventListener('click', () => {
      if (indice < totalItems - visibleCount) {
        indice++;
        actualizar();
      }
    });
    btnPrev.addEventListener('click', () => {
      if (indice > 0) {
        indice--;
        actualizar();
      }
    });
  
    setInterval(() => {
      if (indice < totalItems - visibleCount) {
        indice++;
      } else {
        clearInterval;
      }
      actualizar();
    }, 10000);
  
    // Estado inicial
    actualizar();
  });
// fin slider_01/seccion_02
