// Ejercicio 33

// Desarrolla una función que reciba un país por parámetro y devuelva su capital.
// Utiliza un objeto para almacenar los países y sus capitales.
// La función debe manejar casos en los que el país no esté en la lista, devolviendo un mensaje adecuado.


const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};





function getCapital(country) {
    // newList = [];
    esta = false;
    for (const pais in capitals) {
        // a={pais:pais , capitales : capitals[pais]}
        // newList.push(a);
        if (pais == country){
            console.log(`El pais ${pais} tiene como capital ${capitals[pais]}`);
            esta=true;
        }
    };
    if (esta === false){
            console.log("No esta el pais")
        }
}

getCapital("Ireland");
