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
