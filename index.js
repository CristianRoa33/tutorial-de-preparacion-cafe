
// Ocultar el header al hacer scroll hacia abajo y mostrarlo al hacer scroll hacia arriba
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const viewportHeight = window.innerHeight;

  const scrollY = window.scrollY;

  
  if (scrollY > viewportHeight * 0.75) {
    header.style.display = "none";   
  } else {
    header.style.display = "flex";  
  }
});




// Función para el desplazamiento suave al hacer clic en los enlaces de la flecha


document.querySelectorAll('.flecha').forEach(flecha => {
  flecha.addEventListener('click', function(event) {
    event.preventDefault();
    const destino = document.querySelector(this.getAttribute('href'));
    destino.scrollIntoView({ behavior: 'smooth', block: 'start' });


    destino.classList.add('resaltada');
    setTimeout(() => destino.classList.remove('resaltada'), 1500);
  });
});




// Botón de volver arriba //

const btnArriba = document.getElementById("btnArriba");

// Muestra u oculta el botón según el scroll de la página
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
};

// Vuelve arriba con animación suave al hacer clic
btnArriba.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};