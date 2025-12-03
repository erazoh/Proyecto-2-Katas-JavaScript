//Ejercicio 29

    // Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.
    // Utiliza bucles para lograrlo e imprime el objeto final por consola. 

    const starWarsMovies = [
        { title: 'A New Hope', releaseYear: 1977 },
        { title: 'The Empire Strikes Back', releaseYear: 1980 },
        { title: 'Return of the Jedi', releaseYear: 1983 },
        { title: 'The Phantom Menace', releaseYear: 1999 },
        { title: 'Attack of the Clones', releaseYear: 2002 },
        { title: 'Revenge of the Sith', releaseYear: 2005 },
        { title: 'The Force Awakens', releaseYear: 2015 },
        { title: 'The Last Jedi', releaseYear: 2017 },
        { title: 'The Rise of Skywalker', releaseYear: 2019 },
        { title: 'Rogue One', releaseYear: 2016 },
        { title: 'Solo', releaseYear: 2018 }
        ];
    //Definimos las decadas

    let decadas= ["60's","70's","80's","90's","2000's"]; 
    
    //Creamos una varibale donde meteremos los datos resultantes
    let newList = [];
        let i =0;
    decadas.forEach(element => {
          //definmos el eobjeto que vamos a meter a la nueva lista
          a={decada : element, moviesInfo:[] , index : i++};
          //la agregamos a la nueva lista
          newList.push(a);
    });

    // for (const movie of starWarsMovies) {
    //     year = movie.releaseYear 
    //     switch(year){
    //         case year<1970 : {
    //          console.log(`La pelicula &{movie.title} es de los 60s`)   
    //         } case year<1980 : {
    //          console.log(`La pelicula &{movie.title} es de los 60s`)   
    //         } case year<1980 : {
    //          console.log(`La pelicula &{movie.title} es de los 60s`)   
    //         }
    //     }
    // }

    // console.log(newList)

    let year =1975 
        switch(year){
            case year<1970 : {
             console.log(`La pelicula &{movie.title} es de los 60s`)   
            } case year<1980 : {
             console.log(`La pelicula &{movie.title} es de los 60s`)   
            } case year<1980 : {
             console.log(`La pelicula &{movie.title} es de los 60s`)   
            }
        }