var colores = ['rojo', 'azul', 'verde'];
console.log(colores);
colores.push('negro', 'blanco');
console.log(colores);
colores.pop();
console.log(colores);

// Interacción con HTML
var opciones = '';
var tabla = '';
for (var i = 0; i < colores.length; i++) {
    opciones += '<option value="' + i + '">' + colores[i] + '</option>';
    tabla += '<tr><td>' + (i + 1) + '</td><td>' + colores[i] + '</td></tr>';
}
document.querySelector('#combo1').innerHTML = opciones;
document.querySelector('#body').innerHTML = tabla;

var sabores = [];

var btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    var sabor = document.querySelector('#nuevo').value;
    sabores.push(sabor);
    llenaTabla();
    document.querySelector('#nuevo').value = '';
});

function llenaTabla() {
    var body = '';
    for (var i = 0; i < sabores.length; i++) {
        body += '<tr><td>' + (i + 1) + '</td><td>' + sabores[i] + '</td></tr>';
    }
    document.querySelector('#sabores').innerHTML = body;
}

var btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    sabores.shift();
    llenaTabla();
});

var btn3 = document.querySelector('#btn3'); // Corregido aquí
btn3.addEventListener('click', () => {
    sabores.pop();
    llenaTabla();
});
