//Ejercicio 42

// Crea una función llamada **swap** que reciba un array y dos parametros que sean indices del array.
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
// Retorna el array resultante.



const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

//se hace algo parecido al metodo burbuja con for 

function swap(array,index1,index2){
    longitud = array.length;
    if(index1 <longitud && index2<longitud && index1>=0 && index2 >=0){
        temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;
        return array;
    }else{
        console.log(`Que estas haciendo???!!!!!\n\tEscoje un indice valido`)
    }
}

console.log(swap(fantasticFour,5,1))