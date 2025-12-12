//Ejercicio 31
// Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

artists.forEach(element => {
    console.log(`El artista ${element.name} fue influenciado por:`);
    for (const x of element.influences) {
        console.log(`\t${x}`);
    }
    console.log(`\n`);
});

artists.forEach(element => {
    let artista = element.name
    for (const influencia of element.influences) {
        console.log(`El artista ${artista} fue influenciado por ${influencia}`);
    }
    console.log(`\n`);
});