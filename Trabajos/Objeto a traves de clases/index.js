import {Persona} from './persona.js';
import {Combo} from './Combo.js';

const benny = new Persona('Benito', 'Juarez', 68, 1.80);
const porfi = new Persona('Porfirio', 'Guerreo', 76, 1.73);
console.log(benny.imc());
console.log(porfi.saludar());

let btn = document.querySelector('#btn1');
btn.addEventListener('click', ()=>{
    let valores = document.querySelector('#valores').value;
    let arrayValores = valores.split(',');
    const colores = new Combo('cmbColores', 'colores', 'text-danger', arrayValores);
    document.getElementById('div1').innerHTML = colores.mostrar();
});

document.getElementById('btnGuardar').addEventListener('click', ()=>{

});

document.getElementById('btnBorrar').addEventListener('click', ()=>{
   
});
