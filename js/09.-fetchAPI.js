const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/users";

//Promesas
const consultarAPI = () => {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
    });
};

//consultarAPI();

//?ASYNC/AWAIT
const consultarAPI2 = async () => {
  const res = await fetch(url);
  const data = await res.json();
};

consultarAPI2();

//?Multiples async/await

const consultarAPIS = async () => {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  const res2 = await fetch(url2);
  const data2 = await res2.json();
  console.log(data2);
};

//consultarAPIS();

//?MEJORA DE RENDIMIENTO
const consultarAPIS2 = async () => {
  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]);

  const resultado = await respuesta.json();
  const resultado2 = await respuesta2.json();

  console.log(resultado);
  console.log(resultado2);
};

consultarAPIS2();
