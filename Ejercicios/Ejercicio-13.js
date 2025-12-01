// Ejercicio 13

    /*Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.*/

    //Puedes usar este array para probar tu función:
    const names = ['Peter', 'Steve', 'Tony', 'Natasha', 
        'Clint', 'Logan', 'Xabier', 'Bruce', 'Peggy', 'Jessica','Marc'];

    function nameFinder(name, nameList) {
        
        if (nameList.find(nombre => nombre == name) != undefined){
            let index = nameList.findIndex(nombre => nombre == name);
            console.log(`Esta buscando el nombre ${name} y se encuntra en el index ${index}`);
            return true,index; 
        }else{
            console.log(`No se encontro el nombre`)
            return false;
        }
    }
    let nombre_a_buscar = 'Jessica';
    let prueba = nameFinder(nombre_a_buscar,names);

  