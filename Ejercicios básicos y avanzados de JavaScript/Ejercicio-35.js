//*Ejercicio 35

/*Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.
Considera el caso de múltiples mutantes con el mismo poder.*/


const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'teleportation' }, //telekinesis
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];

function findMutantByPower(mutants, power) {
    let poder = mutants.filter(mutants => mutants.power === power);
    if (poder.length>1){
        console.log(`Se han encontrado ${poder.length} mutantes con el poder ${power}` );
    }else if (poder.length=1 && poder.at(0) !== undefined ){
        console.log(`Se ha encontrado ${poder.length} mutante con el poder ${power}` );
    }else{
        console.log(`No se ha encontrado ningún mutante con el poder ${power}` );
    }
    return poder;
}


console.log(findMutantByPower(mutants, "teleportation"))