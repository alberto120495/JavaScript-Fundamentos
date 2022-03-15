//!ARRAY METHODS
const tecnology = ["html", "css", "js", "react", "node"];
const numeros = [10, 20, 30];

let nuevoArray;

//?FILTER -> Filtra los elementos deacuerdo a una condicion
nuevoArray = tecnology.filter((element) => element !== "react");
console.log(nuevoArray);

//!Metodos
//?INCLUDES -> Comprueba si un elemento existe en el array
console.log(nuevoArray.includes("css"));

//?SOME -> Devuelve si al menos uno cumple la condicion
console.log(numeros.some((element) => element == 80));

//?EVERY -> Comprueba si todos cumplen la condicion
console.log(numeros.every((element) => element > 0));

//?FIND -> Devuelve el PRIMER elemento que cumpla la condicion
console.log(numeros.find((element) => element == 20));

//?REDUCE -> Acumulando en el total
console.log(numeros.reduce((total, number) => number + total, 0));
