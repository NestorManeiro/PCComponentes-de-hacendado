
request.onload = function() {
  var datos = request.response;
  var miParrafo = document.getElementById('titular');
  miParrafo.innerHTML = 'Nombre: ' + datos.titular;
};