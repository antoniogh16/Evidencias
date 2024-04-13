document.getElementById('calcular').addEventListener('click', function() {
    var inicio = parseInt(document.getElementById('inicio').value);
    var fin = parseInt(document.getElementById('fin').value);
    var resultado = 0;
    var numerosPares = '';
    for (var i = inicio; i <= fin; i++) {
        if (i % 2 == 0) {
            resultado += i;
            numerosPares += i + ', ';
        }
    }
    numerosPares = numerosPares.slice(0, -2);
    document.getElementById('suma').textContent = 'La suma de los números pares es: ';
    document.getElementById('resultado').textContent = resultado;
    document.getElementById('numerosPares').textContent = 'Los números pares son: ' + numerosPares;
});
