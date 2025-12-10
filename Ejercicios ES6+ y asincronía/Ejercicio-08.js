// Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

// URL de la documentación (para que indaguéis): https://thronesapi.com/

// Esta sería la URL final (la que deberéis utilizar para vuestra petición):

// https://thronesapi.com/api/v2/Characters


const data = [
  {
    "id": 0,
    "firstName": "string",
    "lastName": "string",
    "fullName": "string",
    "title": "string",
    "family": "string",
    "image": "string",
    "imageUrl": "string"
  }
];

const url = "https://thronesapi.com/api/v2/Characters"

//Accedemos a la API

fetch(url)
  .then(response => response.json())
  .then(data => informacion(data))
  .catch(error => console.error("Error en la petición:", error));

//Seleccionamos los elementos del html
const select = document.querySelector("#character-list")
const imagen = document.querySelector(".character-image")
const div = document.querySelector("div")


//Estilos CSS
select.style.width= "100%";
select.style.padding= "15px";
select.style.fontsize= "32px";
select.style.border= "2px solid #740000ff";
select.style.borderradius= "5px";
// // select.style.appearance= "none"; 
select.style.cursor= "pointer";
select.style.background = "white";
select.style.textAlign = "center";
imagen.style.width = "50vw"
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.padding = "20px";

//Funcion que va a interactuar con los datos
function informacion(data){
    //recorremos los elementos del json
    data.forEach(element => {
        //Creamos elemento option en el cual vamos a insertar los nombres de los personajes
        const opciones = document.createElement("option");
        //recojemos el nombre completo y lo ponemos como valor para seleccionar
        opciones.value = element.fullName;
        opciones.style.textAlign="center";
        opciones.textContent = element.fullName;
        //agregamos la opcion que creamos en el select
        select.appendChild(opciones)
        //recojemos la url de la imagen y la agregamos al surce del elemnto img
        imagen.src=element.imageUrl
    });
    //Creamos el evento en el que cuando cambie el valor selecionado en el select se dspliege otra imagen
    select.addEventListener('change', function() {
        
        const valorSeleccionado = this.value;
        //recupero la informacion que hay en el select y busco el objeto que haga match y lo extraigo en una constante
        const personaje = data.find(element => element.fullName === valorSeleccionado);
        //cambio el src del elemento img segun sea la url del personaje selecionado
        imagen.src=personaje["imageUrl"]
    });

}