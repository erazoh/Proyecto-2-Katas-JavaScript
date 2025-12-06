// *Ejercicio 30

// Dada una lista de canciones, clasifícalas en un objeto donde las claves sean los géneros y los valores sean arrays de canciones de ese género.
// Utiliza bucles para estructurar este objeto e imprime el resultado por consola.  

const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];



//  Se Crea una lista para meter los generos que existen
let generos = []
// Recorrer la lista y ver que generos existen si no estan en la lista vacia se agrega
tracks.forEach(element => {
    if(generos.find(genero => genero === element.genre) === undefined){ 
        generos.push(element.genre);    
    }
});

//Se crea una lista donde vamos a meter el nuevo arreglo
let newList = [];
//Se recorre la lista
generos.forEach(genero => {
    a={ genero : genero, canciones : []}; //se crea el objeto diccionario que se va a agregar a newlist

    tracks.forEach(element => {     //Se recorre la lista tracks y mira que elementos hay
                                    //si son iguales al genero que se busca, los agrega al diccionario 
        if(element.genre === genero ){
            a.canciones.push(element.title);
        };
    });
    newList.push(a);
});

console.log(newList);