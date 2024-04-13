document.getElementById('btncacalcular').addEventListener('click', function() {
    var precio = document.getElementById('Precio').value;
    var descuento = document.getElementById('Descuento').value;
    descuento = parseFloat(descuento) / 100;
    var precioFinal = precio - (precio * descuento);
    document.getElementById('Precio_Final').innerHTML = precioFinal;
});
