document.title = 'clase de Js';
console.log(document.title);

const h1 = document.createElement("h1");

h1.textContent = "Mi texto desde Js";
document.body.appendChild(h1)

const parrafo = document.createElement("p");
parrafo.textContent = "Mi parrafo desde Js";
document.body.appendChild(parrafo);