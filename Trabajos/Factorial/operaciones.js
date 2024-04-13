// Función para calcular el factorial de un número
function calcularFactorial() {
    // Obtener el número ingresado por el usuario
    var numero = parseInt(document.getElementById("numero").value);
    
    // Verificar si el número es válido (mayor o igual a cero)
    if (numero >= 0) {
        // Calcular el factorial del número
        var factorial = 1;
        for (var i = 1; i <= numero; i++) {
            factorial *= i;
        }
        
        // Mostrar el resultado en la página
        document.getElementById("resultado").innerText = "El factorial de " + numero + " es: " + factorial;
    } else {
        // Mostrar un mensaje de error si el número es negativo
        document.getElementById("resultado").innerText = "Por favor, ingresa un número entero no negativo.";
    }
}
