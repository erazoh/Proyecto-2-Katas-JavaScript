// Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const inputText = document.querySelector('[data-function="toFilterStreamers"]');
inputText.value = "";
console.log(inputText)

//Creamos el evento input que recoje los valores en tiempo de lo que se escribe
inputText.addEventListener("input", () => {

    //ponemos en miscula para comparar con el array Streamers si esta lo que buscamos
    const minuscula = inputText.value.toLowerCase();
    const streamersFiltrados = streamers.filter(streamer => {
        if (minuscula !== "") {
            // imprime el valor del input
            console.log(minuscula)
            return streamer.name.toLowerCase().includes(minuscula); //si esta incluido return streamer
            
        }
        return false; //si no esta return false
    });
    //imprimimos los nombres del array que extrajimos
    streamersFiltrados.forEach(element => {
         console.log(`\t${element.name}`);
    });
   
});


