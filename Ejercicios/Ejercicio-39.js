//*Ejercicio 39

// Dado el siguiente código usa **forof** y **forin** para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito.
// Para ello recorre la lista de usuarios y usa **forin** para recoger el nombre de los sonidos que el usuario tenga como favoritos.
// Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.


const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

  
    const newObject = {};
    for (const element of users) {
        for (const sound in element.favoritesSounds) {
            if (newObject[sound]) {
            newObject[sound]++; 
            } else {
            newObject[sound] = 1; 
            }
        }
    }
    console.log(newObject)

    // const contador = {};
    // for (const element of users) {
    //     for (const sound in element.favoritesSounds) {
    //         contador[sound] = (contador[sound] || 0 ) + 1;
    //     }
    // }
    // console.log(contador)

    

    for (const key in newObject) {
        if (newObject[key]>1){
            console.log (`\tEl sonido ${key} se repite en favoritos ${newObject[key]} veces`)
        }else{
            console.log (`\tEl sonido ${key} se repite en favoritos ${newObject[key]} vez`)
        }
        
    }