/*
Uždavinių sprendimui nenaudoti, masyvų, ciklų ir savo parašytų funkcijų. JavaScript funkcijas žinoma naudokite (pageidautina).
Visi random generuojami skaičiai turi būti sveikieji.
*/

/* 01.
Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(-ų)".
*/

 let vardas = 'Kristina';
 let pavarde = 'Kazlauskaite';
 let gimimo_metai = 1999;
 let dabar = 2024

console.log()

 console.log(`As esu ${vardas} ${pavarde}. Man yra ${dabar-gimimo_metai} metai`);

/* 02.
Naudokite funkciją Math.random(). Sukurkite du kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 4. Didesnę reikšmę padalinkite iš mažesnės. Atspausdinkite rezultatą jį suapvalinę iki 2 skaičių po kablelio.
*/

let x = Math.random()*4
let y = Math.random()*4
console.log(x)
console.log(y)

if(x < y ){
    console.log((y / x).toFixed(2),'x yra mazesnis uz y')
} 
else if(x > y){
    console.log((x / y).toFixed(2),'x yra didesnis uz y');
}

/* 03.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius ir naudodamiesi funkcija Math.random() jiems priskirkite atsitiktines reikšmes nuo 0 iki 25. Raskite ir atspausdinkite kintąmąjį turintį vidurinę reikšmę.
*/

let x1 = Math.floor(Math.random() * 25);
let y2 = Math.floor(Math.random() * 25);
let z2 = Math.floor(Math.random() * 25);
console.log(y2)

/* 04.
Įvedami skaičiai - kr1, kr2, kr3 – kraštinių ilgiai, trys kintamieji (naudokite ​Math.random()​ funkcija nuo 1 iki 10). Parašykite JavaScript programą, kuri nustatytų, ar galima sudaryti trikampį ir atsakymą atspausdintų. 
*/


let kr1 = Math.floor(Math.random()*10)+1
let kr2 = Math.floor(Math.random()*10)+1
let kr3 = Math.floor(Math.random()*10)+1
console.log(kr1,kr2,kr3)

if (kr1 > kr2 + kr3 || kr2 > kr1 + kr3 || kr3 > kr1 + kr2) {
    console.log('Netinkami dydžiai')
}
else {
    console.log('Tinkami dydžiai')
}

/* 05.
Sukurkite keturis kintamuosius ir ​Math.random()​ funkcija sugeneruokite jiems reikšmes nuo 0 iki 2. Suskaičiuokite kiek yra nulių, vienetų ir dvejetų.
*/

let k1 = Math.floor(Math.random()*3)
let k2 = Math.floor(Math.random()*3)   //nebaigta
let k3 = Math.floor(Math.random()*3)
let k4 = Math.floor(Math.random()*3)

/* 06.
Naudokite funkcija Math.random(). Atspausdinkite 3 skaičius nuo -10 iki 10. Skaičiai mažesni už 0 turi būti  laužtiniuose skliaustuose [], 0 -  (), didesni už 0 {}.
*/

 m1 = Math.floor(Math.random()*20)-10
 m2 = Math.floor(Math.random()*20)-10
 m3 = Math.floor(Math.random()*20)-10

 if (m1<0){
 console.log(`[${m1}]`)
 }else if (m1==0) {
console.log(`(${m1})`);
 }else {
 console.log(`{${m1}}`)
 }

if (m2 < 0) {
  console.log(`[${m2}]`);
} else if (m2 == 0) {
  console.log(`(${m2})`);
} else {
  console.log(`{${m2}}`);
}

if (m3 < 0) {
  console.log(`[${m3}]`);
} else if (m3 == 0) {
  console.log(`(${m3})`);
} else {
  console.log(`{${m3}}`);
}

/* 07.
Įmonė parduoda žvakes po 1 EUR. Perkant daugiau kaip už 1000 EUR taikoma 3 % nuolaida, daugiau kaip už 2000 EUR - 4 % nuolaida. Parašykite programą, kuri skaičiuos žvakių kainą ir atspausdintų atsakymą kiek žvakių ir kokia kaina perkama. Žvakių kiekį generuokite ​Math.random()​ funkcija nuo 5 iki 3000.
*/

let zvake =1
let kiekis = Math.floor(Math.random() * 3000+5) 

if (kiekis*zvake >1000) {
  console.log(kiekis-(kiekis*0.03));
} else if (kiekis * zvake > 2000) {
  console.log(kiekis - (kiekis * 0.04));
}

/* 08.
Naudokite funkciją Math.random(). Sukurkite tris kintamuosius su atsitiktinėm reikšmėm nuo 0 iki 100. Paskaičiuokite jų aritmetinį vidurkį. Tada aritmetinį vidurkį atmetus tas reikšmes, kurios yra mažesnės nei 10 arba didesnės nei 90. Abu vidurkius atspausdinkite. Rezultatus apvalinkite iki sveiko skaičiaus.
*/



/*
let xx1,xx2,xx3 = Math.floor(Math.random() *100)  //ne taip 

if (xx1 <0){  
console.log(`vidurkis ${xx1+xx2+xx3/3}`)
}else if (xx1<10 ||xx1>90){
    console.log(`antras vidurkis ${xx1 < 10 || xx1 > 90}`);
}
*/

/* 09.
Padarykite skaitmeninį laikrodį, rodantį valandas, minutes ir sekundes. Valandom, minutėm ir sekundėm sugeneruoti panaudokite funkciją Math.random(). Sugeneruokite skaičių nuo 0 iki 300. Tai papildomos sekundės. Skaičių pridėkite prie jau sugeneruoto laiko. Atspausdinkite laikrodį prieš ir po sekundžių pridėjimo ir pridedamų sekundžių skaičių.
*/



/* 10.
Naudokite funkciją Math.random(). Sugeneruokite 6 kintamuosius su atsitiktinėm reikšmėm nuo 1000 iki 9999. Atspausdinkite reikšmes viename string'e, išrūšiuotas nuo didžiausios iki mažiausios, atskirtas tarpais. Naudoti ciklų ir masyvų NEGALIMA.
*/

    let num1 = Math.round(Math.random() * 8999+1000);
    let num2 = Math.round(Math.random() * 8999+1000);
    let num3 = Math.round(Math.random() * 8999+1000);
    let num4 = Math.round(Math.random() * 8999+1000);
    let num5 = Math.round(Math.random() * 8999+1000);
    let num6 = Math.round(Math.random() * 8999+1000);
    
    function kazkas(a,b,c,d,e,f){
        console.log(a,b,c,d,e,f);  //nebaigta
    }

kazkas(num1,num2,num3,num4,num5,num6);


