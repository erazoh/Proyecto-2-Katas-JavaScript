// Ejercicio 7
    // Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
    
    function greaterNumber(numberOne , numberTwo) {
        if(numberOne>numberTwo){
            return console.log(`el numero ${numberOne} es mayor que ${numberTwo}`);
        }else if(numberOne<numberTwo){
            return console.log(`el numero ${numberTwo} es mayor que ${numberOne}`);
        }else{
            return console.log("Son Iguales");
        }
    }
