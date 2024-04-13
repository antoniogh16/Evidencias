var boton = document.getElementById('btn');
boton.addEventListener('click', function() {
    var color = document.getElementById('color').value;
    document.getElementById('card').classList.add(color);
});

function eliminarClases() {
    document.getElementById('card').classList.remove('bg-danger');
    document.getElementById('card').classList.remove('bg-warning');
    document.getElementById('card').classList.remove('bg-success');
    document.getElementById('card').classList.remove('bg-info');
    document.getElementById('card').classList.remove('bg-dark');
}

var prom = document.getElementById('prom');
prom.addEventListener('click', function() {
    var c1 = parseInt(document.getElementById('c1').value);
    var c2 = parseInt(document.getElementById('c2').value);
    var c3 = parseInt(document.getElementById('c3').value);
    var promedio = (c1 + c2 + c3) / 3;
    document.getElementById('resultado').innerHTML = promedio.toFixed(2);
    if (promedio > 6) {
        document.getElementById('resultado').classList.remove('alert-danger');
        document.getElementById('resultado').classList.add('alert-success');
    } else {
        document.getElementById('resultado').classList.remove('alert-success');
        document.getElementById('resultado').classList.add('alert-danger');
    }
});
