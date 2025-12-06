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
    decadas.forEach(element => {
          //definmos el eobjeto que vamos a meter a la nueva lista
          a={decada : element, moviesInfo:[] };
          //la agregamos a la nueva lista
          newList.push(a);
    });

    starWarsMovies.forEach(element => {
        let year = element.releaseYear;
        if(year<1970){
            newList[0].moviesInfo.push(element);
        }else if(year<1980){
            newList[1].moviesInfo.push(element);
        }else if(year<1990){
            newList[2].moviesInfo.push(element);
        }else if(year<2000){
            newList[3].moviesInfo.push(element);
        }else{
             newList[4].moviesInfo.push(element);
        }
           });

newList.forEach(element => {
    console.log(element);
});