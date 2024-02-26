/* 
Užduotis 1
Naudodami while loop, konsolėje parašykite nuo 10 iki 1. 
*/

let nr = 10;
while (nr > 0) {
  console.log(nr);

  nr--;
}

/* 
Užduotis 2
Naudodami for loop, konsolėje parašykite nuo 10 iki 1.
*/

let nr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
for (let i = 0; i < nr2.length; i++) {
  console.log(nr2[i])
}

/*
Užduotis 3
Per mėnesį avių skaičius išauga 4 kartais. Naudodami while loop ir tris nurodytus kintamuosius, išveskite avių skaičių 12 mėnesių.

let numAvys = 4;
let numMenuo = 1;
let kiekMenSpausdinti = 12;

Štai kaip atrodys pirmos dvi eilutės:

Po 1 mėnesio(-ių) bus 16 avių!
Po 2 mėnesio(-ių) bus 64 avių!
*/

let numMenuo = 1;
let kiekMenSpausdinti = 12;
let numAvys = 4;

while (numMenuo <= kiekMenSpausdinti) {
  numAvys += numAvys * 3;
  console.log(`Po ${numMenuo} mėnesio(-ių) bus ${numAvys} avių!`);
  numMenuo += 1;
}

/*
Užduotis 4
Atlikite užduotį JS 03 su for loop
*/

/*
Užduotis 5
Hidroeleketrinėje yra 19 generatorių. Pirmi 4 gamina po 62 MW, likusieji 15 - po 124 MW. Inžinieriai paprašė tavęs sukurti du ciklus (loops), kurie vienas po kito įjungia visus 19 generatorių ir atspausdina generuojamų MW skaičių. Pirmiems 4 generatoriams panaudok while loop, likusiems 15 - for loop. Kiekviena spausdinama eilutė turėtų atrodyti taip (koreguojant currentGen ir totalMW):

Generatorius #1 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 124 MW!

Naudokis tokiais kintamaisiais:
let currentGen = 1;
let totalGen = 19;
let totalMW = 0;
*/

let currentGen = 1;
let totalGen = 19;
let totalMW = 0;

while (currentGen <= 4) {
  totalMW += 62;
  console.log(
    `Generatorius #${currentGen} pridejo, 62MW, viso generuojama ${totalMW}!`
  );
  currentGen += 1;
}

for (let currentGen = 5; currentGen <= 19; currentGen++) {
  totalMW += 124;
  console.log(
    `Generatorius #${currentGen} pridejo, 124MW, viso generuojama ${totalMW}!`
  );
}

/*
Užduotis 6
Keli pakeitimai JS 05 užduočiai. Veikia tik lyginiai generatoriai. Panaudok tik vieną for loop. Nepamiršk, kad pirmi 4 generatoriai gamina po 62 MW, o likusieji 15 - po 124 MW.

Konsolės formatas:

Generatorius #1 išjungtas.
Generatorius #2 įjungtas, pridėjo 62 MW, viso generuojama 62 MW!

Naudojami kintamieji:
let totalGen = 19;
let totalMW = 0;
*/

totalGen = 19;
totalMW = 0;

for (let i = 1; i <= 19; i++) {
  // arba   if (!(i % 2 == 0)){
  if (i % 2 == 1) {
    console.log("Generatorius išjungtas");
  } else if (i <= 4) {
    totalMW += 62;
    console.log(
      `Generatorius #${i} pridejo, 62MW, viso generuojama ${totalMW}!`
    );
  } else {
    totalMW += 124;
    console.log(
      `Generatorius #${i} pridejo, 124MW, viso generuojama ${totalMW}!`
    );
  }
}

/*
Užduotis 7
Papildyk while loop taip, kad tik lyginiai skaičiai būtų spausdinami. Tavo rezultatas turėtų būti lyginiai skaičiai nuo 10 iki 2 žemėjančia tvarka.

let num=10;
while (num > 0) {

console.log(num);

num--;
}
*/

let num = 10;
while (num > 0) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num--;
}

/*
Užduotis 8
Sukurk funkciją maxOf2, kuri priima du skaičius ir gražina didesnį skaičių. Nepamiršk galimybės, kad skaičiai bus lygūs. Tuo atveju gražink vieną iš skaičių.
*/

function maxOf2(a, b) {
  let suma = a + b;
  let daugyba = a * b;
  if (a == 0 || b == 0) {
    return suma;
  } else {
    return daugyba;
  }
}
