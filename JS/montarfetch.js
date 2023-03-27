// Obtener la tabla
var componentesTable = document.getElementById("componentesTable");

// Crear una función para cargar el archivo JSON
function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "json/montar.json", true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(JSON.parse(xobj.responseText));
        }
    };
    xobj.send(null);
}

// Llamar a la función para cargar el JSON y generar la tabla
loadJSON(function (data) {
    // Crear un objeto para almacenar los componentes y modelos correspondientes
    var componentes = {};
    for (var i = 0; i < data.length; i++) {
        var componente = data[i].componente;
        var modelo = data[i].modelo;
        var precio = data[i].precio;

        // Si el componente no existe en el objeto, se agrega
        if (!componentes[componente]) {
            componentes[componente] = [];
        }
        // Se agrega el modelo al componente correspondiente
        componentes[componente].push(modelo);
    }

    // Crear un select para cada componente y agregar las opciones correspondientes
    for (var componente in componentes) {
        var row = componentesTable.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = componente;
        var selectCell = row.insertCell(1);
        var select = document.createElement("select");
        select.classList.add("form-select");
        selectCell.appendChild(select);
        //Precio
        var selectCell = row.insertCell(2);
        var selectCell = selectCell.innerHTML = "$10";

        // Crear los elementos option para cada modelo del componente
        for (var i = 0; i < componentes[componente].length; i++) {
            var modeloOption = document.createElement("option");
            modeloOption.text = componentes[componente][i];
            select.add(modeloOption);

        }


    }

    //añadir un footer a la tabla
    var footer = componentesTable.createTFoot();
    var row = footer.insertRow();
    var cell = row.insertCell(0);
    cell.innerHTML = "Total";
    cell.colSpan = 2;
    var cell = row.insertCell(1);
    cell.innerHTML = "$80";

    //añadir un botón en el footer
    var buyButton = document.createElement("button");
    buyButton.innerHTML = "Comprar";
    var row = footer.insertRow();
    var cell = row.insertCell(0);
    buyButton = document.createElement("button");
    buyButton.classList.add("btn");
    buyButton.classList.add("btn-primary");
    buyButton.classList.add("ali");
    buyButton.classList.add("w-100"); 
    cell.colSpan = 3;
    buyButton.innerHTML = "Comprar";
    cell.appendChild(buyButton);
});