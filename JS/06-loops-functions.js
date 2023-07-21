let myVariable=1;
// console.log(++myVariable)
// ;console.log(myVariable+=1);
// console.log(myVariable);
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;
// myVariable++;

// for (let index = 0; index <10 ; index+=2) {
//     console.log(myVariable);
//     myVariable++;
// }
// console.log(myVariable);

// let anotherVariable=100;
// for (let index =10; index >=0 ; index--) {
//     console.log(anotherVariable);
//     anotherVariable--;
// }
// console.log(anotherVariable);

// for (let index = 1; index <=100 ; index++) {
//     if (index%2) {
//         console.log("ilkiz");
//     } else {
//         console.log("baran");
//     }
// }
// const myArray=["Burak","İlkiz","Hasret","Baran","Cemtuğ","Eyüp","Atakan","Mehtap"]
// for (let index = 0; index <myArray.length ; index+=2) {
//     console.log(myArray[index]);
//     console.log(myArray[index+1]);
//     console.log("*********");
// }
let sayac=0;
// while (sayac<10) {
//     sayac++;
//    console.log(sayac);
// }

// while (sayac<10) {
//     sayac++;
//     if (sayac===7) {
//         break;
//     }
//     console.log(sayac);
// }
// while (sayac<10) {
//     sayac++;
//     if (sayac===7) {
//         continue;
//     }
//     console.log(sayac);
// }
// let i=0;
// do{
//     console.log(i);
// }while (i<0) 

// while (i<0) {
//     console.log(i);
// }

// Functions

// function declaration
// hoisting
selamla()
function selamla(){
    console.log("Merhaba Ank-12");
}

//function expression
const selamlamak=function(){
    console.log("Merhaba Ank-12-expression");
}
selamlamak();
//arrow function
const arrowSelamla=()=>{  console.log("Merhaba Ank-12-arrow")}
arrowSelamla();



// const getCube=(value)=>{
// let cube= value*value*value
// console.log(cube);
// return cube;
// }
// let testVariable=getCube(5);
// console.log(testVariable);


let getCube=value=>value**3
let testVariable=getCube(5);
console.log(testVariable);
console.log(getCube);
getCube=19
console.log(getCube);

// default parameter
const greetings=(isim="Onur")=>console.log(`Merhaba ${isim}`);
greetings();
greetings("Atakan");

// rest parameter
const sum=(isim,...parametreler)=>{
    let toplam=0;
    console.log(`Merhaba ${isim}`);
    for (let index = 0; index < parametreler.length; index++) {
        toplam+=parametreler[index]
    }
    return toplam;
}

console.log(sum("Oğuzhan****",2,3,4,5,6,7,2,2,2,2,2,2,2,2,7,10));

// callback nedir?
const logla=deger=>console.log(deger)
const orjinalFonksiyon=isim=>isim;

logla(orjinalFonksiyon("//Burak//"))

const topla=(a,b)=>a+b;
const cikarma=(a,b)=>a-b;
const hesapla=(a,b,callbackFonks)=>callbackFonks(a,b)
logla(hesapla(99,88,topla))
logla(hesapla(99,88,cikarma))
const carp=(a,b)=>a*b;
logla(hesapla(99,88,carp))
logla(hesapla(99,88,(a,b)=>a/b))

