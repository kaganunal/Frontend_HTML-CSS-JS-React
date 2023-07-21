// kullanıcıdan bir başlangıç sayısı bir de bitiş sayısı isteyin. Bir for döngüsü yaratarak başlangıç sayısından bitiş sayısına kadar bütün sayıları toplayın. toplamı ekrana yazdırın (başlangıç ve bitiş sayısı dahil)

// let sayiBaslangic = Number(prompt("Başlangıç sayısı"))
// let sayiBitis = Number(prompt("Bitiş sayısı"))
// let toplam = 0

// for(let i =sayiBaslangic; i<=sayiBitis; i++){
//     toplam += i
// }
// alert(`${sayiBaslangic} ile ${sayiBitis}'e kadar olan sayıların toplamı = ${toplam}`)

// Bir sınıfta 5 öğrenci olduğunu düşünelim. Öğrencilerin notlarını almak için prompt kullanarak her öğrenci için bir not girişi yapın. Ardından, bu notları kullanarak sınıf ortalamasını hesaplayın. Son olarak, sınıftaki öğrencilerin kaç tanesinin geçtiğini (geçer not 60) bulun ve konsola yazdırın.

// let toplamNot = 0;
// let gecenOgrenciSayisi = 0;

// for (let ogrenci = 1; ogrenci <=5; ogrenci++){
//     let not = Number(prompt("Notu girin"))
//     toplamNot += not

//     if(not >= 60){
//         gecenOgrenciSayisi++
//     }
// }

// let sınıfOrtalaması = toplamNot / 5
// console.log("sınıf ortalaması " + sınıfOrtalaması);
// console.log("gecen öğrenci sayısı " + gecenOgrenciSayisi);

// -------------------While Alışveriş Sepeti Uygulaması-----------------------
// Kurallar:
// While döngüsü kullanılacak.
// Kullanıcı prompta herhangi bir ürün ismi veya "onayla" yazabilir.
// Ürün ismi yazarsa kullanıcıdan ürünün fiyat bilgisini isteyin ve toplam fiyata ekleyin.
// Kullanıcı "onayla" yazarsa, ekrana sepetin toplam tutar bilgisini yazdırın.

// let toplamFiyat = 0;
// let urun = "";

// while(urun !== "onayla"){
//     urun = prompt("sepete ürün eklemek için ürün adı veya bitirmek için onayla yazınız.")

//     if(urun !== "onayla"){
//         let fiyat = Number(prompt(urun + " ürünün fiyatını giriniz."))
//         toplamFiyat += fiyat
//     }
// }

// alert("Toplam fiyat: " + toplamFiyat + " TL")

// Random bir sayı tanımlayın ve kullanıcıdan 1-10 arası bir sayı girerek sayıyı tahmin etmesini isteyin. Toplam 3 hak tanımlayın. While döngüsü kullanarak, kullanıcının hakları bitene kadar denemesine izin verin. Her denemenin sonunda sayıyı arttırıp azaltması gerektiği bilgisini ekrana yazdırın.

// const sayi = Math.floor(Math.random() * 10) + 1
const sayi = Math.ceil(Math.random() * 10);
console.log(sayi);
let tahmin = Number(prompt("Lütfen 1-10 arası bir sayı giriniz..."));
let hak = 3;
let deneme = 0;
while (sayi !== tahmin) {
  if (deneme === 3) {
    alert("Hakkınız bitti kaybettiniz!");
    break;
  } else if (tahmin > sayi) {
    deneme++;
    tahmin = prompt(
      `Yanlış tahmin!Sayıyı azaltın! Kalan hakkınız ${hak - deneme}`
    );
  } else if (tahmin < sayi) {
    deneme++;
    tahmin = prompt(
      `Yanlış tahmin!Sayıyı arttırın! Kalan hakkınız ${hak - deneme}`
    );
  } else {
    ++deneme;
    alert(`Tebrikler ${deneme}. denemede bildiniz!`);
    break;
  }
}
if (sayi === tahmin) {
  alert(`Tebrikler ${++deneme}. denemede bildiniz!`);
}
