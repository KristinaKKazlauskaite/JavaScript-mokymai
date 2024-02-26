// ES6+ funkcijos ir visokios kitokios naudingos funkcijos --------------------- EkmaScript

//literals -
//string literals - kai rasome su kabutemis
//temple literals - kai rasome apostrofas

//string literals
let messenge1 = "This is my\n" + "'first' message"; //  \' '  - ignoruok kabute kad nesielgtu kaip kabute                                    // isspausdina pacia kabute

console.log(messenge1);

//template literals (1)
let messenge11 = `This is my 
 'first' 
 message`;

console.log(messenge11);

//template literals (2)
console.log(`4 + 5 = ${4 + 5}`);
console.log(`2 * 2 + 2 = ${2 * 2 + 2}`);

//template literals (3)
let vardas = "Tom";
let messenge3 = `Hi: ${vardas},
  
Thank you for joining my mailing list.

Regards,
Ieva.`;

console.log(messenge3);

//Teksto ilgis (simbolių kiekis)
let message = "This is my first message";
console.log(message.length); //isspausdino kiek raidziu

//Konkrečios raidės (simboliai) iš teksto
console.log(message[0]); // T
console.log(message[5]); //     .ant kelintos raides

//Ar tekstas prasideda / baigiasi nurodytais simboliais?
console.log(message.startsWith("This")); //true
console.log(message.startsWith("this")); //false
console.log(message.startsWith("e")); //true

//Ar yra tekste nurodyti simboliai (arba žodžiai)
console.log(message.includes("my")); //true   //jis tikrina ar toks daiktas egzistuoja
console.log(message.includes("kava")); //false  //ar egzistuoja kava

//Kurioje pozicijoje prasideda nurodytas tekstas
console.log(message.indexOf("my")); //8  //kelinta raide yra my  .ziuri kas eina po m raides
console.log(message.indexOf("message"));

//Simbolių (žodžių) pakeitimas kitais
console.log(message.replace("first", "second")); // grąžina naują string ir nekeičia originalo
// This is my second message

//Raidžių pavertimas didžiosiomis / mažosiomis
console.log(message.toUpperCase()); // returns new string
console.log(message.toLowerCase()); // returns new string

//Teksto apkarpymas
const messageToTrim = "     some text      ";
console.log(messageToTrim);
console.log("." + messageToTrim.trim() + "."); // apkarpys iš abiejų pusių
console.log("." + messageToTrim.trimStart() + "."); // apkarpys iš kairės
console.log("." + messageToTrim.trimEnd() + "."); // apkarpys iš dešinės
console.log(messageToTrim.trim());

//Masyvo papildymas
let skaiciaiPild = [9, 4, 2];
skaiciaiPild.push(-3); // Pridėjimas gale

console.log(skaiciaiPild);
skaiciaiPild.unshift(-1); // Pridėjimas priekyje
console.log(skaiciaiPild);

skaiciaiPild.splice(2, 0, -10, -7); // Pridėjimas viduryje
console.log(skaiciaiPild);

//Masyvų apjungimas
let pirmas = [4, 7, 8, 6];
let antras = [3, 2, 5, 8];

let sujungtas = pirmas.concat(antras);
console.log("sujungtas", sujungtas);

//arba
let sujungtas2 = antras.concat(pirmas);
console.log("sujungtas", sujungtas);

//Masyvo iškarpa
skaiciai0 = [8, 9, 3, 2, 5, 8, 7];

let iskarpa = skaiciai0.slice(2, 4); //nuo 2 indekso iki 4 indekso

console.log(skaiciai0);
console.log("iskarpa:", iskarpa);

//Masyvo iškarpa nuo indekso iki masyvo galo
let skaiciai11 = [8, 9, 3, 2, 5, 8, 7];

iskarpa = skaiciai11.slice(3);
console.log(skaiciai11);
console.log("iskarpa2:", iskarpa);

//Masyvo kopija
let skaiciaii = [8, 9, 3, 2, 5, 8, 7];
let kopija = skaiciaii.slice();
console.log("kopija:", kopija);

let kopija2 = [...skaiciaii];
console.log("kopija2:", kopija2);

//spread operator (1)
let skaiciai1 = [1, 2, 3, 4];
let skaiciai2 = [5, 6, 7];

let sujungtiSkaiciai = [...skaiciai1, ...skaiciai2];
console.log(sujungtiSkaiciai);

//spread operator (2)
let skaiciai4 = [8, 7, 9, 6];
let skaiciai5 = [6, 9, 8];

skaiciai4.push(...skaiciai5); // spead operator

console.log("papildytas:", skaiciai4);

//spread operator (3)
let dog = { name: "Toby", age: 3, race: "Beagle", size: "small" };
let puppy = { ...dog, name: "Max", age: 1 }; // Kopijuoti šuns objektą ir atnaujinti jo reikšmes

console.log("puppy:", puppy);
console.log("suo:", dog);

//spread operator (4)
let pirmiSk = [7, 8, 9];
let antriSk = [5, 7, 4];
let sujungtiSk = [...pirmiSk, "a", ...antriSk, "b"];

console.log("sujungti:", sujungtiSk);

//Skaičių šalinimas iš masyvo
let skaiciaiSal = [7, 8, 6, 5, 7, 4, 2, 3];
skaiciaiSal.pop(); // Šalinimas iš galo

console.log(skaiciaiSal);
skaiciaiSal.shift(); // Šalinimas iš priekio
console.log(skaiciaiSal);

skaiciaiSal.splice(2, 3); // Šalinimas iš vidurio
console.log(skaiciaiSal);


//Masyvo išvalymas (1)
let skIsvalymai =  [1,2,3,4]
let skPriklausomii = skIsvalymai

skIsvalymai = []
skIsvalymai.length = 0

console.log('originalus:', skIsvalymai)

skIsvalymai.length = 0;

console.log("originalus:", skIsvalymai);
console.log("priklausomi:", skPriklausomii);


//Masyvo išvalymas (2)
let skIsvalymui = [1, 2, 3, 4];
let skPriklausomi = skIsvalymui;

skIsvalymui.splice(0, skIsvalymui.length);

console.log("originalus skaiciai", skIsvalymui);
console.log("kitas masyvas", skPriklausomi);

//Masyvo išvalymas (3)
 skIsvalymui = [1, 2, 3, 4];
 skPriklausomi = skIsvalymui;

while (skIsvalymui.length > 0) {
  skIsvalymui.pop();
}
console.log("originalus skaiciai", skIsvalymui);
console.log("kitas masyvas", skPriklausomi);


//Masyvo išvalymas (4)
skIsvalymui = [1, 2, 3, 4];
skPriklausomi = skIsvalymui;

while (skIsvalymui.length > 0) {
  skIsvalymui.pop();
}
console.log("originalus skaiciai", skIsvalymui);
console.log("kitas masyvas", skPriklausomi);

//Patikrinimas ar masyve yra elementas
let skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];
console.log("skaiciai", skaiciai);

let arYra1 = skaiciai.includes(3);
console.log("ar 3 yra", arYra1);

let arYra2 = skaiciai.includes(8);
console.log("ar 8 yra", arYra2);

//Indekso paieška
/*let*/ skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];
console.log("skaiciai", skaiciai);

let rastasIndeksas = skaiciai.indexOf(8);
console.log("skaiciaus 8 indeksas", rastasIndeksas);

let rastasPaskutinioIndeksas = skaiciai.lastIndexOf(8);
console.log("paskutinio 8 skaiciaus indeksas", rastasPaskutinioIndeksas);

//Paieška (1)
let zmones = [
  { vardas: "Tomas", pavarde: "Tomauskas", amzius: 21 },
  { vardas: "Greta", pavarde: "Gretauskiene", amzius: 22 },
  { vardas: "Paulius", pavarde: "Paulenas", amzius: 20 },
];
console.log("zmones", zmones);

let rastasZmogus1 = zmones.find((zmogus) => {
  return zmogus.vardas === "Paulius";
});
console.log("rastas zmogus", rastasZmogus1);

//Paieška (2)
/*let*/ zmones = [
  { vardas: "Tomas", pavarde: "Tomauskas", amzius: 21 },
  { vardas: "Greta", pavarde: "Gretauskiene", amzius: 22 },
  { vardas: "Paulius", pavarde: "Paulenas", amzius: 20 },
];
console.log("zmones", zmones);
let rastasZmogus2 = zmones.find((zmogus) => {
  return zmogus.vardas === "Paulius";
});

console.log("rastas zmogus1", rastasZmogus2);
console.log("rastas zmogus2", rastasZmogus2);

//Paieška (3)
zmones = [
  { vardas: "Tomas", pavarde: "Tomauskas", amzius: 20 },
  { vardas: "Greta", pavarde: "Gretauskiene", amzius: 20 },
  { vardas: "Paulius", pavarde: "Paulenas", amzius: 20 },
];

console.log("zmones", zmones);
let rastoZmogIndeksas = zmones.findIndex((zmogus) => zmogus.vardas === "Greta");
console.log("rasto zmogaus indeksas", rastoZmogIndeksas);

//Paieška (4)
zmones = [
  { vardas: "Tomas", pavarde: "Tomauskas", amzius: 20 },
  { vardas: "Greta", pavarde: "Gretauskiene", amzius: 20 },
  { vardas: "Paulius", pavarde: "Paulenas", amzius: 20 },
];

console.log("zmones", zmones);
let nerastasZmogus = zmones.find((zmogus) => zmogus.vardas === "Jaronimas");
console.log("zmogus nerastas", nerastasZmogus);

//Ėjimas per masyvą (1)
skaiciai = [4, 8, 7, 2, 3];

for (let skaicius of skaiciai) {
  console.log(skaicius);
}

//Ėjimas per masyvą (2)
skaiciai = [9, 7, 4, 5, 3, 2];

skaiciai.forEach(function (skaicius) {
  console.log(skaicius);
});
/* arba

 skaiciai.forEach(skaicius =>{
  console.log(skaicius);  */

/*  arba

  skaiciai.forEach (skaicius => console.log(skaicius));  */

/*  skaiciai.forEach (skaicius, indeksas) => console.log(indeksas + ":" + skaicius));
 */

//Ėjimas per masyvą (3)
skaiciai = [9, 7, 4, 5, 3, 2];

skaiciai.forEach((skaicius) => {
  console.log(skaicius);
});

skaiciai.forEach((skaicius) => {
  console.log(skaicius);
});

//Ėjimas per masyvą (4)
skaiciai = [9, 7, 4, 5, 3, 2];
skaiciai.forEach((skaicius) => console.log(skaicius));

//Ėjimas per masyvą (5)
skaiciai = [9, 7, 4, 5, 3, 2];

skaiciai.forEach((skaicius, indeksas) =>
  console.log(indeksas + ":" + skaicius)
);

//Masyvo elementų apjungimas į teksto eilutę
skaiciai = [4, 7, 8, 9];
let tekstas = skaiciai.join(", "); //gali deti ir i console.log skaiciai.join(",")
console.log("sujungtas i teksta", tekstas);

//Teksto eilutės pavertimas į masyvo elementus
tekstas = "koks nors sakinys is keliu zodziu";
let zodziai = tekstas.split(" "); //issakaido darome tuscia parametra
console.log(zodziai);

//Rikiavimas (1)
skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];
console.log("skaiciai", skaiciai);

let surikiuoti = skaiciai.sort();
console.log("surikiuoti: ", surikiuoti);

let atbulinis = skaiciai.reverse();
console.log("nuo kito galo: ", atbulinis);

//Rikiavimas (2)
let courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "JavaScript" },
];

courses.sort(function (a, b) {
  //sort - sukeicia vietomis
  if (a.name < b.name) return -1; //return -  paliekam kaip yra
  if (a.name > b.name) return 1;
  return 0;
});

console.log(courses);

//Rikiavimas (3)
/* let */ courses = [
  { id: 1, name: "Node.js" },
  { id: 2, name: "javaScript" },
];

courses.sort(function (a, b) {
  let nameA = a.name.toLowerCase();
  let nameB = b.name.toLowerCase();
  if (nameA < nameB) return -1;
  if (nameA > nameB) return;
  1;
  return 0;
});

console.log(courses);

//every funkcija
skaiciai = [8, 7, 5, 3];
let visiTeigiami = skaiciai.every(function (skaicius) {
  //every - pereina per kiekviena skaiciu ir atlieka funkcija.. every duot tik tada kai bus visi skaiciai bus didesni uz 0 jei mazesnis tadar false. bent vienas skaicius mazesnis tadar visam bus false
  return skaicius > 0;
});

console.log("visi skaiciai yra teigiami", visiTeigiami);
/*  */

//some funkcija
skaiciai = [1, -1, 2, 3];

let yraTeigiamu = skaiciai.some((skaicius) => skaicius > 0); //nebereikia return rasyti naudojame => rodyklele
console.log("yra bent vienas teigiamas", yraTeigiamu);

/* arba 
let skaiciai = [1, -1, 2, 3];
let yraTeigiamu = skaiciai.some(function(skaicius) {
return skaicius > 0;
});
console.log('yra bent vienas teigiamas', yraTeigiamu);
*/

//filter funkcija (1)
skaiciai = [7, 8, -3, 5, -7, 2, 0, 8, -4];

let teigiami = skaiciai.filter(function (skaicius) {
  return skaicius > 0;
});
console.log("teigiami skaiciai", teigiami);

//filter funkcija (2)
skaiciai = [7, 8, -3, 5, -7, 2, 0, 8, -4];
teigiami = skaiciai.filter((skaicius) => skaicius > 0);
console.log("teigiami skaiciai", teigiami);

//filter funkcija (3)
skaiciai = [7, 8, -3, 5, -7, 2, 0, 8, -4];
let lyginiai = skaiciai.filter((skaicius) => skaicius % 2 === 0);

console.log("lyginiai skaiciai", lyginiai);

//filter funkcija (4)
skaiciai = [7, 8, -3, 5, -7, 2, 0, 6, -4];

let atrinkti = skaiciai.filter((skaicius) => {
  return skaicius % 2 === 0 && skaicius > 0;
});

console.log("teigiami skaiciai", atrinkti);
console.log(" lyginiai skaiciai", lyginiai);
console.log("atrinkti skaiciai", atrinkti);

//map funkcija (1)
skaiciai = [4, 7, 8, 9, 6, 5, 8, 2];

console.log("skaiciai", skaiciai);
let dvigubi = skaiciai.map((x) => x * 2); //kitaip parasytas bet atsakymas tas pats
console.log("dvigubi skaiciai", dvigubi);

let trigubi = skaiciai.map((x) => x * 3);
console.log("trigubi skaiciai", trigubi);

//map funkcija (2)
skaiciai = [4, 7, -3, 9, -7, 5, 8, 2];
console.log("skaiciai", skaiciai);

let pak = skaiciai.map((x) => x + (x % 2 === 0 ? " lyginis" : "nelyginis"));

console.log("lyginis ar nelyginis skaicius", pak);

//map funkcija (3)

zmones = [
  { vardas: "Tomas", pavarde: "Tomauskas", amzius: 21 },
  { vardas: "Greta", pavarde: "Gretauskiene", amzius: 22 },
  { vardas: "Paulius", pavarde: "Paulenas", amzius: 20 },
];

console.log(zmones);
let suformatuotiZmones = zmones.map(
  (x) => `${x.vardas} ${x.pavarde} (${x.amzius} m.)`
);

console.log("suformatuoti duomenys:", suformatuotiZmones);

//map funkcija (4)
zmones = [
  { vardas: "Tomas", pavarde: "Tomauskas", amzius: 21 },
  { vardas: "Greta", pavarde: "Gretauskiene", amzius: 22 },
  { vardas: "Paulius", pavarde: "Paulenas", amzius: 20 },
];

console.log("zmones", zmones);

let sarasui = zmones.map(
  (x) => `<li>${x.vardas} ${x.pavarde} (${x.amzius} m.)</li>`
);

console.log(sarasui);

//map funkcija (5)
skaiciai = [1, 2, 3, 4];
let punktai = skaiciai.map((x) => "<li>" + x + "</li>");
console.log(punktai);

let html = "<ul>" + punktai.join("") + "</ul>";
console.log(html);

//map funkcija (6)

skaiciai = [1, 2, 3, 4];

let objektai = skaiciai.map((x) => {
  let obj = { reiksme: x };
  return obj;
});

console.log("pakeista i objektus", objektai);

//map funkcija (7)

skaiciai = [1, 2, 3, 4];

objektai = skaiciai.map((n) => {
  return { reiksme: n };
});

console.log("pakeista i objektus", objektai);

//map funkcija (8)
skaiciai = [1, 2, 3, 4];
objektai = skaiciai.map((n) => {
  reiksme: n;
});
console.log(objektai);

let objektai2 = skaiciai.map((n) => ({ reiksme: n }));
console.log(objektai2);

 //Įvairių funkcijų apjungimas  
  skaiciai = [9, -2, -3, 1, 2, 7, -5, 6];

  atrinkti = skaiciai
   .filter(x => x > 0)                                              
   //console.log(atrinkti)            // sitas taip keliauja per kitus              
   .sort ()
   .map(x => `<li>${x}</li>`)

 console.log("atrinkti sarasui ir surikiuoti", atrinkti);


//Sumos skaičiavimas įprastu būdu

skaiciai = [8, 4, 2, 3, 5, 7];
let suma = 0;
for (let skaicius of skaiciai) {
  suma += skaicius;
}
console.log(suma);

//reduce funkcija (1)
skaiciai = [8, 4, 2, 3, 5, 7];
suma = skaiciai.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // šis 0 yra default reikšmė, jo galima ir nerašyti

console.log(suma);

//reduce funkcija (2)
skaiciai = [8, 4, 2, 3, 5, 7];
suma = skaiciai.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
console.log(suma);

//reduce funkcija (3)
skaiciai = [8, 4, 2, 3, 5, 7];
suma = skaiciai.reduce((daline_suma, skaicius) => daline_suma + skaicius);
console.log(suma);

//Datos kintamojo (objekto) sukūrimas
/* const */ now = new Date();
console.log(now);
const date1 = new Date("May 11 2015 09:00");
console.log(date1); // galima pasitiktinti ka mums rodo
const date2 = new Date(2018, 4, 11, 9); // mėnesiai skaičiuojami nuo 0, todėl rašome 4, o ne 5
console.log(date2);

//Datos keitimas
/* const*/ now = new Date();
now.setFullYear(2022); //susiaurina iki metu
console.log(now);

const date22 = new Date(2018, 4.11, 9);
console.log(date2);

//Įvairūs datų formatai išvedimui

now = new Date();

console.log(now.toDateString()); // data be laiko
console.log(now.toTimeString()); //laikas be datos
console.log(now.toISOString()); //data ir laikas UTC zonoje

//Lietuviškas datos formatas
 now = new Date();
console.log(now.toLocaleDateString("lt"));


/*    arba sitaip pradedant nuo laiko pradzios

let now = new Date()
console.log(now)

const date1 = new Date('May 11 2015 09:00')
console.log(date1)

const date2 = new Date(2018, 4, 11, 9)
console.log(date2)

console.log(now.toDateString()); // data be laiko
console.log(now.toTimeString()); // laikas be datos
console.log(now.toISOString()); // data ir laikas UTC zonoje

now = new Date();
console.log(now.toLocaleDateString('lt'))  */