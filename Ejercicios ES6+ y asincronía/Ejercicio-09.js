// Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.
// Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.
// Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.
// Documentación: https://pokeapi.co/
// URL: https://pokeapi.co/api/v2/pokemon/1
// Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

//*Este el el proptipo de datos que va a traer la API
const prototipoData = { 
    abilities: "array(2 objects)",
    base_experience : "number",
    cries: {
        latest: 'url', 
        legacy: 'url',
        },
    forms:"array(1 object)",
    game_indices: "array(20 objects)",
    height:"number",
    held_items:"array(1 object)",
    id:"number",
    is_default:"boolean",
    location_area_encounters: "url",
    moves:"array(69 objects)",
    name:"string",
    order:"number",
    past_abilities: "array(1 object)",
    past_types: "array(0 object)",
    species:{
        name: 'string', 
        url: 'url api',
        },
    sprites: { //*Primera llave a la que vamos a ingresar
        back_default: 'url imagen png', 
        back_female: null, 
        back_shiny: 'url imagenpng',
        back_shiny_female: null, 
        front_default: 'url imagen png', 
        front_female:null,
        front_shiny:"url imagen png",
        front_shiny_female: null,
        other: {//*Segunda llave a la que vamos a ingresar
            dream_world: {//*Tercera llave a la que vamos a ingresar
                front_default: "URL IMAGEN SVG",//*Cuarta llave a la que vamos a ingresar y Tomamosel valor ruta URL de la imagen SVG
                front_female:null,
                }, 
            home: {
                front_default:"url imagen png",
                front_female:null,
                front_shiny:"url imagen png",
                front_shiny_female:null,
                }, 
            officialArtwork: {
                front_default:"url imagen png",
                front_shiny:"url imagen png",
                }, 
            showdown: {
                back_default:"url imagen gif",
                back_female:null,
                back_shiny:"url imagen gif",
                back_shiny_female: null,
                front_default: "url imagen gif",
                front_female: null,
                front_shiny:"url imagen gif",
                front_shiny_female:null
                },
            },
        versions: {
            generationi: "{…}",
            generationii: "{…}",
            generationiii: "{…}",
            generationiv: "{…}",
            generationv: "{…}"
            },
        },
    stats:"array(6 objects)",
    types:"array(2 objects)",
    weight:"number",

};


//Recojemos Elementos del html y si no estan los creamos
let imagen = document.querySelector(".random-image")
let h2 = document.createElement("h2")

//Creamos la variable number que es un numero aleatorio entre 1 y 150
let number = (Math.floor(Math.random()*150.)+1)
//Agrega el numero a la url, el numero indica el pokemon
let url = `https://pokeapi.co/api/v2/pokemon/`+number
let body = document.body


//Estilos CSS
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems= "center";
body.style.justifyContent = "center";
// // body.style.backgroundImage = "url('https://img.freepik.com/vector-gratis/fondo-plano-estilo-comico_23-2148830135.jpg')";
// // body.style.backgroundPosition = "center";
// // body.style.backgroundSize = "cover"
// // body.style.backgroundRepeat = "no-repeat"
body.style.backgroundColor = "azure"
h2.style.fontFamily="Blippo, fantasy";
h2.style.fontSize = "35px";
h2.style.letterSpacing ="0.15em";
imagen.style.width = "300px";
imagen.style.height = "300px";
imagen.style.transition = 'opacity 3s';
imagen.style.opacity = '0';
window.getComputedStyle(imagen).opacity;
imagen.style.opacity = '1';


//Accedemos a la API
fetch(url)
    .then(response => response.json())
    .then(data => informacion(data))
    .catch(error => console.error("Error en la petición:", error));

//creamos la funcion que va a intercatuar con los datos
function informacion(data) { 
    //Obtener la URL de la imagen SVG //*para ver la ruta mirar arriba
    info = data.sprites.other.dream_world.front_default
    imagen.src = info
    h2.textContent = data.name.toUpperCase()
    body.insertBefore(h2,imagen)
}