function calcularOrdinario() {
    var parcial1 = parseFloat(document.getElementById('parcial1').value);
    var parcial2 = parseFloat(document.getElementById('parcial2').value);
    var parcial3 = parseFloat(document.getElementById('parcial3').value);
    var parcial4 = parseFloat(document.getElementById("parcial4").value);
    var suma = (parcial1 + parcial2 + parcial3)/3;
    var ordinario= parcial4/2;
    var cal_f= (suma/2)+(ordinario)
    document.getElementById('Promedio').value = cal_f;
}