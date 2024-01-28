const btnNumber = document.querySelectorAll(".btnNumber");
const btnAccion = document.querySelectorAll(".btnAccion");
const input = document.querySelector(".calculadora-input");
const btnIgual = document.querySelector(".btnIgual");
const btnClear = document.querySelector(".btnClear");
let value = "";
let val1 = 0;
let val2 = 0;
let resultado = 0;
let suma,
  resta,
  multiplicacion = false;

class Calculadora {
  static calcSuma(a, b) {
    return a + b;
  }

  static calcResta(a, b) {
    return a - b;
  }

  static calcMultiplicacion(a, b) {
    return a * b;
  }

  static calcDivision(a, b) {
    return a / b;
  }
}

function clear() {
  value = "";
  input.value = "";
}

function print(resultado) {
  input.value = resultado;
  val1 = 0;
  val2 = 0;
}

btnNumber.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    value = value + e.target.textContent;
    input.value = value;
  });
});

btnAccion.forEach((accion) => {
  accion.addEventListener("click", (e) => {
    if (e.target.textContent === "+") {
      suma = true;
      val1 = Number(value.trim());
      clear();
    }

    if (e.target.textContent === "-") {
      resta = true;
      val1 = Number(value.trim());
      clear();
    }
    if (e.target.textContent === "x") {
      multiplicacion = true;
      val1 = Number(value.trim());
      clear();
    }
    if (e.target.textContent === "/") {
      division = true;
      val1 = Number(value.trim());
      clear();
    }
  });
});

btnIgual.addEventListener("click", () => {
  val2 = Number(input.value.trim());

  if (suma) {
    suma = false;
    print(Calculadora.calcSuma(val1, val2));
  } else if (resta) {
    resta = false;
    print(Calculadora.calcResta(val1, val2));
  } else if (multiplicacion) {
    multiplicacion = false;
    print(Calculadora.calcMultiplicacion(val1, val2));
  } else {
    print(Calculadora.calcDivision(val1, val2));
  }
});

btnClear.addEventListener("click", clear);
