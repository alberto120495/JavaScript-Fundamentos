//!Funciones - FUNCTION DECLARATION
//?La declaracion de funciones SI se registran en la fase de creacion
function sumar() {
  console.log(2 + 2);
}

function sumarParams(num, num2) {
  console.log(num + num2);
}

function returnSumaParams(num, num2) {
  return [num + num2, "Hola Mundo"];
}

sumar();
sumarParams(3, 3);

const [resultado, texto] = returnSumaParams(6, 8);
console.log(resultado);
console.log(texto);

//!FUNCTION EXPRESION
//?Las expresiones NO se registran en la fase de creacion sino hasta la fase de ejecucion
const resta = function () {
  console.log("lolo");
};

resta();

//!ARROW FUNCTIONS
const multiplicacion = (numero, numero2) => numero * numero2;
const result = multiplicacion(2, 5);

console.log(result);

//!ARROW FUNCTIONS y ARRAY METHODS

const tecnology = ["html", "css", "js", "react", "node"];

const newArray = tecnology.map((element, index) => {
  if (element === "html") {
    return "HTML";
  } else {
    return element;
  }
});

console.log(newArray);
