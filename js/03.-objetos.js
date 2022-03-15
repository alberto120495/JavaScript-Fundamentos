//Objeto
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

console.log(producto);
//console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Desestructuracion
let { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

//Object Literal Enhacement
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
  autenticado,
  usuario,
};

console.log(nuevoObjeto);

//!OBJETOS

const product = {
  name: "Tenis",
  price: 500,
  available: true,
};

//?Evitar modificar el objeto
//Object.freeze(product); // No permite modificarlo de ninguna forma

//Object.seal(product); // Modificar propiedades existes, no permite añadir o eliminar

//?REESCRIBIR
product.name = "Monitor Curvo";

//?AGREGAR, si no existe lo agrega
product.image = "imagen.jpg";

//?ELIMINAR
delete product.available;

console.table(product);

//!DESTRUCTURING CON 2 O MAS OBJETOS

const produc = {
  name: "Tenis",
  price: 500,
  available: true,
};

const cliente = {
  name: "Alberto",
  premium: true,
};

const { name, price, available } = produc;
const { name: nombreUno, premium } = cliente;

console.log(name, price, available);
console.log(nombreUno, premium);

//!UNIR 2 O MAS OBJETOS
const games = {
  name: "GTA",
  price: 500,
  available: true,
};

const consolas = {
  name: "xbox",
  premium: true,
};

//const newObject = Object.assign(games, consolas); NO
const newObject = {
  games: { ...games },
  consolas: { ...consolas },
};
console.log(newObject);
