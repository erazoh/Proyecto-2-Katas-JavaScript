// Ejercicio 2

  //Punto 1

  const jedi = {nombre : "Luke Skywalker", edad : 19};
  jedi.edad=25;
  console.log("la edad de "+jedi.nombre+" es "+jedi.edad);

  //Punto 2

  let nombre = "Leia";
  let apellido = "Organa";
  let edad = 20;

  console.log("Soy "+nombre+" "+apellido+", tengo "+edad+" y soy la princesa de Alderaan");

  //punto 3

  const sable1 = {nombre: "Shoto de Yoda", precio: 1500 };
  const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};
  let precioTotal = sable1.precio + sable2.precio;

  console.log("el precio total por los sables es "+precioTotal)

  //Punto 4

  let precioBaseGobal = 10000;
  precioBaseGobal = 25000;

  console.log("el precio base a sido modificado a "+precioBaseGobal+" creditos.")

  const nave1 = {nombre: "Ala-X", precioBase: 50000 , precioFinal: 60000};
  const nave2 = {nombre: "Halcon Milenario", precioBase: 70000 , precioFinal: 80000};


  function precioFinalActualizado (precioBaseGlobal , precioBase, nombre){
    let suma = precioBaseGlobal+precioBase
    console.log("El precio final de "+ nombre +" ha sido modificado a "+ suma );
    return suma
  }

  nave1.precioFinal = precioFinalActualizado(precioBaseGobal,nave1.precioBase,nave1.nombre);
  nave2[precioFinal] = precioFinalActualizado(precioBaseGobal,nave2.precioBase,nave2.nombre);

 
