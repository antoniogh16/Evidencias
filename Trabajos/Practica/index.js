function calcularSumatorias() {
    var numeroUsuario = parseInt(prompt("Ingrese un número: "));
    var sumatoriaPares = 0;
    var sumatoriaImpares = 0;
    var sumatoriaMultiplos5 = 0;

    for (var i = 50; i <= numeroUsuario; i++) {
      if (i % 2 === 0) {
        sumatoriaPares += i;
      } else {
        sumatoriaImpares += i;
      }

      if (i % 5 === 0) {
        sumatoriaMultiplos5 += i;
      }
    }

    var divPares = document.getElementById("resultadoPares");
    divPares.textContent = "Suma de números pares: " + sumatoriaPares;

    var divImpares = document.getElementById("resultadoImpares");
    divImpares.textContent = "Suma de números impares: " + sumatoriaImpares;

    var divMultiplos5 = document.getElementById("resultadoMultiplos5");
    divMultiplos5.textContent = "Suma de múltiplos de 5: " + sumatoriaMultiplos5;

    if (sumatoriaPares > sumatoriaImpares) {
      divPares.classList.add("verde");
      divImpares.classList.add("rojo");
    } else {
      divPares.classList.add("rojo");
      divImpares.classList.add("verde");
    }
  }

  calcularSumatorias();