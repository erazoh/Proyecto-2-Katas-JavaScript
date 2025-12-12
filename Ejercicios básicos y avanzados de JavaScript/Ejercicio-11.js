// Ejercicio 11 
    
    // Calcular promedio mezclado: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Es un poco locura, pero podremos ejercitar nuestra lógica con este ejercicio.

    // Puedes usar este array para probar tu función:
    const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];
    
    function averageWord(list) {
        let suma = 0;
        let contador = 0;
        //Se itera la lista
        for(i=0;i<list.length;i++){
            // Se compara el tipo de elemento si es numero ejecuta el codigo
           if(typeof list.at(i) === 'number'){
            suma = suma+list.at(i);
            contador++;
            };
        };
        //Si hay numeros con formato number en la lista se imprime el promedio
        if(contador !== 0){
            console.log(`El promedio es ${(suma/contador).toFixed(2)}`);
        }else{
            console.log(`La lista no tiene numeros formato number o esta vacia`);
        }
        
    }

    averageWord(mixedElements);