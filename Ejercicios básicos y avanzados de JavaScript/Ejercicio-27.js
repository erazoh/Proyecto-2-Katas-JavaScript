// Ejercicio 27  
    /*Utiliza un bucle para encontrar la serie de dibujos animados más antigua en el array y guarda su nombre en una variable.
    Imprime el nombre por consola.*/

const cartoons = [
  { name: 'Bugs Bunny', debut: 1938 },
  { name: 'SpongeBob SquarePants', debut: 1999 },
  { name: 'Tom and Jerry', debut: 1940 },
  { name: 'Mickey Mouse', debut: 1928 },
  { name: 'Scooby-Doo', debut: 1969 },
  { name: 'The Flintstones', debut: 1960 },
  { name: 'Batman: The Animated Series', debut: 1992 },
  { name: 'The Simpsons', debut: 1989 },
  { name: 'Pokémon', debut: 1997 },
  { name: "Dexter's Laboratory", debut: 1996 }
];


// *Se ordena con el metodo sort. Donde se compara cada propiedad y la ordena
    // cartoons.sort(function (a, b) {
    //   if (a.debut > b.debut) {
    //     return 1; //* cartoons(index=a) muevete hacia la derecha
    //   }
    //   if (a.debut < b.debut) {
    //     return -1; //* cartoons(index=a) muevete hacia la izquierda
    //   }
    //   return 0; //* cartoons(index=a) quedate donde estas
    // });

    // console.log(cartoons.at(0).name)
  
//* Usando el metedo de ordenamiento de burbuja
    // for (let i = 0; i < cartoons.length - 1; i++) {
    //     for (let j = i + 1; j < cartoons.length; j++) {
    //         if (cartoons[j].debut < cartoons[i].debut) {
    //             let temp = cartoons[i];
    //             cartoons[i] = cartoons[j];
    //             cartoons[j] = temp;
    //         }
    //     }
    // }
    // console.log(cartoons.at(0).name)

//* Usando un bucle for solamente
    let peliVieja = cartoons.at(0); //* Se inicializa ponendo el primer objeto del array "padre"
    for (const cartoon of cartoons) { 
        if(cartoon.debut < peliVieja.debut){
            peliVieja = cartoon;
        }    
    }
    //imprimimos en pantala
    console.log(`La peli mas vieja del array es ${peliVieja.name}`);