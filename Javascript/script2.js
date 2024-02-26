//Masyvai.

let skaiciai = [5, 8, 5, 4, 3, 2, 6, 8, 6]; //0 ,1 ,2 ,3 ,4 ...
console.log(skaiciai.length);

skaiciai.push(9); //kiek skaiciu mano del to
console.log(skaiciai);

skaiciai.push(9, 2, 3, 1); //salia rodo kitus skaicius
console.log(skaiciai);

console.log(skaiciai[3]);

console.log(skaiciai.length);
console.log(skaiciai[13]);
console.log(skaiciai[skaiciai.length - 1]); //paskutinis indeksas (skaicius)

/*  1. Susikurkite norimą masyvą su duomenimis. Iš šio masyvo išveskite pirmą
ir paskutinį narį, du pasirinktus narius iš masyvo vidurio ir kiekį kiek šiame
masyve yra narių.     */

darbuotojai = ["Tomas", "Darius", "Jonas", "Rasa", "Vilius", "Ona"];
console.log(
  darbuotojai[0],
  darbuotojai[darbuotojai.length - 1],
  darbuotojai[3],
  darbuotojai[4]
);

/* 2. Susikurkite norimą masyvą su duomenimis. Išsiveskite viso šio masyvo
informaciją. Pakeiskite trijų pasirinktų narių reikšmes į kitas. Išsiveskite
pakeisto masyvo informaciją.  */

let studentai = ["Robertas", "Pranas", "Vaida", "Antanas"];
console.log(studentai);
studentai[0] = "Vidas";
studentai[1] = "Paulina";
studentai[2] = "Dominyka";
console.log(studentai);

/* 3. Susikurkite norimą tuščią masyvą. Užpildykite šį masyvą duomenimis
naudojant push komandą. Išsiveskite užpildyto masyvo informaciją.  */

let kompai = [];
kompai.push[("Apple", "Lenovo", "Dell", "Acer")];
console.log(kompai);

/* 4. Susikurkite tuščią masyvą. Užpildykite šį masyvą atsitiktinai sugeneruotais
skaičiais. Išveskite šio masyvo informaciją. */

skaiciai = [];
for (let i = 0; i < 10; i++) {
  skaiciai.push(Math.round(Math.random() * 100));
  console.log(skaiciai);
}

/*  5. Sukurkite du masyvus dviejų studentų pažymiams saugoti. Įveskite po 3-5
pažymius kiekvienam studentui (iškart kuriant masyvus arba per push
funkciją). Suskaičiuokite ir išveskite jų vidurkius. Išsiaiškinkite kurio
studento vidurkis didesnis ir išveskite atsakymą. */

let stu1 = [9, 9, 8, 10, 7];
let stu2 = [6, 10, 8, 8, 9];

let vid1 = (stu1[0] + stu1[1] + stu1[2] + stu1[3] + stu1[4]) / stu1.length;
let vid2 = (stu2[0] + stu2[1] + stu2[2] + stu2[3] + stu2[4]) / stu2.length;

console.log("Pirmo studento vidurkis: ", vid1);
console.log("Antro studento vidurkis: ", vid2);

console.log("Didesnis vidurkis: " + (vid1 > vid2 ? vid1 : vid2));

/* pvz
let komp = ['Apple', 'Lenovo', 'Dell', 'Acer']
for (let i = 0; i < stu1.length; i++){
    console.log(komp[i])
}                                                                 */

/* 6. Susikurkite masyvą studijų programų pavadinimams saugoti. Užpildykite šį
masyvą duomenimis. Išveskite kiekvieną studijų programą atskiroje eilutėje.  */

let programa = ["Ekonomija", "Vadyba", "Muzika", "Biologija"];

for (let i = 0; i < programa.length; i++) {
  console.log(programa[i]);
}

/* 7. Susikurkite masyvą šalių pavadinimams saugoti ir jį užpildykite duomenimis.
Išveskite šalių pavadinimus atskirose eilutėse, su prierašu "šalis" ir tada
nurodant šalį iš masyvo.  */

let šalys = ["Lietuva", "Suomija", "Vokietija", "Danija", "Estija"];

for (let i = 0; i < šalys.length; i++) {
  console.log("šalis:", šalys[i]);
}

/* 8. Susikurkite masyvą įgyvendintų projektų pavadinimams saugoti. Užpildykite
šį masyvą duomenimis. Išveskite kiekvieną projektą atskirose eilutėse, prieš
kiekvieną projektą parašant kelintas tai projektas yra (pradedant 1-u).   */

let projektas = ["Statybu duona", "Maxima", "Geliu pasaulis", "Fotostostudija"];

for (let i = 0; i < projektas.length; i++) {
  console.log(`projektas ${i} :`, projektas[i]);
}

/* arba 
projektai.forEach(projektas, indeksas) => {
    console.log(`Projektas Nr. ${indeksas + 1: ${projektas}` }
}

arba

for (indeksas in projektai){
    console.log(`Projektas Nr. ${parseInt(indeksas) + 1} : ${projektai[indeksas]}`)
}
*/

/* 9. Susikurkite skaičių masyvą ir užpildykite duomenimis. Iš masyvo išveskite
tik tuos skaičius, kurie yra didesni nei 5.  */

let y = [1, 2, 4, 33, 4, 55];
for (let i = 0; i < y.length; i++) {
  if (y[i] > 5) console.log(y[i], "didesni uz 5");
}

/* 10.Susikurkite skaičių masyvą ir užpildykite jį atsitiktiniais skaičiais. Raskite
visų skaičių, kurie dalinasi iš 4 sumą. */

let k = [4, 6, 16, 55, 3, 8, 6];
for (let i = 0; i < k.length; i++) {
  if (k[i] % 4 == 0) console.log("dalinasi is 4", k[i]);
}

/* const ski = [
    const sKiekis = 10
    let su = 0

    for (let i= 0 ; i < sKiekis; i++){
    const p = Math.floor (Math.random() * 100) + 1
    ski.push(p)
    if(p % 4 == 0){
        su += p
    }
    }
    console.log(`Visi skaiciai: ${ski.join(', ')}`)
    console.log(`Skaiciu, kurie dalinasi is 4, suma : ${su}`)
]   */

/* 11.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
šių pažymių vidurkį. Išveskite sugeneruotus duomenis ir gautą vidurkį. */

let st1 = [7, 5, 8, 10, 6];
let v1 = (st1[0] + st1[1] + st1[2] + st1[3] + st1[4]) / st1.length;
console.log("Studento vidurkis: ", v1);

/* arba 

for(let p of paz) {
    if (p> vidur){
        consule.log(`Didesmis eni vidurkis: ${p}`)
    }
} 
*/

/* 12.Susikurkite pažymių masyvą ir užpildykite jį atsitiktiniais pažymiais. Raskite
šių pažymių vidurkį. Išveskite visus skaičius, kurie yra didesni nei vidurkis.  */

let p = [8, 7, 10, 4, 9, 8];
for (let i = 0; i < p.length; i++) {
  if (p[i] > 5) console.log(p[i], "pazimys didesnis uz vidurki");
}

/* const  skaic =[ 8,6,4,3,2,7,6,3,7,1] 
for (let sk of skaic){
    if(sk % 2   == 0) {
    console.log(`$sk}, kvadratas: ${ sk**2}`)
}else{
    console.log(`${sk}`)
}
}
 */

/* 13.Susikurkite skaičių masyvą ir užpildykite jį duomenimis. Išveskite visus
skaičius atskirose eilutėse. Prie kiekvieno lyginio skaičiaus dar išvedant jo
kvadratą. */

let s = [42, 53, 66, 67, 65, 38, 98];
for (let i = 0; i < s.length; i++) {
  if (s[i] % 2 == 0) {
    console.log(s[i], "pakeltas kvadratu", s[i] ** 2);
  } else {
    console.log(s[i]);
  }
}

/* 14.Susikurkite studento pažymių masyvą ir užpildykite jį duomenimis
(atsitiktiniais arba kokius įrašysite). Išveskite kiekvieną pažymį atskiroje
eilutėje. Prie kiekvieno pažymio nurodykite ar tai teigiamas, ar neigiamas
pažymys. Taip pat, jeigu neigiamas pažymys, tuomet dar nurodykite kiek
balų trūko iki teigiamo pažymio. Teigiamas pažymys skaitosi 5 balai.  */

let pazymiai = [7, 7, 3, 5, 9, 4, 7, 9, 10];
for (let i = 0; i < pazymiai.length; i++) {
  if (pazymiai[i] < 5) {
    console.log(
      pazymiai[i],
      `neigiamas pazimys, truksta iki teigiamo ${5 - pazymiai[i]}`
    );
  } else {
    console.log(pazymiai[i], "teigiamas pazimys");
  }
}

/*    */

/* 15.Susikurkite žodžių masyvą ir užpildykite duomenimis. Išveskite visus
žodžius ekrane, nurodant iš kiek raidžių kiekvienas šis žodis yra sudarytas.
Papildykite skriptą taip, kad rastumėte visų raidžių kiekį (pvz yra žodžiai
"medis" ir "alus", 5 ir 4 raidės atitinkamai, o jas sudėjus gaunasi 9 raidės).  */

const zodziai = ["medis", "alus", "stalas", "kede", "kompiuteris"];
console.log("Zodziai ir ju raidiu skaicius:");
for (let i = 0; i < zodziai.length; i++) {
  const zodis = zodziai[i];
  const raidziuSkaicius = zodis.length;
  console.log(`${zodis}: ${raidziuSkaicius}`);
}
let visosRaides = 0;
for (let i = 0; i < zodziai.length; i++) {
  visosRaides += zodziai[i].length;
}
console.log("\nVisu raidziu suma: " + visosRaides);

/* 16.Susikurkite skaičių masyvą ir užpildykite duomenimis. Raskite visų skaičių,
kurie dalinasi iš 3 sumą ir vidurkį. Išveskite pradinius duomenis ir gautus
atsakymus. */

const nums = [23, 17, 29, 63, 15];
let counter = 0;
let numbs = 0;
for (let numb of nums) {
  if (numbs % 3 == 0) {
    console.log(numb);
    numbs += numb;
    counter++;
  }
}

const ave = numbs / counter;
console.log(`Skaiciu masyvas: ${nums.join(", ")}`);
console.log(`Skaiciu, kurie dalijasi is 3, suma: ${numbs}`);
console.log(`Vidurkis: ${ave}`);

/* 17.Susikurkite bet kokių žodžių masyvą ir užpildykite jį duomenimis. Išveskite
visus žodžius su indeksais į atskiras eilutes. Pvz: 0 - medis, 1 - tvora, ...    */

const zodziai1 = ["medis", "tvora", "stalas", "puodas"];
for (let indeksas in zodziai1) {
  console.log(indeksas + ":" + zodziai1[indeksas]);
}

/* 18.Susikurkite masyvą pirkinių sąrašui saugoti ir užpildykite jį duomenimis.
Išveskite kiek pirkinių yra šiame sąraše. Taip pat, išveskite kiekvieną įrašą
atskiroje eilutėje, prieš kiekvieną parašant brūkšniuką ar kokį kitą skirtuką. */

let pirkiniai = [
  "kiausiniu",
  "duonos",
  "sviesto 3",
  "batono 2",
  "kriausiu 1 kg",
  "mandarinu 3 kg",
  'avokadu 4',
  'sausainiu 5kg',
  'saldainiu 6kg'
]
console.log('Sarase yra' + pirkiniai.length + 'pirkiniai(-iu)') 
for (let pirkinys of pirkiniai){
console.log("-" + pirkinys)
}

/* 19.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą
duomenimis. Raskite pažymių vidurkį. Išveskite visus šiuos pažymius ir
gautą vidurkį. */

let pazymiai0 = [5, 7, 3, 9, 10, 6, 2]
let suma = 0
for (const pazymiai of pazymiai0) {    
    suma += pazymiai
}
let vidurkis = suma / pazymiai.length
console.log('Studento pazymiai:', pazymiai.join (', '))
console.log('Pazymiu vidurkis:', vidurkis)

/* 20.Susikurkite masyvą kelionės nuovažiuotiems kilometrams saugoti ir
užpildykite jį duomenimis (pvz 120, 145, 90 ir pan., kur kiekvienas skaičius
reiškia kiek km kurią dieną buvo nuvažiuota). Išveskite visus nuvažiuotus
per dieną kilometrus, kurie yra didesni nei 150. */

let kilometrai = [120, 145, 90, 185, 664]
let suma1 = 0
for (let km of kilometrai) {
   if  (km > 150 ){
    console.log(km)   
}
   }

/* 21.Susikurkite masyvą failų pavadinimams saugoti, užpildykite jį duomenimis.
Jums reikės nuskaityti šiuos failus, todėl pirma norėsite patikrinti su kuriais
galite dirbti. Išveskite į ekraną tik tuos failus, kurių galūnė yra .txt
arba .json tipo.  */

let failai = ['dokumentai.txt', 'pamokos.json', 'estafetes.txt', 'darbas.txt', 'projektas.json' ,'img', 'draugai']
for (let failas of failai) {
if (failas.endsWith('.txt')){
  console.log(failas)}
else if (failas.endsWith('.json')){
  console.log(failas)}
}

/*  arba

const failuPavadinimai = ['dokumentai.txt', 'pamokos.json', 'estafetes.txt', 'darbas.txt', 'projektas.json' ,'img', 'draugai']
for(const pavadinimas of failuPavadinimas){
  if pavadinimas.endsWith('.txt') || pavadinimas.endsWith('.json'){
    console.log(pavadinimas)
  }
}
*/

/* 22.Susikurkite masyvą automobilių markėms saugoti ir užpildykite jį
duomenimis. Išveskite kiekvieną automobilį atskiroje eilutėje, nurodant
kiek raidžių sudaro jo pavadinimą.  */

let auto = ['Mithubishi', 'Audi', 'Toyota', 'Mustang', 'BMW']
for (let car of auto){
  console.log(car + "-" + car.length)            //length - pasako kiek raidziu yra 
}

/* 23.Susikurkite masyvą įvykusių klaidų kodams saugoti ir užpildykite šį masyvą
duomenimis. Tuomet išveskite visas sukauptas klaidas administratoriui,
taip, kad jis suprastų kas per klaidos įvyko. Pavyzdžiui, jeigu yra kodas
"ui87", tai kad išvestų "Grafinės sąsajos klaida navigacijoje", arba jeigu
kodas "sys12", tuomet "Trūksta operatyviosios atminties sistemoje" ir pan. */

let errorCodes = ['ui87', 'sys12', ', net404', 'db500']
let errorMessenger = [
  'Grafines sasajos klaida navigacijoje', 
  'Truskta operatyvios atminties sistemoje',
  'Tinklo klaida: pusla[is nerastas',
  'Duomenu bazes klaida'
]
for(let errorCode of errorCodes) {
    let index = errorCodes.indexOf(errorCode)
    if(index !== -1) {
        console.log(errorCode + ": " + errorMessenger[index])
    } else {
        console.log(errorCode + ': Nezinoma klaida')
    }
}

/* 24.Susikurkite masyvą sandėlio likučiams saugoti (kiekvienas atskiras narys masyve
yra atskiros prekės likutis). Su kiekvienu likučiu paskaičiuokite per kiek dienų bus
išpirktas, jei per dieną vidutiniškai yra nuperkami 5 vnt. Išveskite atsakymus
atskirose eilutėse, nurodant kiek yra dabar ir kiek dienų užteks jo. Pavyzdžiui, jeigu
yra likučiai 74, 54 ir 32, tai 74 vnt. prekės užteks maždaug 15 dienų, 54 vnt. prekės
užteks maždaug 11 dienų ir t.t. */

let likuciai = [74, 54, 32, 100, 22]
let vidPardavimuKiekis = 5
for (let likutis of likuciai){
  let dienos = Math.ceil(likutis / vidPardavimuKiekis)
  console.log(likutis + 'vnt.prekes uzteks mazdaug' + dienos + 'dienu')
}

/* 25.Susikurkite masyvą studento pažymiams saugoti. Užpildykite šį masyvą atsitiktinai
sugeneruotais pažymiais. Raskite vidurkį. Raskite kiek neigiamų pažymių studentas
gavo (mažesnių nei 5). Išveskite visus teigiamus pažymius, gautą vidurkį ir neigiamų
pažymių kiekį. */

let pazym = []
for (let i = 0; i <10; i++){
pazym.push(Math.floor(Math.random()* 10)+1)
}

let ave1 = 0
let neigiami = 0

for (const pazymys of pazym){
  ave1 += pazymys
  if (pazymys < 5){
    neigiami++
  } else {
    console.log(pazymys)
  }
}

ave1 /= pazym.length

console.log('Visi pazymiai:', pazym.join(','))         //-visus pazymius issispausdinom
//console.log('Teigiami pazymiai', pazym.join (','))      - nebereikalingas
console.log('Vidurkis', ave.toFixed(2))
console.log('Neigiamu pazymiu kiekis:', neigiami)

/*26.Susikurkite du pažymių masyvus, kur vienas masyvas reikš vieno studento
pažymius, kitas masyvas kito studento pažymius. Raskite kiekvieno
studento pažymių vidurkį. Išveskite abiejų studentų pažymius, vidurkius ir
nurodykite kuris studentas turi didesnį vidurkį.  */

let studentas3 =  [6,7,2,9,5,3,8]
let studentas4 = [8,5,3,9,8,6,3]

vid1 = 0
vid2 = 0

for (const paz1 of studentas3)[
  vid1 += paz1
]
vid1 /= studentas3.length

for (const paz2 of studentas4){
  vid2 += paz2
}
vid2 /= studentas4.length

console.log('Pirmo studento pazymiai:' , studentas3.join(', '))
console.log('Antro studento pazymiai:' , studentas4.join(', ')) 
console.log("Pirmo studento pazymiai:", vid1.toFixed(2))
console.log("Antro studento pazymiai:",  vid2.toFixed(2)) 

if (vid1 > vid2){
  console.log('Pirmas studentas turi didesni vidurki')
} else if(vid2 > vid1){
  console.log("Antras studentas turi didesni vidurki");
} else {
  console.log("Abu studentai turi vienoda vidurki");
}

/*27.Susikurkite masyvą norimiems žodžiams saugoti. Užpildykite šį masyvą
duomenimis. Į kitą masyvą atrinkite tuos žodžius, kurie yra trumpi (sudaro
mažiau nei 5 raidės). Išveskite pradinius duomenis ir atrinktus. */


let zod = ['obuolys', 'kate', 'stalas', 'pieva', 'bulve', 'aukstas']
let atrinkti = []

for (const zodis of zod){
if (zodis.length < 5 ) {
  atrinkti.push(zodis) 
}
}
console.log ('Pradiniai zodiai:', zodziai.join(', '))
console.log('Atrinkti zodziai', atrinkti.join(' ,'))


//Objektai

/* 1. Sukurkite objektą studento duomenims saugoti. Į šį objektą sudėkite
tokias savybes su reikšmėmis: vardas, pavardė, amžius, studijų programa,
atsiskaitytų kreditų skaičius, pažymiai, amžius, ūgis, kelintame kurse
mokosi, kurioje mokykloje mokosi. Šiuos duomenis galite grupuoti į
vidinius objektus arba visus išrašyti atskirai. Išveskite šią informaciją per
vieną console.log(). Taip pat, pamėginkite išvesti atskirose eilutėse tris
skirtingas pasirinktas savybes.  */

let duomenys = {
  Vardas: 'Kristina',
  Pavarde: 'Kazlauskaite',
  Amzius : 24,
  StudijosPrograma: 'JavaScript',
  AtsiskaitytosKreditosSkaičius: 4,
  Pazymiai: [ 6, 7, 8, 9, 10, 7, 7, 8, 10],
  Ugis: 1.71,
  Kursas : 1,
  Mokykla: 'Vilniaus Codding School'
}
console.log(duomenys)
console.log(duomenys.Vardas)
console.log(duomenys.Pavarde)
console.log(duomenys.Pazymiai)

/* 2. Sukurkite objektą informacijai apie filmą saugoti. Į šį objektą sudėkite
tokias savybes su reikšmėmis: pavadinimas, režisierius, biudžetas, kiek
uždirbo pinigų po išleidimo, žanras, trukmė, išleidimo metai, aktorių
sąrašas (masyvas su jų vardais ir pavardėmis). Išveskite šio objekto
informaciją. Paskaičiuokite ir išveskite šio filmo pelną (uždarbis -
biudžetas). Išveskite kiek filme dalyvavo aktorių (jų kiekis). Paskaičiuokite
kiek filmui yra metų (dabartinius metus tiesiog galite įrašyti rankomis arba
panaudoti new Date(Date.now()).getFullYear() funkciją). */

let filmas = {
  Pavadinimas: "Greiti ir isiute 5",
  Rezisierius: "Statys",
  Biudzetas: 30000,
  Uzdirbo: 50000,
  Zanras: "Veikslo, Trileris",
  Trukmė: 2.30,
  Isleidimo_metai: 2006,
  Aktoriai: ['Dveinas Džonsonas', 'Elsa Pataky', 'Polas Volkeris', 'Vinas Dieselis'] ,
}
console.log(filmas)
console.log(`pelnas: ${filmas.Uzdirbo-filmas.Biudzetas}`)
console.log(filmas.Aktoriai.length)
console.log(`Sukurtas pries: ${new Date(Date.now(2024)) .getFullYear()-filmas.Isleidimo_metai} metu.`)

/* 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename
objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius,
žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais),
išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų
informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei
kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos
kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?  */

let knyga1 = {
  pavadinimas: 'Jonukas ir Grytute',
  autorius: 'Stasys Povilaitis',
  zanras: 'Trileris',
  kaina: 200, 
  puslapiu_kiekis: 120,
  skyriu_sarasas: ['1-Kelione i miska', '2-Sutikimas su Vilku', '3-Miegojimas lauke palapineje', '4-Gryzimas namo'],
  isleidim_metai: 1994, 
  knyga_galima_rasti_knygynuose: true
} 
let knyga2 = {
  pavadinimas: 'Dedes ir dedienes',
  autorius: 'Dzordana Butkute',
  zanras: 'Romantika',
  kaina: 60, 
  puslapiu_kiekis: 71,
  skyriu_sarasas: ['1-Pirmas skyrius', '2-antras skyrius', '3-Trecias skyrius'],
  isleidim_metai: 1998, 
  knyga_galima_rasti_knygynuose: true
}
console.log(knyga1, knyga2)
console.log(knyga1.puslapiu_kiekis < knyga2.puslapiu_kiekis ? 'pirma knyga ilgesne': 'antra knyga ilgesne')
console.log(knyga1.skyriu_sarasas.length > knyga2.skyriu_sarasas.length ? 'Pirma knyga turi daugiau skyriu': 'antra knyga turi daugiau skyriu' )
if(knyga1.kaina > knyga2.kaina) {
  if(knyga2.kaina*2 > knyga1.kaina) {
  console.log(`Dvi pigesnes knygos kainuoja daugiau nei viena brangesne`)
} else {
  console.log(`Brangesne knyga kainuoja daugiau nei dvi pigesnes`)
}  
}else {
  if(knyga1.kaina*2 > knyga2.kaina){
    console.log(`Dvi pigesnes knygos kainuoja daugiau nei viena brangesne`)
} else {
  console.log(`Brangesne knyga kainuoja daugiau nei dvi pigesnes`)
}  
}

/* 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte
sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas,
turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite
visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje
(pirma prekė kainuoja - ..., antra prekė kainuoja - ..., ir t.t.). Raskite ir
išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą
rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos
prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės
pelningumą ((kaina - savikaina) * kiekis sandėlyje).  */

let objektas1 = {
  pavadinimas: "daiktas 1",
  kaina: 20,
  savikaina: 12,
  kodas: 1234,
  kiekis: 202,
  matmenys: {
    x: 1,
    y: 3,
    z: 5,
  }
}
let objektas2 = {
  pavadinimas: "daiktas 2",
  kaina: 40,
  savikaina: 21,
  kodas: 1334,
  kiekis: 22,
  matmenys: {
    x: 5,
    y: 4,
    z: 5,
  }
}
let objektas3 = {
  pavadinimas: "daiktas 3",
  kaina: 10,
  savikaina: 4,
  kodas: 1134,
  kiekis: 212,
  matmenys: {
    x: 2,
    y: 3,
    z: 1,
  }
}

console.log(
  "pirmo info",
  objektas1,
  "antro info",
  objektas2,
  "trecio info",
  objektas3
);
console.log(
  "pirmo kaina",
  objektas1.kaina,
  "antro kaina",
  objektas2.kaina,
  "trecio kaina",
  objektas3.kaina
)


if (objektas1.kaina > objektas2.kaina && objektas1.kaina > objektas3.kaina) {
  console.log("brangiausias", objektas1);
} else if (
  objektas2.kaina > objektas1.kaina &&
  objektas2.kaina > objektas3.kaina
) {
  console.log("brangiausias", objektas2);
} else {
  console.log("brangiausias", objektas3);
}


console.log(
  "1prekes turis",
  objektas1.matmenys.x * objektas1.matmenys.y * objektas1.matmenys.z
)
console.log(
  "2prekes turis",
  objektas2.matmenys.x * objektas2.matmenys.y * objektas2.matmenys.z
)
console.log(
  "3prekes turis",
  objektas3.matmenys.x * objektas3.matmenys.y * objektas3.matmenys.z
)
console.log(
  "pirmos prekes pelningumas",
  (objektas1.kaina - objektas1.savikaina) * objektas1.kiekis
)
console.log(
  "antros prekes pelningumas",
  (objektas2.kaina - objektas2.savikaina) * objektas2.kiekis
)
console.log(
  "trecios prekes pelningumas",
  (objektas3.kaina - objektas3.savikaina) * objektas3.kiekis
)


/*                                   
let preke1 = {
  pavadinimas: 'preke1',
  kaina: 2000,
  savikaina: 100,
  kodas: '123456789',
  turimas_kiekis: 365,
  dezes_matmenys:{
  turimas_x: 10,
  turimas_y: 20,                        //kazkas netaip
  turimas_z: 30
  }
}
let preke2 = {
  pavadinimas: "preke2",
  kaina: 680,
  savikaina: 1200,
  kodas: "987654321",
  turimas_kiekis: 697,
  dezes_matmenys: {
    turimas_x: 20,
    turimas_y: 60,
    turimas_z: 50,
  }
}
let preke3 = {
  pavadinimas: "preke3",
  kaina: 500,
  savikaina: 80,
  kodas: "4377542896",
  turimas_kiekis: 500,
  dezes_matmenys: {
    turimas_x: 10,
    turimas_y: 10,
    turimas_z: 20,
  }
}

console.log('preke1:', preke1)
console.log('preke2:', preke2)
console.log('preke3:', preke3)

console.log(`preke 1 kainuoja- ${preke1.kaina}, preke 2 kainuoja - ${preke2.kaina}, preke 3 kainuoja - ${preke3.kaina}`) 

const prekes0 = [preke1, preke2, preke3];
let brangiausiapreke = prekes0[0];

for (let i = 1; i < prekes0.length; i++){
  if(prekes0[i].kaina > brangiausiapreke.kaina) {
    brangiausiapreke = prekes0[i];
  }
}
console.log(`Brangiausia preke1: ${preke1.dezes_matmenys.x * preke1.dezes_matmenys.y * preke1.dezes_matmenys.z}`)
console.log(`Brangiausia preke2: ${preke2.dezes_matmenys.x * preke2.dezes_matmenys.y * preke2.dezes_matmenys.z}`)
console.log(`Brangiausia preke3: ${preke3.dezes_matmenys.x * preke3.dezes_matmenys.y * preke3.dezes_matmenys.z}`)

console.log(`Pelningumas prekei1: ${(preke1.kaina - preke1.savikaina) * preke1.turimas_kiekis}`)
console.log(`Pelningumas prekei2: ${(preke2.kaina - preke2.savikaina) * preke2.turimas_kiekis}`)
console.log(`Pelningumas prekei3: ${(preke3.kaina - preke3.savikaina) * preke3.turimas_kiekis}`)  */  


/*  5. Sukurkite objektą automobilio duomenims saugoti. Į šį objektą savybes su
reikšmėmis sukelkite, po to kai sukursite tuščią objektą (10-as pavyzdys).
Sudėkite šias savybes su reikšmėmis: markė, modelis, rida, gamybos metai,
spalva, darbinis tūris, ar daužta, ar parduodama. Išveskite visą automobilio
informaciją. Paskaičiuokite ir išveskite kiek automobiliui yra metų (rankomis
įrašykite dabartinius metus arba panaudokite new
Date(Date.now()).getFullYear() funkciją). Paskaičiuokite ir išveskite kiek
vidutiniškai per metus yra nuvažiavęs automobilis (jeigu viso nuvažiavo 300
kilometrų, o automobiliui yra 2 metai, tai per metus vidutiniškai gaunasi 150 km.). */

let autoinfo = {};
autoinfo.marke = "bmw";
autoinfo.modelis = "a7";
autoinfo.rida = 160000;
autoinfo.metai = 1999;
autoinfo.spalva = "raudona";
autoinfo.darbinisturis = 55;
autoinfo.bukle = "dauzta";
autoinfo.pardavimas = "parduodama";
autoinfo.amzius = new Date(Date.now()).getFullYear() - autoinfo.metai;

console.log(autoinfo);
console.log(
  "vidutinis nuvaziuotas km per metus ",
  autoinfo.rida / autoinfo.amzius
)

/*  6. Sukurkite savo norimą objektą(-us). Kiekviename sudėkite bent 5 savybes
su reikšmėmis (reikšmes galite įdėti ir atskirai). Išveskite informaciją.
Pagalvokite ką dar galite su šiuo objektu atlikti (paskaičiuoti ir pan.) ir tai
padarykite. */

let pakuote = {
  pavadinimas: "lg2005 televizorius ",
  kaina: 1000,
  savikaina: 900,
  kodas: 1134,
  kiekis: 35,
  matmenys: {
    x: 200,
    y: 120,
    z: 220,
  },            //gali but kad kazko truksta
};

console.log(pakuote);


/*  7. Susikurkite objektą informacijai apie knygyną saugoti. Į šį objektą sudėkite
tokias savybes su reikšmėmis: pavadinimas, adresas, plotas (kv. m.), kiek
turi knygų, darbo valandos, ar atidarytas. Išveskite šio knygyno objekto
raktus su reikšmėmis. Tuomet išveskite visas knygyno savybes, kurių
reikšmės yra ne string tipo (plotas, kiek turi knygų ir pan.). */

let knygynas = {
  pavadinimas: "knygynas",
  adresas: "Liepu Aleja-4",
  plotas: 500,
  VisoKnygu: 6000 ,
  darbo_valandos: 'Pirmadieniais-Penktadieniais: 8-17, Sestadieniais: 10:00 - 14:00',
  atidarytas: true,
}
for (const savybe in knygynas){
  console.log(`${savybe} : ${knygynas[savybe]}`)
}
for (const raktas in knygynas){
  if(typeof knygynas[raktas] !='string'){
    console.log(raktas)
  }
}

/* 8. Susikurkite du objektus, dviejų studentų informacijai saugoti. Abiejuose
objektuose sudėkite šias savybes su reikšmėmis: vardas ir pavardė, studijų
programos pavadinimas, pažymiai. Raskite abiejų studentų pažymių
vidurkius. Išveskite abiejų studentų informaciją, bei pažymių vidurkius.
Raskite ir išveskite, kurio studento pažymių vidurkis yra didesnis ir
išveskite jo vardą su pavarde. */

const studentas1 = {
  vardas: "Jonas",
  pavarde: "Jonaitis",
  studijuPrograma: "Informatika",
  pazymiai: [8, 9, 7, 10, 8],
}
const studentas2 = {
  vardas: "Marius",
  pavarde: "Mariukas",
  studijuPrograma: "Ekonomika",
  pazymiai: [9, 7, 6, 8, 9],
}
let pazymiuSuma = 0;
for (const pazymys of studentas1.pazymiai) {
  pazymiuSuma += pazymys;
}
const vid5 = pazymiuSuma / studentas1.pazymiai.length;

pazymiuSuma = 0;
for (const pazymys of studentas2.pazymiai) {
  pazymiuSuma += pazymys;
}
const vid6 = pazymiuSuma / studentas2.pazymiai.length;
console.log(`Pirmo studento duomenys:`);
for (const savybe in studentas1) {
  console.log(`${savybe}: ${studentas1[savybe]}`);
}
console.log(`Vidurkis: ${vid5}`);

console.log(`Antro studento duomenys:`);
for (const savybe in studentas2) {
  console.log(`${savybe}: ${studentas2[savybe]}`);
}
console.log(`Vidurkis: ${vid6}`);

console.log(
  vid5 > vid6
    ? `Studentas ${
        studentas1.vardas + " " + studentas1.pavarde
      } turi didesnį vidurkį`
    : `Studentas ${
        studentas2.vardas + " " + studentas2.pavarde
      } turi didesnį vidurkį`
)


/* 9. Pagal 16-ą pavyzdį, pritaikykite skriptą prie kitos esybės, t.y. sukurkite tokį
objektą, kuriame turėtumėte tam tikrų savybių, bei metodą/funkciją, kuri
kažką paskaičiuotų iš objekto duomenų. Šio objekto informacijos ir
atsakymų išvedimas irgi būtų panašus į duotą nurodytame pavyzdyje. */

let studentass = {
  vardas_pavarde: 'Vardenis Pavardenis',
  pazymiai: [7,8,10,9,7,8],
  vidurkis: function(){
    let suma = 0;
    for (const pazymys of this.pazymiai) {
      suma += pazymys;
    }
    return suma / this.pazymiai.length;
  }
}
console.log('STUDENTAS', studentass, '\n');
console.log("JO PAZYMIAI", studentass.pazymiai, "\n");
console.log("PAZYMIU VIDURKIS", studentass.vidurkis ());


/* 10.Pagal 18-ą pavyzdį, pritaikykite skriptą prie kitos esybės. Išveskite visą
objekto informaciją per atskirą nuo objekto console.log(), taip pat, išveskite
tam tikrą pasirinktą informaciją pasinaudojant funkcija/metodu iš objekto. */

let preke = {
  pavadinimas: "Preke",
  kodas: '65864658656975',
  kaina: 5.99,
  kiekis_sandelyje: 6432,
  pardavus: function () {
    console.log('pardavus preke galetume uzdirbti:', (this.kaina * this.kiekis_sandelyje));
  }
}
console.log('preke:', preke, '\n');
preke.pardavus();

/* 11.Susikurkite knygų objektų masyvą. Apie kiekvieną knygą į atskirus knygų objektus
sudėkite norimą informaciją (bent 3 savybes). Į masyvą įdėkite bent 3 knygas. Visas
šias knygas išsiveskite. Tuomet parodykite pirmą knygą. Antros knygos kažkurią
savybę.  */

let knygos = [
  {pavadinimas: 'Apie draugyste', kaina: 29.99, autorius: 'Vardenis Pavardenis'},
  {pavadinimas: 'Misle', kaina: 68.55, autorius: 'Kazys Rukauskas'},
  {pavadinimas: 'Apie gyvenima', kaina: 167.99, autorius: 'Antanas Antanavicius'}
]
console.log('Knygos knygyne:');

for (const knyga of knygos){
  console.log(` ${knyga.pavadinimas} ${knyga.kaina}eur`)
}

/* 12.Susikurkite prekių objektų masyvą ir jį užpildykite pasirinktais duomenimis.
Išveskite visų prekių pavadinimus su kainomis ir dar kokiais nors atributais
atskirose eilutėse.  */

let prekes = [
  {pavadinimas: 'Kompiuteris', kaina: 1067.99},
  {pavadinimas: 'Monitorius', kaina: 265.99},
  {pavadinimas: 'Stalas', kaina: 167.99}
]
console.log('Prekes parduotuveje:');

 for (const preke of prekes){
   console.log(` ${preke.pavadinimas} ${preke.kaina}eur`);
 }


/* 13.Susikurkite automobilių objektų masyvą ir užpildykite jį pasirinktais duomenimis.
Išveskite kiekvieno automobilio pavadinimą, metus ir paskaičiuotą jo amžių
(dabartiniai metai - gamybos metai). */

let automobiliai = [
  { marke: "Audi", metai: 2006},
  { marke: "Audi", metai: 2006 },
  { marke: "BMW", metai: 2008 },
  { marke: "Volkswagen", metai: 1970 },
  { marke: "Mercedes", metai: 2014 },
  { marke: "Volvo", metai: 2000 },
]
for (const automobilis of automobiliai) {
    autoAmzius = 2024 - automobilis.metai
    console.log(automobilis.marke)
    console.log(automobilis.metai)
    console.log(automobilis.marke, autoAmzius, 'metų amžiaus.')
}

/* 14.Susikurkite objektų masyvą įmonių duomenims saugoti ir jį užpildykite
duomenimis. Išveskite kiekvienos įmonės informaciją atskirose eilutėse,
gražiai suformatuotai (sakinio pavidalu ar pan.). Taip pat, ką nors
paskaičiuokite iš turimų skaitinių duomenų (pvz.: vidutinis įmonės amžius,
darbuotojų kiekis per visas įmones, bendras pelnas, ar pan.).  */

const imones = [
  {
    pavadinimas: "UAB Teknologija",
    įkūrimoMetai: 2000,
    darbuotojųKiekis: 150,
    pelnas: 1000000,
  },
  {
    pavadinimas: "AB Mediena",
    įkūrimoMetai: 1995,
    darbuotojųKiekis: 300,
    pelnas: 800000,
  },
  {
    pavadinimas: "UAB Maistas",
    įkūrimoMetai: 2010,
    darbuotojųKiekis: 75,
    pelnas: 500000,
  },
]
console.log("Įmonių informacija:");
for (const imone of imones) {
  const dabartiniaiMetai = new Date().getFullYear();
  const imonesAmzius = dabartiniaiMetai - imone.įkūrimoMetai;

  console.log(`Pavadinimas: ${imone.pavadinimas}`);
  console.log(`Įkūrimo metai: ${imone.įkūrimoMetai}`);
  console.log(`Įmonės amžius: ${imonesAmzius} metai`);
  console.log(`Darbuotojų kiekis: ${imone.darbuotojųKiekis}`);
  console.log(`Pelnas: ${imone.pelnas} EUR`);
  console.log("------------");
}
let bendrasDarbuotojųKiekis = 0
  for (const darbuotojai in imones) {
    bendrasDarbuotojųKiekis += imones[darbuotojai].darbuotojųKiekis
  }
  console.log(`Bendras darbuotojų kiekis per visas įmones: ${bendrasDarbuotojųKiekis}`)

  let bendrasPelnas = 0
  for (const pelnas in imones) {
    bendrasPelnas += imones[pelnas].pelnas;
  }
  console.log(`Bendras pelnas per visas įmones: ${bendrasPelnas} EUR`);


/*  15.Susikurkite objektų masyvą ligoninių duomenims saugoti ir užpildykite jį
pasirinktais duomenimis. Išveskite ligoninių pavadinimus su adresais
skirtingose eilutėse. Suskaičiuokite ką nors iš skaitinių jų duomenų, pvz.:
bendrą lankytojų kiekį, bendrą ar vidutinį darbuotojų kiekį, ar pan. */

const ligonines = [
  {
    pavadinimas: "Vilniaus universiteto ligoninė",
    adresas: "Maironio g. 2, Vilnius",
    lankytojųKiekis: 50000,
    darbuotojųKiekis: 1500,
  },
  {
    pavadinimas: "Santaros klinikos",
    adresas: "Santariskiu g. 2, Vilnius",
    lankytojųKiekis: 60000,
    darbuotojųKiekis: 1800,
  },
  {
    pavadinimas: "Vilniaus Šv. M. Marijos ligoninė",
    adresas: "Maironio g. 9, Vilnius",
    lankytojųKiekis: 40000,
    darbuotojųKiekis: 1200,
  }
]
console.log("Ligoninių informacija:");
for (const ligonine of ligonines) {
  console.log(`Pavadinimas: ${ligonine.pavadinimas}`);
  console.log(`Adresas: ${ligonine.adresas}`);
  console.log("------------");
}

const bendrasLankytojųKiekis = ligonines.reduce(
  (suma, ligonine) => suma + ligonine.lankytojųKiekis, 0
)
console.log(
  `Bendras lankytojų kiekis per visas ligonines: ${bendrasLankytojųKiekis}`
)
console.log("------------");
  
/*  16.Susikurkite studentų objektų masyvą, kur apie kiekvieną studentą būtų
žinoma ši informacija: vardas ir pavardė, amžius, pažymiai, studijų
programa, kursas. Kiekvieną studentą išveskite taip: pirmoje eilutėje visi
studento duomenys išskyrus jo pažymius, antroje eilutėje jo pažymiai,
trečioje jo pažymių vidurkis su prierašu 'pažymių vidurkis'. Išvedus visus
studentus dėkite brūkšnį (pvz.: -----) ir išveskite bendrą visų studentų
pažymių vidurkį. */

 studentai = [
   {vardas: 'Antanas',
   pavarde: 'Antanavicius',
   amzius: '25',
   pazymiai: [8,9,7,9,8,10,9,7,8],
   studPrograma: 'Biologija', 
   kursas: 3},
  {
    vardas: "Birute",
    pavarde: "Antaniene",
    amzius: "49",
    pazymiai: [6,7,8,5,5,8,8,9,10],
    studPrograma: "Chemija",
    kursas: 2},
  {
    vardas: "Jonas",
    pavarde: "Jonavicius",
    amzius: "43",
    pazymiai: [7,5,7,9,6,4,6,8,4],
    studPrograma: "Matematika",
    kursas: 1},
]

console.log('studentu informacija;')
for(let i = 0 ; i < studentai.length ; i++) {
  let studentas = studentai[i];

  console.log(`studentas: ${studentas.vardas} ${studentas.pavarde}, ${studentas.amzius} m., studiju programa: ${studentas.pazymiai} ${studentas.studPrograma}, kursas: ${studentas.kursas} `)

console.log('pazymiai:', studentas.pazymiai.join(' '));

let pazymiuSuma = 0
for (let j = 0 ; j < studentas.pazymiai.length ; j++) {
  pazymiuSuma += studentas.pazymiai[j]
}
const pazymiuVidurkis = pazymiuSuma / studentas.pazymiai.length
console.log(`pazymiuVidurkis: ${pazymiuVidurkis.toFixed(2)}`)
}
console.log('-----------------------')

let bendraSuma = 0
for(let i = 0; i < studentai.length; i++){
  let studentoSuma = 0
  for (let j = 0; k < studentai [i].pazymiai.length; j++){
    studentoSuma += studentai[i].pazymiai[j]
  }
  bendraSuma += studentoSuma
}
let bendrasvidurkis = bendraSuma / (studentai.length * studentai[0].pazymiai.length)
console.log("Bendras visu studentu pazymiu vidurkis: " + bendrasvidurkis.toFixed(2))

/* 17.Susikurkite parduotuvės objektą, kuriame būtų ši informacija:
pavadinimas, adresas, darbuotojų kiekis, prekių objektų masyvas. Apie
kiekvieną prekę parduotuvėje žinoma ši informacija: pavadinimas; kodas;
kaina; savikaina; turimas kiekis. Išveskite parduotuvės bendrą informaciją,
tuomet užrašą "prekės" ir atskirose eilutėse turimas prekes su kuria nors
jų informacija (pvz.: pavadinimai, kainos ir turimi kiekiai). Galiausiai
paskaičiuokite kiek iš viso parduotuvė turi visų prekių (sudėkite jų kiekius).
Raskite ir išveskite kurios prekės turima daugiausiai, o kurios mažiausiai. */

 let parduotuve  = {
  pavadinimas: "Mano parduotuve",
  adresas: "Maironio g. 2, Vilnius",
  darbuotojuKiekis: 10,
  prekes: [
    {
      pavadinimas: "Televizorius",
      kodas: 'TV123',
      kaina: 500,
      savikaina: 350,
      turimasKiekis: 50,
 },
 {
      pavadinimas: "Saldytuvas",
      kodas: 'FR456',
      kaina: 700,
      savikaina: 450,
      turimasKiekis: 30,
 },
 {
      pavadinimas: "Mobilus telefonas",
      kodas: 'MP789',
      kaina: 300,
      savikaina: 200,
      turimasKiekis: 100,
 }
]
}
console.log("Parduotuves informacija:")
console.log("Pavadinimas:" + parduotuve.pavadinimas)
console.log("Adresas:" + parduotuve.adresas)
console.log("Darbuotoju kiekis:" + parduotuve.darbuotojuKiekis)
console.log("------------")

console.log("Prekes:" );
for (let i = 0; i < parduotuve.prekes.length; i++){
  let preke = parduotuve.prekes[i]
  console.log("Pavadinimas:" + preke.pavadinimas)
  console.log("Kodas:" + preke.kodas)
  console.log("Kaina:" + preke.kaina + "EUR")
  console.log("Savikaina:" + preke.savikaina + "EUR") 
  console.log("Turimas kiekis:" + preke.turimasKiekis)
  console.log("------------")
}

let bendrasPrekiuKiekis = 0
for (let i = 0; i < parduotuve.prekes.length; i++){
  bendrasPrekiuKiekis += parduotuve.prekes[i].turimasKiekis
}
console.log("Bendras visu prekiu kiekis parduotuveje:" + bendrasPrekiuKiekis + "vnt.")

let daugiausiai = parduotuve.prekes[0]
let maziausiai = parduotuve.prekes[0]

for(let i = 1; i < parduotuve.prekes.length; i++){
  let preke = parduotuve.prekes [i]
  if (preke.turimasKiekis > daugiausiai.turimasKiekis){
    daugiausiai = preke
  }
  if(preke.turimasKiekis < maziausiai.turimasKiekis){
    maziausiai = preke
  }
}
console.log("Preke, turima daugiausiai:" + daugiausiai.pavadinimas)
console.log("Preke, turima maziausiai:" + maziausiai.pavadinimas)

/* pvz

 6, 8, 3, 7

let a = 6
let b = 6   

if (3 > a){        //3 keiciasi   
  a = 8           //(b) eina per kiekviena ir klausia ar jis yra didesnis uz a
}

if (3 < b){
    b = 8
} */

/* 18.Sukurkite norimą objektų masyvą su norimais duomenimis. Atlikite
išvedimus ir pasirinktus skaičiavimus.  */

let zmones  =[
  {
    vardas: "Jonas",
    pavarde: "Jonavicius",
    amzius: 35,
    atlyginimas: 2500,
  },
  {
    vardas: "Marius",
    pavarde: "Mariukas",
    amzius: 28,
    atlyginimas: 2000,
  },
  {
    vardas: "Laura",
    pavarde: "Lauraite",
    amzius: 32,
    atlyginimas: 2800,
  },
]       

console.log("Darbutojai:")
for(let i = 0; i < zmones.length; i++){
  const zmogus = zmones [i]
  console.log(`Vardas: ${zmogus.vardas}`)
  console.log(`Pavarde: ${zmogus.pavarde}`);
  console.log(`Amzius: ${zmogus.amzius} metai`);
  console.log(`Atlyginimas: ${zmogus.atlyginimas} EUR`);
  console.log("------------")
}

let atlyginimuSuma = 0
for (let i =  0; i < zmones.length; i++){
  atlyginimuSuma += zmones [i].atlyginimas
}
const vidutinisAtlyginimas = atlyginimuSuma / zmones.length
console.log(`Vidutinis atlyginimas: ${vidutinisAtlyginimas.toFixed(2)} EUR`)

let vyriausias = zmones [0]
let jauniausias = zmones [0]

for(let i = 1; i < zmones.length; i++){
  const zmogus = zmones [i]
  if(zmogus.amzius > vyriausias.amzius){
    vyriausias = zmogus
  }
  if(zmogus.amzius < jauniausias.amzius){
    jauniausias = zmogus
  }
}
console.log(`Vyriausias zmogus: ${vyriausias.vardas} ${vyriausias.pavarde}, ${vyriausias.amzius} metai`)
console.log(`Jauniausias zmogus: ${jauniausias.vardas} ${jauniausias.pavarde}, ${jauniausias.amzius} metai`
);