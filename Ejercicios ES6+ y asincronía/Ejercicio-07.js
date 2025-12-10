// 7.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando
// .filter() y usa .reduce() para conseguir la media de sus .score.
// La función .find() también podría ayudarte para el contrar el genero 'RPG' en el
// array .gender.

const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG'], score: 10},
]
//Array de objetos de genero RPG
const juegosRPG = videogames.filter(juego => {
    //si encuentras el elemento que coincida con RPG y no es indefinda devuelve el juego
    if(juego.genders.find(element => element == 'RPG') !== undefined){
        return juego
    }
    //rotarno falso y no lo guarda
    return false
})
console.log(juegosRPG)

//promedio de puntaje de los jugeos RPG
const mediaJuegosRPG =juegosRPG.reduce((contador,score)=> contador+score.score,0)/juegosRPG.length
console.log(mediaJuegosRPG)
