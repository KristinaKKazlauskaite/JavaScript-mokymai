// Funkcijos, objekto fabrikas -------------------------------------

/* Funkcijos sintaksė

function pavadinimas(argumentas1, argumentas2, ...) {
// funkcijos kodas
return grazinamas_atsakymas;

}   */

//   pvz
function hello() {
  console.log("labas"); //funkcijos dekleracija
}
hello(); //argumetro parametrai taio ka irasome i tuos skliaustus

function hello() {
  return "labas"; //return- grizta
}
let pasisveikinimas = hello;
console.log(pasisveikinimas);

function sudetis(num1, num2) {
  return num1 + num2;
}
console.log(sudetis(7, 9));

/*  1. Sukurkite funkciją, kuri išvestų jūsų vardą ir kodėl pasirinkote
programavimą. Iškvieskite šią funkciją tris kartus.  */

function pasisveikinimass() {
  console.log("Kristina"),
    console.log("Pasirinkau, nes noriu geresnes klasifikacijos");
}
pasisveikinimass();
pasisveikinimass();
pasisveikinimass();

/*  2. Sukurkite funkciją, kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją 5
kartus. */

function eilerastis() {
  console.log(
    " Vai kas tau pasiuvo, \n Tokią raudoną prijuostėlę?, \n Kaip šermukšnio uogą, \n Kaip rožės lapelį, \n Kaip aušros spindulėlį?"
  );
}

eilerastis();
eilerastis();
eilerastis();
eilerastis();
eilerastis();

/* 3. Sukurkite tris funkcijas, kur kiekviena išvestų skirtingus tekstus. Iškvieskite
visas tris funkcijas po vieną kartą.  */

function labas() {
  console.log("Labas");
}

function laba_diena() {
  console.log("Laba_diena");
}

function labas_vakaras() {
  console.log("Labas_vakaras");
  console.log("----------------------");
}

labas();
laba_diena();
labas_vakaras();

/* 4. Sukurkite dvi funkcijas, kur vienoje būtų viena teksto eilutė, kitoje - kita.
Sukurkite trečią funkciją, kuri iškviestų pirmas dvi funkcijas. Iškvieskite šią
trečiąją funkciją už visų funkcijų ribų.  */

function labanakt() {
  console.log("Labanakt"); // arba   return 'Labanakt
}

function labas_rytas_suraitytas() {
  console.log("Labas_rytas_suraitytas");
}

function netrugdyti() {
  console.log("Labanakt");
  console.log("Labas_rytas_suraitytas");
}

labanakt();
labas_rytas_suraitytas(); // console.log(pasisveikinimas)
netrugdyti();

/* 5. Sukurkite funkciją, kurios viduje sugeneruotumėte du atsitiktinius skaičius.
Funkcijoje suskaičiuokite ir išveskite šių dviejų skaičių sumą, kartu išvedant
ir patį atliekamą veiksmą (pvz 7 + 2 = 9). Iškvieskite šią funkciją keletą
kartų.  */

function suma() {
  let num1 = Math.floor(Math.random() * 100);
  let num2 = Math.floor(Math.random() * 100);
  let suma = num1 + num2;
  console.log(`${num1} + ${num2} = ${suma}`);
}

suma();
suma();
suma();

/* 6. Sukurkite ir iškvieskite funkciją, kurioje kintamuosiuose būtų saugoma
informacija apie policininką (vardas, pavardė, amžius, alga, etatas,
specializacija). Išveskite šią informaciją suformatuotai (pavyzdžiui įterpkite
į sakinį, ar išveskite sąrašu ar pan.).  */

function policininkas() {
  let vardas = "Jonas";
  let pavarde = "Jonavicius";
  let amzius = 43;
  let alga = 2000;
  let etatas = 2;
  let specializacija = "kriminalistas";

  console.log(
    `Vardas: ${vardas}, Pavarde: ${pavarde}, Amžius: ${amzius}, Alga: ${alga}, Etatas: ${etatas}, Specializacija: ${specializacija}`
  );
}

/*7. Sukurkite funkciją, kuri išvestų 10 atsitiktinių skaičių vienoje eilutėje,
skaičius atskiriant tarpu. Šią funkciją iškvieskite 5 kartus.  */

function desimtskaiciu() {
  console.log(
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  );
}

desimtskaiciu();
desimtskaiciu();
desimtskaiciu();
desimtskaiciu();
desimtskaiciu();

/* arba
              function atsitiktinisSkaicius(){
                let skaicius = Math.round(Math.random() * 100);
                return skaicius;
              }                                                      //geresnis variantas 
              for(let i = 0; i++){
                console.log(atsitiktinisSkaicius());
              }
*/

/* 8. Sukurkite funkciją, kuri išvestų atsitiktinį skaičių. Už funkcijos ribų
sukurkite ciklą, kurį būtų vykdomas 10 kartų. Iškvieskite sukurtą funkciją
cikle. Turėtumėte pamatyti 10 atsitiktinių skaičių.  */

function atsitiktinisSkaicius() {
  let skaicius = Math.round(Math.random() * 100);
  return skaicius;
}
for (let i = 0; i < 10; i++) {
  console.log(atsitiktinisSkaicius(i));
}

/* 9. Sukurkite funkciją pasisveikinimui, šiai funkcijai per argumentus
perduokite vardą, funkcijoje išveskite tekstą labas ir gautą vardą. Sukurkite
kitą funkciją, kuri irgi per argumentus gautų vardą, tačiau pasakytų 'viso
gero' ir patį vardą. Ne funkcijose susikurkite kintamąjį vardui saugoti ir
įrašykite vardą. Iškvieskite abi funkcijas, perduodant kintamąjį joms.  */

function sveikas(vardas) {
  console.log("Labas", vardas);
}
function viso(vardas) {
  console.log("viso gero", vardas);
}
let fname = "Valdas";
sveikas(fname);
viso(fname);

/* 10.Sukurkite funkciją, kuriai perduotumėte du skaičius. Ši funkcija turi rasti
kuris skaičius yra didesnis ir išvesti gautą atsakymą, o jei skaičiai lygūs -
tuomet išvesti, kad skaičiai lygūs. Iškvieskite šią funkciją keletą kartų,
duodant skirtingus skaičius.  */

function kurisDidesnis(a, b) {
  if (a > b) {
    return `Didesnis yra ${a}`;
  } else if (b > a) {
    return `Didesnis yra ${b}`;
  } else {
    return `Skaiciai lygus `;
  }
}
console.log(kurisDidesnis(16, 22));
console.log(kurisDidesnis(19, 2));
console.log(kurisDidesnis(8, 8));

/* 11.Sukurkite funkciją, kuri per argumentus gautų automobilių duomenis (markė,
modelis, gamybos metai, darbinis tūris). Ši funkcija turėtų šiuos duomenis išvesti
kaip nors gražiai formatuotai. Iškvieskite šią funkciją du kartus, perduodant
skirtingus duomenis jai.  */

function auto(marke, modelis, metai, turis) {
  let automobilis = {
    marke: marke,
    modelis: modelis,
    metai: metai,
    turis: turis,
  };
  console.log("automobilio duomenys:");
  for (raktas in automobilis) {
    console.log(raktas + ":" + automobilis[raktas]);
  }
}
auto("Citroen", "C5X", 2023, 1.8);
auto("Peugeot", "5008", 2001, 1.2);

/* 12.Sukurkite funkciją sumai skaičiuoti, ši funkcija per argumentus turėtų gauti du
skaičius, bei išvesti patį veiksmą kartu su atsakymu (pvz 7 + 5 = 12). Sukurkite tokias
pačias funkcijas skirtumui, sandaugai ir dalmeniui rasti. Sukurkite dar vieną
funkciją, kuri sugeneruotų du atsitiktinius skaičius, bei iškviestų kitas 4 funkcijas,
perduodant joms sugeneruotus skaičius. Šią bendrąją funkciją iškvieskite keletą
kartų. */

function sudetis(num1, num2) {
  return `${num1} + ${num2} = ${num1} + ${num2}`;
}
function atimtis(num1, num2) {
  return `${num1} - ${num2} = ${num1} - ${num2}`;
}
function daugyba(num1, num2) {
  return `${num1} * ${num2} = ${num1} * ${num2}`;
}
function dalyba(num1, num2) {
  return `${num1} / ${num2} = ${num1} / ${num2}`;
}
function aritmetika() {
  let num1 = Math.round(Math.random() * 100);
  let num2 = Math.round(Math.random() * 100);

  console.log(sudetis(num1, num2));
  console.log(atimtis(num1, num2));
  console.log(daugyba(num1, num2));
  console.log(dalyba(num1, num2));
}
aritmetika();

/* 13.Susikurkite funkciją, kuri per argumentus priimtų žodžių masyvą. Funkcijoje
išveskite visus žodžius iš masyvo atskirose eilutėse, nurodant žodžio ilgį
(simbolių kiekį). Už funkcijos ribų susikurkite žodžių masyvą ir užpildykite jį
duomenimis. Iškvieskite sukurtą funkciją perduodant turimą masyvą.  */

function zodziai(zodziuMasyvas) {
  for (let i = 0; i < zodziuMasyvas.length; i++) {
    const zodis = zodziuMasyvas[i];
    const ilgis = zodis.length;

    console.log(`${zodis} - ${ilgis} simboliai`);
  }
}

const zodziuMasyvas = ["Labas", "rytas", "JavaScript", "funkcija"];

zodziai(zodziuMasyvas);

/*14.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
turėtų atspausdinti visus skaičius, šalia jų išvedant to skaičiaus kvadratą ir jį
padalintą iš dviejų. Už funkcijos ribų susikurkite du skaičių masyvus ir
užpildykite jį duomenimis. Iškvieskite funkciją du kartus, kiekvieną kartą
perduodant skirtingą turimą masyvą.  */

function skaiciuOperacijos(skaiciuMasyvas) {
  for (let i = 0; i < skaiciuMasyvas.length; i++) {
    const skaicius = skaiciuMasyvas[i];
    const kvadratas = skaicius ** 2;
    const dalijimasIsDvieju = skaicius / 2;

    console.log(
      `Skaicius: ${skaicius}, kvadratas: ${kvadratas} padaalinta is dvieju: ${dalijimasIsDvieju}`
    );
  }
}
const pirmasMasyvas = [3, 5, 7, 10];
const antrasMasyvas = [2, 4, 6, 8];

console.log("Pirmas masyvas:");
skaiciuOperacijos(pirmasMasyvas);

console.log("Antras masyvas:");
skaiciuOperacijos(antrasMasyvas);

/* 15.Susikurkite funkciją, kuri per argumentus priimtų pažymių masyvą, bei
studento vardą su pavarde. Funkcija turėtų išvesti studento vardą ir
pavardę, jo pažymius. Taip pat, suskaičiuoti vidurkį, bei jį išvesti. Už
funkcijos ribų susikurkite reikiamus kintamuosius ir masyvus, arba
objektus studentų pažymiams saugoti ir užpildykite juos duomenimis.
Iškvieskite šią funkciją perduodant visus reikalingus duomenis.  */

function studentoInfo(vardas, pavarde, pazymiai) {
  console.log(`Studento vardas: ${vardas}`);
  console.log(`Studento pavarde: ${pavarde}`);
  console.log(`Pazymiai: ${pazymiai.join(", ")}`);

  const vidurkis =
    pazymiai.reduce((suma, pazymys) => suma + pazymys, 0) / pazymiai.length;
  console.log(`Vidurkis: ${vidurkis.toFixed(2)}`);
}

const studentas = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  pazymiai: [9, 8, 7, 10, 9],
};

studentoInfo(studentas.vardas, studentas.pavarde, studentas.pazymiai);

/* 16.Susikurkite funkciją, kuri per argumentus priimtų skaičių masyvą. Funkcija
turėtų rasti didžiausią skaičių iš masyvo bei išvesti gautą atsakymus. Taip pat,
susikurkite funkciją, kuri per argumentus priimtų masyvą ir į jį sugeneruotų
pasirinktą kiekį atsitiktinių skaičių. Susikurkite tris tuščius masyvus.
Iškvieskite atsitiktinių skaičių generavimo funkciją tris kartus, kiekvieną kartą
perduodant funkcijai vis kitą masyvą. Kai duomenys bus užpildyti,
masyvuose esančią informaciją išsiveskite norimu būdu (per console.log arba
per dar atskirą funkciją). Tuomet kvieskite didžiausio skaičiaus paieškos
funkciją tris kartus, kiekvieną kartą perduodant skirtingą masyvą į ją. */

function rastiDidziausiaSk(skaiciuMasyvas) {
  if (skaiciuMasyvas.length === 0) {
    console.log("Masyvas yra tuscias");
    return;
  } //vietoj
  const didziausias = Math.max(...skaiciuMasyvas); //const didziausias = Math.max(5,7,5,4,3,7,8)
  console.log(`Didziausias skaicius: ${didziausias}`);
}
function generuotiAtsitiktiniusSk(masyvas, kiekis) {
  for (let i = 0; i < kiekis; i++) {
    masyvas.push(Math.floor(Math.random() * 100) + 1);
  }
}

const masyvas1 = [];
const masyvas2 = [];
const masyvas3 = [];

generuotiAtsitiktiniusSk(masyvas1, 5);
generuotiAtsitiktiniusSk(masyvas2, 7);
generuotiAtsitiktiniusSk(masyvas3, 4);

rastiDidziausiaSk(masyvas1);
rastiDidziausiaSk(masyvas2);
rastiDidziausiaSk(masyvas3);

/* 17.Susikurkite funkciją, kuri grąžintų bet kokį jūsų norimą sakinį. Iškvieskite
šią funkciją ir išspausdinkite gautus rezultatus.  */

function sakinys() {
  return "mano gyvenimas yra grazus";
}
console.log(sakinys());

/* 18.Susikurkite funkciją, kuri grąžintų atsitiktinai sugeneruotą skaičių.
Iškvieskite šią funkciją kelis kartus ir gautus atsakymus išveskite kokiu
norite būdu. */

function randomskaicius(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
for (let i = 0; i < 5; i++) {
  const skaicius = randomskaicius(1, 100);
  console.log(`Atsitiktinis skaicius ${i + 1}: ${skaicius}`);
}

/* 19.Susikurkite funkciją, kuri per argumentus priimtų studento vardą ir vidurkį.
Ši funkcija turėtų sugeneruoti iš to sakinį (pvz Studentas Tomas turi vidurkį
8.7) ir tai grąžinti kaip atsakymą. Iškvieskite šią funkciją bent porą kartų,
perduodant vis skirtingus duomenis. Gautus atsakymus išveskite. */

function sakinys(sakinys, vidurkis) {
  return `Studentas ${studentas} turi vidurki ${vidurkis}`;
}
console.log(sakinys("Tomas", 8.7));
console.log(sakinys("Agne", 6.7));
console.log(sakinys("Simas", 8.8));

/* 20.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų surasti
duoto skaičiaus mažiausią daliklį (skaičių iš kurio dalinasi be liekanos). Už
funkcijos ribų sukite ciklą nuo 10 iki 30 ir kiekvienoje ciklo iteracijoje
iškvieskite šią funkciją, perduodant ciklo kintamąjį. */

function maziausiasDaliklis(skaicius) {
  let daliklis = skaicius;
  for (let i = 2; i <= skaicius; i++) {
    if (skaicius % i == 0) {
      daliklis = i;
      break;
    }
  }
  return daliklis;
}

for (let i = 10; i <= 30; i++) {
  const daliklis = maziausiasDaliklis(i);
  console.log(`Maziausias daliklis skaiciui ${i} yra: ${daliklis}`);
}

/* 21.Susikurkite funkciją, kuri per argumentus gautų skaičių. Ji turėtų patikrinti
ar šis skaičius yra pirminis (grąžina true jei pirminis, ir false jei ne pirminis).
Už funkcijos ribų sukite ciklą nuo 2 iki 15, kiekvienoje ciklo iteracijoje
išveskite tikrinamą skaičių ir šalia jo iškviestos funkcijos atsakymą (pvz 10
false, 11 true, ...). */

function arPirminis(skaicius) {
  if (skaicius <= 1) {
    return false;
  } else if (skaicius <= 3) {
    return true;
  } else if (skaicius % 2 === 0 || skaicius % 3 === 0) {
    return false;
  }

  let daliklis = 5;
  while (daliklis * daliklis <= skaicius) {
    if (skaicius % daliklis === 0 || skaicius % (daliklis + 2) === 0) {
      return false;
    }
    daliklis += 6; // 6k - 1 arba 6k + 1, kur k = teigiamas skaicius
  }
  return true;
}

for (let i = 2; i <= 15; i++) {
  const pirminis = arPirminis(i);
  console.log(`${i} ${pirminis}`);
}

/* 22.Susikurkite bent 3 matematines funkcijas, priimančias reikiamus
argumentus (pvz suma iš dviejų skaičių, suma iš trijų skaičių, skirtumas,
sandauga, dalyba) ir grąžinančias atitinkamus atsakymus. Taip pat,
susikurkite funkciją, kurioje būtų sugeneruojamas reikiamas kiekis
atsitiktinių skaičių ir išvedami visų skaičiavimų atsakymai su veiksmais
(iškviečiant atitinkamas kitas funkcijas ir perduodant reikiamus
kintamuosius) (pagal 23 pavyzdį). Iškvieskite šią pagrindinę funkciją bent
kartą.  */

function sumaDu(sk1, sk2) {
  return sk1 + sk2;
}

function sumaTrys(sk1, sk2, sk3) {
  return sk1 + sk2 + sk3;
}

function skirtumas(sk1, sk2) {
  return sk1 - sk2;
}

function sandauga(sk1, sk2) {
  return sk1 * sk2;
}

function dalyba(sk1, sk2) {
  if (sk2 === 0) {
    return "Dalyba is nulio negalima";
  }
  return sk1 / sk2;
}
function skaiciavimai() {
  const skaicius1 = Math.floor(Math.random() * 100 + 1);
  const skaicius2 = Math.floor(Math.random() * 100 + 1);
  const skaicius3 = Math.floor(Math.random() * 100 + 1);

  const rezultatas1 = sumaDu(skaicius1, skaicius2);
  const rezultatas2 = skirtumas(skaicius1, skaicius2);
  const rezultatas3 = sandauga(skaicius1, skaicius2);
  const rezultatas4 = dalyba(skaicius1, skaicius2);
  const rezultatas5 = sumaTrys(skaicius1, skaicius2, skaicius3);
  console.log(`Skaicius 1: ${skaicius1}`);
  console.log(`Skaicius 2: ${skaicius2}`);
  console.log(`Skaicius 3: ${skaicius3}`);

  console.log(`Suma: ${skaicius1} + ${skaicius2} = ${rezultatas1}`);
  console.log(`Skirtumas: ${skaicius1} - ${skaicius2} = ${rezultatas2}`);
  console.log(`Sandauga: ${skaicius1} * ${skaicius2} = ${rezultatas3}`);
  console.log(`Dalyba: ${skaicius1} / ${skaicius2} = ${rezultatas4}`);
  console.log(
    `Suma triju skaiciu: ${skaicius1} + ${skaicius2} + ${skaicius3} = ${rezultatas5}`
  );
}
skaiciavimai();

/* 23.Susikurkite funkciją kuri priimtų skaičių masyvą per argumentus. Ši funkcija turėtų
rasti duotųjų skaičių sumą ir grąžinti gautą atsakymą. Už funkcijos ribų susikurkite
du skaičių masyvus ir užpildykite juos duomenimis. Iškvieskite turimą funkciją du
kartus, jai abu kartus perduodant skirtingą masyvą. Gautus atsakymus išveskite.
Taip pat, raskite kuri suma gavosi didesnė ir išveskite atsakymą.  */

function kokiaSuma(skaiciai) {
  let suma = 0;
  for (let i = 0; i < skaiciai.length; i++) {
    suma += skaiciai[i];
  }
  return suma;
}

let m1 = [5, 10, 15, 20];
let m2 = [3, 7, 11, 14];

let suma1 = kokiaSuma(m1);
let suma2 = kokiaSuma(m2);

console.log(`Masyvo 1 suma: ${suma1}`);
console.log(`Masyvo 2 suma: ${suma2}`);

if (suma1 > suma2) {
  console.log("Pirmo masyvo suma yra didesne.");
} else if (suma2 > suma1) {
  console.log("Antro masyvo suma yra didesne.");
} else {
  console.log("Abieju masyvu sumos yra lygios.");
}

/* 24.Susikurkite funkciją kuri per argumentus priimtų žodžių masyvą. Ji turėtų rasti ir
grąžinti ilgiausią žodį masyve. Už funkcijos ribų susikurkite žodžių masyvą.
Iškvieskite funkciją perduodant jai žodžių masyvą. Gautą atsakymą išveskite, taip
pat, nurodykite šio žodžio ilgį. */

function ilgiausiasZodis(zodziuMasyvas) {
  if (zodziuMasyvas.length === 0) {
    return "Masyvas yra tuscias.";
  }

  let ilgiausias = zodziuMasyvas[0];
  let ilgis = ilgiausias.length;

  for (let i = 1; i < zodziuMasyvas.length; i++) {
    let zodis = zodziuMasyvas[i];
    if (zodis.length > ilgis) {
      ilgiausias = zodis;
      ilgis = zodis.length;
    }
  }

  return ilgiausias;
}

/*const */ zodziai = ["obuolys", "kava", "bananas", "mandarinas", "avokadas"];

const ilgiausias = ilgiausiasZodis(zodziai);

console.log(`Ilgiausias zodis: ${ilgiausias}`);
console.log(`Ilgis: ${ilgiausias.length}`);

/* 25.Susikurkite funkciją kuri per argumentus priimtų pažymių masyvą. Ji turėtų
patikrinti ar visi pažymiai teigiami: jei visi teigiami turėtų grąžintų true kaip
atsakymą, o jei yra bent vienas neigiamas - false. Susikurkite du pažymių
masyvus. Iškvieskite šią funkciją du kartus, abu kartus perduodant
skirtingus masyvus. Gautus atsakymus paverskite į tekstą (jeigu gavote
true - išveskite tekstą 'visi studento pažymiai teigiami', jei false - 'studentas
turi bent vieną neigiamą pažymį'). Šiam iškonvertavimui iš true/false į
tekstą galite pamėginti pasikurti atskirą funkciją, jai perduoti kitos
funkcijos atsakymą.  */

function teigiamiPazymiai(pazymiai) {
  for (let i = 0; i < pazymiai.length; i++) {
    if (pazymiai[i] < 5) {
      return false;
    }
  }
  return true;
}
function keiciamTekstu(atsakymas) {
  return atsakymas
    ? "visi studento pazymiai teigiami"
    : "studentas turi bent viena neigiama pazymi";
}

let pazymiai1 = [8, 9, 10, 7];
let pazymiai2 = [6, 4, 5, 8];

const ats1 = teigiamiPazymiai(pazymiai1);
const ats2 = teigiamiPazymiai(pazymiai2);

console.log(keiciamTekstu(ats1));
console.log(keiciamTekstu(ats2));

// Funkcijos objektuose (metodai) --------------------------------

/* 1. Susikurkite darbuotojo objektą, kuriame turėtumėte šias savybes: vardas,
pavardė, dabartinis atlyginimas, etatas. Šiame objekte sukurkite funkciją, kuri
per argumentus priimtų procentus ir paskaičiuotų koks būtų darbuotojo
atlyginimas, jei jo atlyginimas būtų pakeltas per nurodytą kiekį procentų. Taip
pat, susikurkite funkciją, kuri per argumentus priimtų atnaujintą etato skaičių,
ji turėtų paskaičiuoti kiek pasikeistų darbuotojo atlyginimas, jei jis pradėtų
dirbti nurodytu etatu (tarkim jei dirba pilnu etatu ir atlyginimas 1000 eurų, tai
per pusę sumažinus etatą (argumentuose būtų 0.5) jo atlyginimas kristų iki
500). Iškvieskite šias objekto funkcijas ir išsiveskite gautus atsakymus. */

/*
let darbuotojas = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  dabartinisAtlyginimas: 1000,
  etatas: 1,
  skaiciuotiAtlyginima: function (procentai) {
    let naujasAtlyginimas = this.dabartinisAtlyginimas * (1 + procentai / 100);
    return naujasAtlyginimas;
  },
  atlyginimoPokytis: function (naujasEtatas) {
    let naujasAtlyginimas = this.dabartinisAtlyginimas * naujasEtatas;
    let atlyginimoKitimas = this.dabartinisAtlyginimas - naujasAtlyginimas;
    return atlyginimoKitimas;
  },
};

console.log("Dabartinis atlyginimas:", darbuotojas.dabartinisAtlyginimas);
let procentai = 10;
let naujasAtlyginimas = darbuotojas.skaiciuotiAtlyginima(procentai);
console.log(
  "Naujas atlyginimas po pakelimo",
  procentai + "%:",
  naujasAtlyginimas
);

let naujasEtatas = 0.5;
let atlyginimoKitimas = darbuotojas.atlyginimoPokytis(naujasEtatas);
console.log("Atlyginimo kitimas po etato pakeitimo:", atlyginimoKitimas);  */

//Objekto fabrikas (factory design pattern) ---------------------------

/* 1. Praeitame skyriuje sukurtą darbuotojo objektą pasikopijuokite į naują
gamyklos (factory) funkciją, kuri galėtų sukurti daugiau tokių objektų.
Pritaikykite objektą, kad duomenis prisiskirtų iš funkcijos argumentų. Už
funkcijos ribų sukurkite ir sudėkite keletą tokių darbuotojų į masyvą.
Tuomet mėginkite prasukti ciklą pro sukurtą darbuotojų masyvą ir
išsiveskite darbuotojų duomenis, taip pat, pakvieskite skaičiavimų
funkcijas ir pasižiūrėkite gaunamus rezultatus. */


function sukurtiDarbuotoja(vardas, pavarde, dabartinisAtlyginimas, etatas) {
  return {
    vardas,
    pavarde,
    dabartinisAtlyginimas,
    etatas,
    skaiciuotiAtlyginima: function (procentai) {
      let naujasAtlyginimas =
        this.dabartinisAtlyginimas * (1 + procentai / 100);
      return naujasAtlyginimas;
    },
    atlyginimoPokytis: function (naujasEtatas) {
      let naujasAtlyginimas = this.dabartinisAtlyginimas * naujasEtatas;
      let atlyginimoKitimas = this.dabartinisAtlyginimas - naujasAtlyginimas;
      return atlyginimoKitimas;
    },
  };
}

let darbuotojai = [
  sukurtiDarbuotoja("Jonas", "Jonaitis", 1000, 1),
  sukurtiDarbuotoja("Petras", "Petraitis", 800, 0.75),
  sukurtiDarbuotoja("Ona", "Onaite", 1200, 1.25),
];

for (let i = 0; i < darbuotojai.length; i++) {
  let darbuotojas = darbuotojai[i];
  console.log("Darbuotojo duomenys:");
  console.log("Vardas:", darbuotojas.vardas);
  console.log("Pavarde:", darbuotojas.pavarde);
  console.log("Dabartinis atlyginimas:", darbuotojas.dabartinisAtlyginimas);

  let procentai = 10;
  let naujasAtlyginimas = darbuotojas.skaiciuotiAtlyginima(procentai);
  console.log("Naujas atlyginimas po pakelimo",procentai + "%:",Math.round(naujasAtlyginimas));

  let naujasEtatas = 0.5;
  let atlyginimoKitimas = darbuotojas.atlyginimoPokytis(naujasEtatas);
  console.log("Atlyginimo kitimas po etato pakeitimo:", atlyginimoKitimas);

  console.log("--------------");
}



