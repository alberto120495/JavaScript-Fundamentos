//!Selectores del DOM

const head = document.querySelector("#heading");

/*
console.log(head);
console.log(head.tagName);
console.log(head.textContent);
console.log(head.classList);
console.log(head.id);
*/

head.textContent = "Nuevo Heading";

const enlaces = document.querySelectorAll(".navegacion a");

enlaces[0].textContent = "Nuevo valor de enlace";

const inputNombre = document.querySelector("#nombre");

//!Eventos
head.addEventListener("click", () => {
  head.textContent = "NEW TEXT";
});

enlaces.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("CLick en enlace");
  });
});

inputNombre.placeholder = "Placeholder desde JS";

inputNombre.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const inputPassword = document.querySelector("#password");

inputPassword.addEventListener("input", funtionPassword);

function funtionPassword(e) {
  inputPassword.type = "text";

  setTimeout(() => {
    inputPassword.type = "password";
  }, 100);
}

const form = document.querySelector("#formulario");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  const alertaPrevia = document.querySelector(".alerta");

  if (alertaPrevia) {
    alertaPrevia.remove();
  }

  const alerta = document.createElement("DIV");
  alerta.classList.add("alerta");

  if (nombre === "" || password === "") {
    alerta.textContent = "Todos los campos son obligatorios";
    alerta.classList.add("error");
  } else {
    alerta.textContent = "Todo bien";
    alerta.classList.add("exito");
  }

  formulario.appendChild(alerta);
});

//!Agregar HTML con JS
