// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

let btn = document.querySelector(".showme");
console.log(btn);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
    
    let pillado = document.querySelector("#pillado");
    console.log(pillado);

    // 1.3 Usa querySelector para mostrar por consola todos los p

    let parrafo = document.querySelectorAll("p");
    console.log(parrafo);
        // se saca uno por uno los elemntos del node array
        console.log("todos los parrafos en el documneto son:")
        parrafo.forEach(element => {
            console.log(element)
        }); 

// 1.4 Usa querySelector para mostrar por consola todos los elementos con
// 	la clase.pokemon
    
    let pokemon = document.querySelectorAll(".pokemon");
    console.log(pokemon);
        // se saca uno por uno los elemntos del node array
        console.log("todos los elementos con clase pokemon en el documneto son:")
        pokemon.forEach(element => {
            console.log(element)
        }); 

// 1.5 Usa querySelector para mostrar por consola todos los elementos con
// el atributo data-function="testMe".

    let data = document.querySelectorAll(`span[data-function="testMe"]`);
    console.log(data);
        // se saca uno por uno los elemntos del node array
        console.log(`todos los elementos con el atributo data-function="testMe" en el documneto son:`)
        data.forEach(element => {
            console.log(element)
        }); 

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
// data-function="testMe".
    console.log("El tercer personaje es:")
    console.log(data[2]);