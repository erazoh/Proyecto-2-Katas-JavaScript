//EJercicio 10
    // Calcular un promedio es una tarea extremadamente común, así que prueba a implementar esa funcionalidad en la siguiente función.
    
    // Puedes usar este array para probarla:
    const numbers = [12, 21, 38, 5, 45, 37, 6];
    function average(numberList) {
        let suma = 0;
        let longitud = numberList.length;
        numberList.forEach(number => {
            suma=suma+number;            
        });
        if(longitud!==0){
            console.log(`El promedio es ${(suma/longitud).toFixed(2)}`)
        }else{
            console.log(`El array esta vacio`)
        }
    }

    //Se prueba la función
    average(numbers);