//Ejercicio 14
    /*Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
    Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...
    Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.
    */

    //Puedes usar este array para probar tu función:
    const words = ['code','repeat','eat','sleep','code',
        'enjoy','sleep','code','enjoy','sleep','code'];
    
    function repeatCounter(list) {
        const provisional = [];
        list.forEach(element => {
            if(provisional.find((item) => item == element) == undefined) {
                provisional.push(element);
            }
        });
        /* //Funciona 
        for (const palabra of provisional) {
            let contador = 0;
            list.forEach(element => {
                if(palabra==element){
                    contador++;
                }
            });
            console.log(`${palabra}: ${contador}`)
        }
        */
       // Esta es otra opción
        provisional.forEach(element =>{
            let contador = list.filter( palabra => palabra == element).length;
            console.log(`${element}: ${contador}`);
        })
    }
    repeatCounter(words);