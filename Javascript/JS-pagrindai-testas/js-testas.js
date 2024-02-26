/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

let euruKiekis = Math.floor(Math.random()*1000)+1

function euraiIdolerius (e){
    let dol = 1.08

    console.log('Eurai i dolerius: ', dol * e,'$' )
   
}
euraiIdolerius (euruKiekis)

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais...
*/

let euruKiekis2 = Math.floor(Math.random() * 1000) + 1;

function doleriaiIeurus(dol) {
  let e =0.92 ;

  console.log("Doleriai i eurus: ", e * dol, 'Eur' );
}
doleriaiIeurus(euruKiekis2);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

let s = 80
let u = 1.8

function body_mass_index(svoris,ugis) {
let BMI = svoris / ugis**2

if (BMI > 25){
    console.log('Viršsvoris')
}
else if (18.5 <= BMI < 25) {
  console.log('Normalu');
}
else { 
    console.log('Per mažas svoris')
}
} 

body_mass_index(s,u)

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

amzius = 2

sekundes = 60
minutės = 60
valandos = 24    
diena = 1


/*                                                           //perdaryti
for (let i = 0; i < sekundes; i++) {
    for (let j = 0; j < minutės; j++) {
        for (let k = 0; k < valandos; k++) {
            for (let l = 0; l < diena; l++) {
                console.log(amzius)
                amzius++
            }
        }
    }
}

*/

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

function farenheitasIcelciju(far) {
  let cel = (far - 32) / 1.8
  console.log("Farenheito į Celsijų:",   cel);
}
farenheitasIcelciju(10);

function celcijusIfarenheita(cel) {
  let far = (cel * (9/5)+32)
  console.log("Celsijus į farenheita:", far);
}
celcijusIfarenheita(33);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/

let skaiciai =[1,2,3,4,5,6,7,8,9,10]
let skaicius = skaiciai.join('-');
console.log(skaicius);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

let zvaigzdute = "*"
for (let i = 0; i < 5; i++){
    console.log(zvaigzdute)
    zvaigzdute += "*"
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/

now = new Date();
const ikiKaledu = new Date(2024, 12, 25);
let d = Math.floor ((ikiKaledu - now) / 1000/ 60/60/24)
console.log(" Iki šv.Kaledų liko", d , "dienų!");

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardai = ['Tomas', 'Dainius', 'Paulius','Jonas']
let tekstas1 = vardai.join('+');
console.log(tekstas1)

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/

let slapt1 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let slapt2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let slapt3 = [0,1,2,3,4,5,6,7,8,9]                            //nebaigta

let slapt4 = ['*']

slapt1 = Math.floor(Math.random)
slapt2 = Math.floor(Math.random)
slapt3 = Math.floor(Math.random)