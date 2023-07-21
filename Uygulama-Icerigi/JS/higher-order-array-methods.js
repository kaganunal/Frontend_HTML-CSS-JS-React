// Kullanılacak diziler

const dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const dizi1 = ["elma", "armut", "kiraz", "üzüm"];

const dizi2 = [1, 2, -3, 4, -5, 6, 7, 8, 9, 10];

const dizi3 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
// ---------------forEach-------------------
// 1- Verilen bir dizinin tüm elemanlarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((e,i) => {
    console.log(`${i + 1}. Eleman: ${e}`);
})
// 2- Verilen bir dizinin sadece çift sayılarını ekrana yazdıran bir forEach döngüsü oluşturun.
dizi.forEach((eleman) => {
    if (eleman % 2 === 0){
        console.log(eleman);
    }
} )
// 3- Verilen bir dizinin elemanlarını 2 ile çarpan ve sonucu yeni bir diziye ekleyen bir forEach döngüsü oluşturun.
const carpimlar = []
dizi.forEach((eleman) => {
    carpimlar.push(eleman * 2)
})

console.log(carpimlar);
// 4- Verilen bir dizinin elemanlarının toplamını hesaplayan bir forEach döngüsü oluşturun.(reduce kullanmadan)
let toplam = 0;
dizi.forEach((eleman) => {
    toplam += eleman
})
console.log(toplam);
// 5- Verilen bir dizinin elemanlarını ekrana yazdırırken, dizinin son elemanını özel bir mesajla birlikte yazdıran bir forEach döngüsü oluşturun.
dizi1.forEach((eleman,index,dizi1) => {
    if(index === dizi1.length -1){
        console.log("Son eleman: " + eleman);
    } else {
        console.log(eleman);
    }
})
// ---------------map-------------------
// 6- Verilen bir dizideki elemanları büyük harf yaparak yeni bir dizi oluşturan bir map döngüsü oluşturun.
const buyukHarf = dizi1.map((eleman) => eleman.toUpperCase())
console.log(buyukHarf);
// 7- Verilen bir dizinin elemanlarını 1 ile 10 arasında rastgele bir sayıyla toplayıp yeni bir dizi oluşturan bir map döngüsü oluşturun.
const rastgeleDizi = dizi.map((eleman) => eleman + Math.ceil(Math.random() * 10))
console.log(rastgeleDizi);
// 8- Verilen bir stringin her bir kelimesini ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
let string = "merhaba benim adım cem"
const tersString = string.split(" ").map((harf) => harf.split("").reverse().join(""))
console.log(tersString);
// 9- Verilen bir dizinin elemanlarını(elemanlar sayı olmalı) stringe çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun.
const stringDizi = dizi.map((eleman) => eleman.toString())
console.log(stringDizi);
// 10- Verilen bir dizi içindeki stringleri ters çevirerek yeni bir dizi oluşturan bir map döngüsü oluşturun. Ancak, bu sefer reverse() yerine kendi ters çevirme algoritmanızı oluşturun.
const tersCevir = (string) => {
    let tersString = "";
    for ( let i = string.length -1; i >=0; i--){
        tersString += string[i]
    }
    return tersString
}

const tersDizi = dizi1.map((eleman) => tersCevir(eleman))
console.log(tersDizi);

// ---------------filter-------------------
// 11- Verilen bir dizi içerisindeki çift sayıları filtreleyen bir örnek yazın.
const ciftSayilar = dizi.filter((eleman) => eleman % 2 === 0)
console.log(ciftSayilar);
// 12- Verilen bir dizi içerisindeki stringlerden belirli bir uzunluğa sahip olanları filtreleyen bir örnek yazın.
const uzunluk = 4
const uzunStringler = dizi1.filter((eleman) => eleman.length === uzunluk)
console.log(uzunStringler);
// ---------------reduce-------------------
// 13- Verilen bir dizi içerisindeki sayıların toplamını, her bir sayıya 2 ekleyerek hesaplayan bir örnek yazın.
const diziToplam = dizi.reduce((accumulator, currentValue) => accumulator + currentValue + 2,0)
console.log(diziToplam);
// ---------------find-------------------
// 14- Verilen bir dizi içerisindeki ilk çift sayıyı döndüren bir örnek
const ilkCiftSayi = dizi.find((eleman) => eleman % 2 === 0)
console.log(ilkCiftSayi);
// 15- Verilen bir dizi içerisindeki son çift sayıyı döndüren bir örnek
const sonCiftSayi = dizi.findLast((eleman) => eleman % 2 === 0)
console.log(sonCiftSayi);
// ---------------some-------------------
// 16- Verilen bir dizi içerisinde en az bir negatif sayı olup olmadığını kontrol eden bir örnek
const negatifVarMı = dizi1.some((eleman) => eleman < 0)
console.log(negatifVarMı);
// ---------------every-------------------
// 17- Verilen bir dizi içerisindeki tüm sayıların pozitif olduğunu kontrol eden bir örnek
const hepsiPozitifMi = dizi.every(eleman => eleman > 0)
console.log(hepsiPozitifMi);
// ---------------sort-------------------
// 18- Verilen bir dizi içerisindeki sayıları sıralayan bir örnek
const siraliDizi = dizi3.sort((a, b) => a - b) // orijinal dizi değişti
console.log(siraliDizi);
console.log(dizi3);
const dizi4 = [2, 5, 3, 4, 7, 10, 1, 9, 8, 6];
const siraliDizi2 = dizi4.toSorted((a, b) => b- a )
console.log(siraliDizi2);
console.log(dizi4);











