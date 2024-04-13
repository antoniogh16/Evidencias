var colores = [];
var inputcolor = document.querySelector("#color");

inputcolor.addEventListener("keypress", (event) => {
    if (event.keyCode === 13) {
        colores.push(inputcolor.value);
        inputcolor.value = "";
        llenarTabla();
    }
});

function llenarTabla() {
    var body = "";
    for (var i = 0; i < colores.length; i++) {
        var btnEditar = '<button id="btnE' + i + '" class="btn btn-warning" onclick="editarColor(' + i + ')">editar</button>';
        var btnEliminar = '<button id="btnD' + i + '" class="btn btn-danger" onclick="eliminarColor(' + i + ')">eliminar</button>';
        var input = '<input id="input' + i + '" class="form-control d-none">';
        var btnGuardar = '<button id="btnG' + i + '" class="btn btn-success d-none" onclick="guardarColor(' + i + ')">guardar</button>';
        body += '<tr><td>' + (i + 1) + '</td><td>' + colores[i] + '</td><td>' + input + btnEditar + btnGuardar + '</td><td>' + btnEliminar + '</td></tr>';
    }
    document.querySelector("#datos").innerHTML = body;
}

function editarColor(index) {
    var input = document.querySelector("#input" + index);
    var btnGuardar = document.querySelector("#btnG" + index);
    input.value = colores[index];
    input.classList.remove("d-none");
    btnGuardar.classList.remove("d-none");
    document.querySelector("#btnE" + index).classList.add("d-none"); // Ocultar el botón de editar
}

function guardarColor(index) {
    var input = document.querySelector("#input" + index);
    var color = input.value;
    if (color) {
        colores[index] = color;
        llenarTabla();
    }
    input.classList.add("d-none");
    document.querySelector("#btnG" + index).classList.add("d-none");
    document.querySelector("#btnE" + index).classList.remove("d-none"); // Mostrar nuevamente el botón de editar
}

function eliminarColor(index) {
    colores.splice(index, 1);
    llenarTabla();
}