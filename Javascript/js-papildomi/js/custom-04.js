/* 01.
Sukurkite masyvą su dešimt augalų pavadinimų.
*/

let augalai = ['Narcizas', 'Zibute', 'Orchideja', 'Snieguole', 'Roze', 'Naslaite', 'Bijunas', 'Kardelis', 'Tulpe', 'Gvaizdikelis']
 
console.log(`${augalai.length} Augalu: ${augalai}`)

/* 02.
Atspausdinkite kiekvieną pirmo uždavinio augalą atskiroje eilutėje.
*/

for (let augalas of augalai) {
    console.log (augalas);
}

/* 03.
Atspausdinkite pirmo uždavinio kiekvieną augalą pradedant nuo paskutinio, ir baigiant pirmuoju. (atvirkščias ciklas).
*/

let atbulinis = augalai.reverse();
console.log(atbulinis)

/* 04.
Suskaičiuokite kiek pirmo uždavinio masyve yra žodžių trumpesnių nei 5 simboliai, ir kiek ilgesnių nei 7 simboliai.
*/
 
for ( augalas of augalai){
    if (augalas.length < 5) {
        console.log(augalas,' - zodis trumpesnis uz 5 simbolius.');
    } else if (augalas.length > 7){
        console.log(augalas, '- zodis, ilgesnis uz 7 simbolius.');
    }
}
