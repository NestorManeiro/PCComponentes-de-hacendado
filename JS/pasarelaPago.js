/*Diseño responsive*/

let tamanoPantalla = window.innerWidth;


function actualizarTamanoPantalla() {
    
}

const dpDescription = document.querySelector('#product-description');
const dpAmmount = document.querySelector('#product-ammount');
const dpshipmentDirection = document.querySelector('#shipment-directions');


const dpdirection = document.querySelectorAll('.target1');

var cambio = false;




function cambiarClase() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    dpDescription.classList.remove('col');
    dpDescription.classList.add('row');
    dpAmmount.classList.remove('col');
    dpAmmount.classList.add('row');

    /*Paso 2 */
    dpshipmentDirection.classList.remove('container');
    dpshipmentDirection.classList.add('container_col');

    for(const item of dpdirection){
      item.classList.remove('direccion');
      item.classList.add('container_col_direction');
    }

    cambio = true;
  } else {
    if(cambio == true){
      dpDescription.classList.remove('row');
      dpDescription.classList.add('col');
      dpAmmount.classList.remove('row');
      dpAmmount.classList.add('col');
      
    dpshipmentDirection.classList.remove('container_col');
    dpshipmentDirection.classList.add('container');

    for(const item of dpdirection){
      item.classList.remove('container_col_direction');
      item.classList.add('direccion');
    }
    }
  }
}

cambiarClase(); // Para que se ejecute cuando cargue la página

window.addEventListener('resize', cambiarClase); // Para que se ejecute cada vez que la pantalla cambie de tamaño
