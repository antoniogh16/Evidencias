document.getElementById('btn_mostrar').addEventListener('click', function() {
    var tabla = document.getElementById('tabla').value;
    var inicio = document.getElementById('inicio').value;
    var fin = document.getElementById('fin').value;
    var res = document.getElementById('res');
    res.innerHTML = '';
    for (var i = inicio; i <= fin; i++) {
        res.innerHTML += tabla + ' x ' + i + ' = ' + tabla * i + '<br>';
    }
});