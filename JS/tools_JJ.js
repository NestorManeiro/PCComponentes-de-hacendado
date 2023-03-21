fetch('./json/usuario.json')
  .then(response => response.json())
  .then(data => {
    // Haz lo que quieras con los datos del archivo JSON
    const p = document.getElementById('datos');
    p.textContent = "Nick: " + data.Nick;
  });

