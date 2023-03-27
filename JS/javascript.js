function include(tag, file) {
  $(tag).load(file);
}

fetch('json/usuario.json')
  .then(response => response.json())
  .then(data => {
    // Seleccionar los elementos HTML
    const titleElement = document.querySelector('#titular');
    const descriptionElement = document.querySelector('#Direccion');
    const fecha = document.querySelector('#Fecha');
    // Actualizar los elementos HTML con los datos del JSON
    titleElement.innerText = data.titular;
    descriptionElement.innerText = data.Direccion + ", " + data.Dni;
    fecha.innerText = data.Fecha
  });