// Ejercicio 36

// Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.
// Averigua como hallar el año actual en tus cálculos.


const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
    edadActores =[]
    const añoActual = new Date().getFullYear()
    actors.forEach(element => {
        edad = añoActual-element.born;
        a = {name : element.name, age : edad};
        edadActores.push(a);
    });
    return edadActores;
}

console.log(calculateActorsAges(actors));
