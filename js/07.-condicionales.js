//!CONDICIONALES

const disponible = 4000;
const retirar = 200;

if (retirar < disponible) {
  console.log("Puedes retirar");
} else {
  console.log("No se puede retirar");
}

//!COMPARACION Y OPERADOR ESTRICTO

const numero1 = 20;
const numero2 = "20";

console.log(numero1 == numero2);
console.log(numero1 === numero2);

//!CONDICIONALES - TERNARIO

const autenticado = true;

console.log(autenticado ? "SI" : "No");

//?DOBLE TERNARIO

const saldo = 600;
const pagar = 400;
const tarjeta = true;

saldo > pagar
  ? console.log("puedes pagar con saldo")
  : tarjeta
  ? console.log("puedes pagar con tarjeta")
  : console.log("No puedes pagar");
