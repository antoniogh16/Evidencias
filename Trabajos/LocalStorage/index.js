import { storage } from "./Storage.js";
document.addEventListener('DOMContentLoaded', function() {
    let nombreLocal = storage.obtener('usuario');
    document.getElementById('nom').textContent = nombreLocal;

    let btn = document.querySelector('#btn1');
    btn.addEventListener('click',() =>{
        let nuevoNombre = document.querySelector('#nuevonombre').value;
        document.getElementById('nom').textContent = nuevoNombre;
        storage.asignar('usuario', nuevoNombre);
        document.querySelector('#nuevonombre').value = '';
    });
});
