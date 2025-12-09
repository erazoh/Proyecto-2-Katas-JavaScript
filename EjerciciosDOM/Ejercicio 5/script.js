// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
// que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

//
body = document.body;

// haremos un titulo
let title = document.createElement("h2");
title.textContent = "Álbumes";
body.appendChild(title);

//crearemos una lista
let lista = document.createElement("ul");

//recorremos la lista albums y la gregamos directamente
let contador = 0;
albums.forEach((element) => {
  //creamos el elemento de la lista
  li = document.createElement("li");
  //creamos un elemto parrafo
  p = document.createElement("p");
  // le agregamos lo que recorre la lista
  p.textContent = element;
  //lo agregamos a lista
  li.appendChild(p)
  //agreamos el elemento imagen con un src que se va auto incrimentando
  img = document.createElement("img");
  img.src =`https://picsum.photos/300/200?random=${contador}`
  contador++;
  //agregamos la imagen al elemto lista y en css le damos formato
  li.appendChild(img);
  lista.appendChild(li);
});

//agregamos la lista al body
body.appendChild(lista);
