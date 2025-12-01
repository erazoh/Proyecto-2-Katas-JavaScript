// Ejercicio 22
    /*Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.
    Recuerda no usar frutas duplicadas.
    Finalmente, imprime el array resultante.*/

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];


let indexFruits=0;
for(i=0;i<foodSchedule.length;i++){
    if(!foodSchedule.at(i).isVegan){   
        let prueba;
        do{
            foodSchedule[i] = {name: fruits[indexFruits], isVegan : true}
            prueba = foodSchedule.find(fruta => fruta === fruits[indexFruits]);
            indexFruits++;
        }while(prueba !== undefined){};
    };
};

console.log(foodSchedule);