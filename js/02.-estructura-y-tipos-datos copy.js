//!Tipos de datos
/*
String
Number
Boolean
Undefined
Object
Function
Symbol
Big Int
Null
*/

//Undefined
let cliente;
console.log(typeof cliente);

//Boolean
let descuento = true;
console.log(typeof descuento);

//Number
let numeroUno = 20.2;
let numeroDos = 30;
let numeroTres = -100;

console.log(typeof numeroUno);
console.log(typeof numeroDos);
console.log(typeof numeroTres);

//Strings o cadenas
let nombre = "Alberto";
console.log(typeof nombre);

//Big int
const numeroGrande = BigInt(7987644534321448146546546548798321231654);
console.log(typeof numeroGrande);

//Symbol
const primerSymbol = Symbol(30); //Siempre es unica

console.log(typeof primerSymbol);
console.log(primerSymbol.valueOf());

//Null
const discount = null;

console.log(typeof discount); //Object
