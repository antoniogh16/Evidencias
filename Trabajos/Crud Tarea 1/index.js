import { Storage } from "./Storage.js";

class Persona {
    constructor(nombre, apellido, tipo, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = tipo;
        this.edad = edad;
    }
}

let personas = [];

const formPersona = document.getElementById('formPersona');
const tablaPersonas = document.getElementById('datos');

// Cargar datos almacenados al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    personas = Storage.obtener('personas') || [];
    mostrarPersonas();
});

formPersona.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const tipo = document.getElementById('tipo').value;
    const edad = document.getElementById('edad').value;
    
    const nuevaPersona = new Persona(nombre, apellido, tipo, edad);
    personas.push(nuevaPersona);
    Storage.asignar('personas', personas);
    mostrarPersonas();
    formPersona.reset();
});

function mostrarPersonas() {
    tablaPersonas.innerHTML = '';
    personas.forEach((persona, index) => {
        const fila = `
            <tr>
                <td>${index + 1}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="nombre">${persona.nombre}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="apellido">${persona.apellido}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="tipo">${persona.tipo}</td>
                <td contenteditable="false" data-indice="${index}" data-columna="edad">${persona.edad}</td>
                <td>
                    <button class="btn btn-warning btnEditar" data-indice="${index}">Editar</button>
                    <button class="btn btn-success btnGuardar" data-indice="${index}" style="display: none;">Guardar</button>
                    <button class="btn btn-danger btnEliminar" data-indice="${index}">Eliminar</button>
                </td>
            </tr>
        `;
        tablaPersonas.innerHTML += fila;
    });
}

tablaPersonas.addEventListener('click', function(event) {
    const fila = event.target.closest('tr');
    if (!fila) return; // Si no se hace clic en una fila, no hacer nada
    
    const indice = fila.querySelector('[data-indice]').getAttribute('data-indice');
    const btnEditar = fila.querySelector('.btnEditar');
    const btnGuardar = fila.querySelector('.btnGuardar');
    const btnEliminar = fila.querySelector('.btnEliminar');
    
    if (event.target === btnEditar) {
        Array.from(fila.cells).forEach(cell => {
            if (cell.getAttribute('data-columna')) {
                cell.contentEditable = true;
                cell.focus();
            }
        });
        btnEditar.style.display = 'none'; // Oculta el botón "Editar"
        btnGuardar.style.display = 'inline'; // Muestra el botón "Guardar"
        fila.classList.add('editando'); // Agrega una clase para indicar que la fila está en modo de edición
    } else if (event.target === btnGuardar) {
        Array.from(fila.cells).forEach(cell => {
            if (cell.getAttribute('data-columna')) {
                cell.contentEditable = false;
                const columna = cell.getAttribute('data-columna');
                personas[indice][columna] = cell.innerText;
            }
        });
        btnGuardar.style.display = 'none'; // Oculta el botón "Guardar"
        btnEditar.style.display = 'inline'; // Muestra el botón "Editar"
        fila.classList.remove('editando'); // Remueve la clase que indica que la fila está en modo de edición
        Storage.asignar('personas', personas);
    } else if (event.target === btnEliminar) {
        personas.splice(indice, 1);
        Storage.asignar('personas', personas);
        mostrarPersonas(); // Mostrar nuevamente la tabla después de eliminar una persona
    }
});
