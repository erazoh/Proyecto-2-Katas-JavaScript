// Ejercicio 8
    // Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
    
    // Puedes usar este array para probar tu función: 
    const avengers = ["Hulk", "Thor", "Iron Man", "Captain A.", "Spiderman", "Captain M."];

    //Funcion para encontar el String mas largo
    function findLongestWord(stringList) {
        let nombre;
        for(i=1; i<avengers.length; i++){
            if(avengers.at(i-1).length>avengers.at(i).length){
                nombre = avengers.at(i-1)
            }
        }
        console.log(nombre);        
    }
    //Se prueba la funcion con el Array
    findLongestWord(avengers);