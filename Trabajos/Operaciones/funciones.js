document.addEventListener('DOMContentLoaded', function() {
    let btnResultado = document.getElementById('btnresultado');
    btnResultado.addEventListener('click', function() {
        let num1 = parseFloat(document.getElementById('n1').value);
        let num2 = parseFloat(document.getElementById('n2').value);
        let operacion = document.getElementById('op').value;
        let resultado;

        switch (operacion) {
            case '1':
                resultado = num1 + num2;
                break;
            case '2':
                resultado = num1 - num2;
                break;
            case '3':
                resultado = num1 * num2;
                break;
            case '4':
                resultado = num1 / num2;
                break;
            case '5':
                resultado = Math.pow(num1, num2);
                break;
            default:
                resultado = 'Operación no válida';
        }

        document.getElementById('res').innerText = resultado;
    });
});
