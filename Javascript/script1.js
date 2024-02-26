console.log("Karolis 30m");
console.log("patinka programuoti");
console.log(
  " Peršokę per valką?\n Kelio vidury,\n Skubame į talką\n Vyrai keturi.\n Sunkios varpos svyra"
);

console.log("");
console.log("***");
console.log("* *");
console.log("***");
console.log("");
console.log("*");
console.log("**");
console.log("***");
console.log("");
console.log(" labas rytas \n laba diena \n labas vakaras");

console.log("");
console.log("+--------+--------+");
console.log("| Vardas | Amzius |");
console.log("+--------+--------+");
console.log("| Tomas  |   24   |");
console.log("| Jonas  |   26   |");
console.log("| Justė  |   25   |");
console.log("+--------+--------+");
console.log("");

let vardas = "Karolis";
let pavarde = "Kesminas";
let amzius = 30;
let svoris = 99;
let ugis = 1.8;
let issilavinimas = "kalnenai";
let kodas = 1234;
let kursas = "Javascript programavimas";
let atsiskaityti_kreditai = 4;

console.log("vardas:" + vardas);
console.log("pavarde:" + pavarde);
console.log("amzius:" + amzius);
console.log("ugis:" + ugis);
console.log("svoris:" + svoris);
console.log("issilavinimas:" + amzius);
console.log("kodas:" + kodas);
console.log("kursas:" + kursas);
console.log("atsiskaityti kreditai:" + atsiskaityti_kreditai);

const pavadinimas = "Mazeikiai";
const valstybe = "Lietuva";
const apskritis = "Telsiu apskritis";
const data = "1991";
const meras = " jonavicius";
const plotas = "100kv/km";
const gyv_skaicius = "3000";

console.log(pavadinimas);
console.log(valstybe);
console.log(apskritis);
console.log(data);
console.log(meras);
console.log(plotas);
console.log(gyv_skaicius);

vardas = " Karolis";
console.log("mano vardas yra" + vardas);

let akademine_grupe = " 5z";
let vidurkis = " 8";
console.log("akademine grupe:" + akademine_grupe);
console.log("vidurkis;" + vidurkis);

let pasisveikinimas = "labaaaas";
console.log(
  pasisveikinimas +
    pasisveikinimas +
    pasisveikinimas +
    pasisveikinimas +
    pasisveikinimas
);

paavadinimas = "suo ";
amzius = "4m. ";
let spalva = "juoda";
svoris = "9kg";

console.log(
  paavadinimas + amzius + " turi " + spalva + " kaili ir sveria " + svoris
);

let skaiciukas = "39";
console.log(skaiciukas + skaiciukas + skaiciukas + skaiciukas + skaiciukas);

let skaiciukas1 = "39 ";
console.log(
  skaiciukas1 + skaiciukas1 + skaiciukas1 + skaiciukas1 + skaiciukas1
);

let sim = "$";
console.log(
  sim + sim + sim + "\n" + sim + " " + sim + "\n" + sim + sim + sim + "\n"
);

let num4 = 2;
let num5 = 4;

let num6 = 1;
let num7 = 2;
let num8 = 3;
let num9 = 4;
let num11 = 5;
let num12 = 6;

console.log((num6 + num7 + num8 + num9 + num11 + num12) / 6);

let n1 = 3;
let n2 = 6;

console.log(n1 + "+" + n2 + "=" + (n1 + n2));
console.log(n1 + "-" + n2 + "=" + (n1 - n2));
console.log(n1 + "*" + n2 + "=" + n1 * n2);
console.log(n1 + "/" + n2 + "=" + n1 / n2);

console.log(-1 + 4 * 6);
console.log((35 + 5) % 7);
console.log(14 + (-4 * 6) / 12);
console.log(2 + (15 / 6) * 1 - (7 % 2));

let n5 = 7;
console.log(n5 * 1);
console.log(n5 * 2);
console.log(n5 * 3);
console.log(n5 * 4);
console.log(n5 * 5);
console.log(n5 * 6);
console.log(n5 * 7);
console.log(n5 * 8);
console.log(n5 * 9);
console.log(n5 * 10);

let n3 = 13;
console.log();
console.log(13);
console.log(Math.floor(n3 / 10));
console.log(n3 % 10);
console.log(1 + 3);

let i = Math.round(Math.random() * 50);

console.log(i);

let a = Math.ceil(Math.random() * 10);

console.log(a);

// gauti atsitiktini skaiciu nuo 10 iki 50  //
let b = Math.floor(Math.random() * (50 - 10 + 1) + 10);

let age = 18;
if (age === 18) {
  console.log(true);
} else if (age < 6) {
  console.log("young");
} else {
  console.log(false);
}

let points = 110;
let type = points > 100 ? "gold" : "silver";
console.log(type);

if (points > 100) {
  type = "gold";
} else {
  type = "silver";
}

console.log(type);

let f = 6;
let s = 8;
let t = 10;

console.log(f == s);
console.log(s == t);
console.log(s > t * 2);
console.log(f % 2 == 0);
console.log(s % 2 !== 0);
console.log(t > 0);
console.log(f < 0);
console.log(s % 4 == 0);
console.log(t % 8 == 0);

amzius = 100;
check = amzius >= 18 ? "tu gali balsuoti" : "tu negali balsuoti";
console.log(check);

f = 4;
s = 1;
t = 10;
x = 2;

check = (f + s + t + x) / 4 >= 5 ? "teigiamas" : "neigiamas";
console.log(check);

f = 10;
x = 12;
if (f % 5 == 0) {
  console.log(
    f + "*1=" + f * 1,
    f + "*2=" + f * 2,
    f + "*3=" + f * 3,
    f + "*4=" + f * 4,
    f + "*5=" + f * 5
  );
}

if (f % 2 == 0) {
  console.log(`skaicius: ${f}, kvadratu ${f ** 2}
  padalinta is dvieju: ${f / 2}`);
}

if (f % 7 !== 0) {
  console.log(
    f + "+x=" + (f + x),
    f + "-x=" + (f - x),
    f + "*x=" + f * x,
    f + "/x=" + f / x
  );
}

a = 1;
b = 7;
c = 9;

if (a > b) {
  console.log(true);
} else {
  console.log(false);
}

if (b < c) {
  console.log(true);
} else {
  console.log(false);
}

if (c > a) {
  console.log(true);
} else {
  console.log(false);
}

if (a == b) {
  console.log(true);
} else {
  console.log(false);
}

if (b == c) {
  console.log(true);
} else {
  console.log(false);
}

if (a == 0) {
  console.log(true);
} else {
  console.log(false);
}

if (b <= 0) {
  console.log(true);
} else {
  console.log(false);
}

if (c >= 0) {
  console.log(true);
} else {
  console.log(false);
}

x = 9;
if (x == 10) {
  console.log("Puiku");
} else if (x >= 9) {
  console.log("labai gerai");
} else if (x >= 7) {
  console.log("gerai");
} else if (x >= 5) {
  console.log("patenkinamai");
} else if (x < 5) {
  console.log("neislaikyta");
}

// >>>>>

x = 3;

if (x % 2 == 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}

if (x % 7 == 0) {
  console.log("dalijasi is 7");
} else {
  console.log("nesidalyja is 7");
}

let tipas = "script.js";
if (tipas.endsWith(".js")) {
  console.log("javascript");
} else {
  console.log("netinkamas failas");
}

x = 2;

if (x % 2 == 0) {
  console.log("lyginis");
} else if (x % 5 == 0) {
  console.log("nesidalyja is 5");
} else if (x == 3) {
  console.log("lygus 3");
} else {
  console.log("klaida");
}

a = 9;
b = 18;
c = 9;

if (a == b) {
  console.log("abu skaiciai lygus");
} else if (a == c) {
  console.log("abu skaiciai lygus");
} else if (c > a) {
  console.log("trecias skaicius didesnis uz pirma");
} else if (b == c * 2) {
  console.log("antras skaičius lygus dvigubai trečio skaičiaus reikšmei?");
} else if (a % 3 == 0) {
  console.log("pirmas dalinasi is 3");
} else {
  console.log("klaida!!!");
}

x = 9;
y = 6;
z = 0;

if (x > y && x > z) {
  console.log("pirmas didziausias");
} else if (y > x && y > z) {
  console.log("antras didziausias");
} else if (z > y && z > x) {
  console.log("trecias didziausias");
}

x = 5;
y = 6;
z = 3;

if (x < y && x < z) {
  console.log("pirmas maziausias");
} else if (y < x && y < z) {
  console.log("antras maziausias");
} else if (z < y && z < x) {
  console.log("trecias maziausias");
}

x = 3;
y = 3;
z = 8;

check = (x + y + z) / 3;
if (check >= 8 && check < 10) {
  console.log("vidurkis 8-10");
} else if (check >= 5 && check < 8) {
  console.log("vidurkis 8-10");
} else if (check < 5) {
  console.log("vidurkis <5");
}

x = 2;
y = 12;

if (x == 0 || x > y) {
  console.log("pirmas skaičius yra didesnis už antrąjį arba yra lygus 0");
}

if (y > x || y == 5) {
  console.log("antras skaičius yra didesnis už pirmąjį arba yra lygus 5;");
}
if (x > y && x == 20) {
  console.log("ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20");
}
if (y > x && y < 100) {
  console.log("antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100");
}

const h = 8;
let duonah = 19;
let darbsk = 90;
let duonasav = 1;
let duonakaina = 1.5;
let uzs = 550;

console.log("per viena darbo diena iskepti kepalai:", h * duonah * darbsk);

console.log(" pelnas:", (duonakaina - duonasav) * (h * duonasav * darbsk));

if (h * duonasav * darbsk - uzs > 0) {
  console.log("uzsakymas ivygdytas:", h * duonasav * darbsk - uzs);
} else {
  console.log("uzsakymas neivygditas:", h * duonasav * darbsk - uzs);
}
console.log("uzsakymo pelnas", (duonakaina - duonasav) * uzs);

let laimejimas = 3;

switch (laimejimas) {
  case 1:
    console.log("vartotojas laimėjo vandens.");
    break;
  case 2:
    console.log("vartotojas laimejo limonada");
    break;
  case 3:
    console.log("vartotojas laimėjo arbata.");
    break;
  case 4:
    console.log("vartotojas laimėjo kava.");
    break;
  default:
    console.log("klaida");
}

x = 1;
y = 4;
z = 5;

switch (x) {
  case 1:
    console.log(x + y + z);
    break;
  case 2:
    console.log(y * z);
    break;
  case 3:
    console.log(x ** 2);
    break;
  default:
    console.log("Klaida!!!");
}

let kintamasis = "575";

switch (kintamasis) {
  case "573":
    console.log("preiga neprijama");
    break;
  case "574":
    console.log("puslapis nerastas");
    break;
  case "575":
    console.log("575 klaida");
    break;
  default:
    console.log("Klaidos nera!!!");
}

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log()
for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}

console.log()

for (let i = 1; i <= 20; i += 3) {
  console.log(`[${i}]`);
}
console.log();
for (let i = 1; i <= 20; i++) {
  if (i % 4 == 0) {
    console.log(i);
  }
}
console.log();

for (let i = 1; i <= 20; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}
console.log();

let pradzia = 19;
let pabaiga = 30;

if (pradzia < pabaiga) {
  for (let i = pradzia; i <= pabaiga; i++) {
    console.log(i, i ** 2);
  }
}

pradzia = 1;
pabaiga = 40;

for (let i = pradzia; i <= pabaiga; i++) {
  if (i % 3 == 0 || i % 8 == 0) {
    console.log(i);
  }
}

let result = 0;
for (let i = 0; i < pradzia; i++) {
  result += pabaiga;
}
console.log(result);

s = 9;
x = 11;
for (let i = 0; i < 100; i++) {
  if (s * x == i) {
    console.log(i);
  }
}

suma = 0;

for (let i = 0; i < 100; i++) {
  suma += 1;
}
console.log("atsakymas", suma);

suma = 0;
for (let i = 20; i < 50; i++) {
  if (i % 2 == 0) {
    suma += i;
  }
}
console.log(suma);
suma = 0;
for (let i = 20; i < 50; i += 2) {
  suma += i;
}

console.log("lyginiu suma", suma);

suma = 0;
for (let i = 1; i < 100; i++) {
  suma += 1;
}
console.log("atsakymas", suma);

suma = 0;
for (let i = 31; i <= 59; i++) {
  if (i % 3 == 0) {
    suma += i;
  }
}

console.log("nelyginiu suma", suma);

suma = 0;
for (let i = 3; i <= 1000; i++) {
  if (i % 3 == 0 || i % 5 == 0) {
    suma += i;
  }
}
console.log("1000 suma", suma);

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("Fizz-Buzz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 == 0) {
    console.log("fizz");
  } else {
    console.log(i);
  }
}
//ciklas
const norimas_kiekis = 10;
let pirmas = 1;
let antras = 1;
let trecias;

console.log(pirmas);
console.log(antras);

for (let i = 2; i < norimas_kiekis; i++) {
  trecias = pirmas + antras;
  pirmas = antras;
  antras = trecias;
  console.log(trecias);
}
let skaic = 1;
while (skaic <= 20) {
  console.log(skaic);
  skaic++;
}

skaic = 1;
while (skaic <= 50) {
  if (skaic % 2 == 0) {
    console.log("lyginis", skaic);
  } else if (skaic % 2 !== 0) {
    console.log("nelyginis", skaic);
  } else {
    console.log(skaic);
  }
  skaic++;
}

// mokytojo sprendimas
skaic = 1;
while (skaic <= 50) {
  if (skaic % 2 == 0) {
    console.log("lyginis", skaic);
  } else {
    console.log("nelyginis", skaic);
  }
  skaic++;
}

// /// /// /// //
skaic = 25;
while (skaic <= 50) {
  if (skaic % 3 == 0) {
    console.log(`skaicius ${skaic} dalinasi is 3`);
  } else {
    console.log(skaic);
  }
  skaic++;
}

z = 1;
while (!(z % 3 == 0 && z % 5 == 0)) {
  console.log(z);
  z++;
}

while (true) {
  if (z % 3 == 0 && z % 5 == 0) {
    break;
  }
  console.log(z);
  z++;
}

//5
t = 1;
suma = 0;
while (t <= 100) {
  if (t % 2 == 0) {
    suma += t;
  }
  t++;
}
console.log(suma);

//6

const kiekis = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < kiekis; i++) {
  const atsitiktinisskaicius = Math.floor(Math.random() * 20);
  console.log(atsitiktinisskaicius);
}

const kiek = Math.floor(Math.random() * 10) + 1;
let u = 0;
while (u < kiek) {
  const atsitiktinisskaicius = Math.floor(Math.random() * 20);
  console.log(atsitiktinisskaicius);
  u++;
}
/*
const ki=Math.floor(Math.random() *10) + 1;
let atsitiktinesuma=0
for(let i = 0; i < ki; i++) {
let atsitiktinis=Math.floor(Math.random() *20)
console.log(atsitiktinis);
atsitiktiniosuma+= atsitiktinis
}


let r= 0 
while(r<ki){
  const atsitiktinis= Math.round(Math.random() *20)
  console.log(atsitiktinis);
  atsiktinesuma +=atsitiktinis
  r++
}
console.log(atsiktinesuma)
*/



