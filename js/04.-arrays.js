//!Arrays
const tecnologias = [20, 30, true, "React", "JS"];

console.log(tecnologias);
console.log(typeof tecnologias); //object

console.table(tecnologias);
console.log(tecnologias.length);
console.log(tecnologias.toString());

//!Manipulacion de arreglos

const tecnology = ["html", "css", "js", "react", "node"];

//!AÑADIR
// NO hacer, porque modifica el areglo original
/*
tecnology.push("Graphql"); // Final
tecnology.unshift("graphql"); //Inicio
*/

//?SIN MODIFICAR EL ARREGLO ORIGINAL
//const newArray = [...tecnology, "GraphQL"];
//const newArray = ["GraphQL", ...tecnology];

//!ELIMINAR
// NO hacer, porque modifica el areglo original
//tecnology.pop(); // elimina  al final  en el arreglo original
//tecnology.shift(); // elimina  al inicio  en el arreglo original
//tecnology.splice(2, 1); // (desdeCualIndice, CuantosElementos)

//?SIN MODIFICAR EL ARREGLO
//const newArray = tecnology.filter((element, index) => element !== "js");

//!REEMPLAZAR
//tecnology[0] = "GraphQL";
const newArray = tecnology.map((element, index) => {
  if (element === "html") {
    return "HTML";
  } else {
    return element;
  }
});

console.log(tecnology);
console.log(newArray);

//!Destructuring
const [, , , , last] = tecnology;

console.log(last);

//!ITERAR ARREGLOS

console.log("********ITERADORES*********");

//foreach -> Accede a cada elemento
const arrayForeach = tecnology.forEach((element) => {
  return element;
});

//MAP -> Crea un nuevo array
const arrayMap = tecnology.map((element) => {
  return element;
});

console.log(arrayForeach);
console.log(arrayMap);
