function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  if (num2 === 0) {
    return "Error: No se puede dividir por cero";
  }
  return num1 / num2;
}
function factorial(num) {
  if (num < 0) {
    return "Error: No existe factorial de números negativos";
  }
  if (num === 0 || num === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}
function exponente(base, exponente) {
  return Math.pow(base, exponente);
}
function raizCuadrada(num) {
  if (num < 0) {
    return "Error: No existe raíz cuadrada de números negativos";
  }
  return Math.sqrt(num);
}
function calculadora() {
  var opcion = prompt(
    "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
  );
  var num1 = parseFloat(prompt("Ingrese el primer número:"));
  var num2, resultado;

  if (opcion !== "5" && opcion !== "7") {
    num2 = parseFloat(prompt("Ingrese el segundo número:"));
  }

  alert(
    "la operacion es " +
      opcion +
      " el primer valor es " +
      num1 +
      " el segundo valor es " +
      num2
  );
}
function sumar(num1, num2) {
  return num1 + num2;
}