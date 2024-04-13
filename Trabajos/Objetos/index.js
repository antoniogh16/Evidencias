const objetos = {};

const persona ={
    nombre: 'jesus',
    apellido: 'Pérez',
    edad: 25,
    saludar: function(){
        return "hola,soy "+this.nombre
    }
}
console.log(persona.saludar());

const persona2 ={
    nombre: 'pepe',
    apellido: 'Pérez',
    edad: 25,
    saludar: function(){
        return "hola,soy "+this.nombre
    }
}
let personas =[persona, persona2];
console.log(personas[0].saludar());

let tabla = '';
persona.nombre ='pablo'; 
for( let i = 0; i<personas.length; i++){
    tabla += '<tr><td>'+(i+1)+'</td><td>'
    +personas[i].nombre+'</td><td>'
    +personas[i].apellido+'</td><td>'
    +personas[i].edad+'</td></tr>';
}
document.getElementById('tabla').innerHTML = tabla;