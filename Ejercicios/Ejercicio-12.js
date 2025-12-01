// Ejercicio 12
    /*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.
    Pista: puedes generar un nuevo array y devolverlo.*/

    // Puedes usar este array para probar tu función:
    const duplicates = [
        'sushi',
        'pizza',
        'burger',
        'potatoe',
        'pasta',
        'ice-cream',
        'pizza',
        'chicken',
        'onion rings',
        'pasta',
        'soda'
    ];
    
    function removeDuplicates(list) {
        //se crea un nuevo array vacio
        const contenedor = [];
        //se itera la lista
        list.forEach(element => {
            //Se busca el elemento en la lista nueva si este no esta defino se ejecuta el codigo if
            if(contenedor.find((item) => item == element) === undefined){ 
                //se agrega al array el elemento no repetido
                contenedor.push(element);
            }            
        });
        console.log(contenedor);
        //se devuelve la nueva lista por si se quiere usar
        return contenedor;
    }

    //Se Prueba la función
    removeDuplicates(duplicates);