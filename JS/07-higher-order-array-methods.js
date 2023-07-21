// const ages =[10,25,19,11,65,8,27,39];
// const ages2 =[101,251,191,111,651,81,271,391];

// // foreach
// // let variable=ages.forEach((age,index)=>{console.log(`${age+10} - ${index+1}.eleman`);})
// // let variable=ages.forEach((age,index)=>console.log(`diziden alınan değer: ${age}- diziden alınan elemanın küpü ${age**3}- dizideki elemanın indexi ${index}`))
// // console.log(variable);
// // const mapIcindekiFonksiyon=(age,index)=>`diziden alınan değer: ${age}- diziden alınan elemanın küpü ${age**3}- dizideki elemanın indexi ${index}`
// // // map
// // variable=ages.map(mapIcindekiFonksiyon)
// // variable=ages.map((age,index)=>`diziden alınan değer: ${age}- diziden alınan elemanın küpü ${age**3}- dizideki elemanın indexi ${index}`)
// // console.log(variable);
// // const maple=array=>array.map(mapIcindekiFonksiyon)
// // console.log(maple(ages2));
// // console.log("********************");
// // console.log(maple(ages));
// //  filter

// let yetiskinler=ages.filter(age=>age>=18)
// let cocuklar=ages.filter(age=>age<18)
// console.log(yetiskinler);
// console.log(cocuklar);

// // 1. kendi foreach fonksiyonunuzu yazınız.
// const customForeach=(array,callback)=>{
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         callback(element)
//     }
// }
// // 2. kendi map fonksiyonunuzu yazınız.
// // 3. kendi filter fonksiyonunuzu yazınız.
// // 4. arkadaşlarınızın ismini ve soyismini içeren bir dizi oluşturunuz. 10 elemanlı olsun. İki ismi olan arkadaşlarınızı ayırınız.
// // // 5.tek ismi olan arkadaşlarınızı ayırınız.
// // let testVariable=ages.forEach(yas=>console.log(yas))
// // console.log(testVariable);
// // console.log("*****************************");
// // testVariable=ages.map(yas=>yas+5)
// // console.log(testVariable);

// // customForeach(ages,console.log)

// const customMap=(array,callback)=>{
//     const newArray=[]
//     for (let index = 0; index < array.length; index++) {
//         let element = array[index];
//         let sonuc=callback(element)
//         newArray.push(sonuc);
//     }
//     return newArray;
// }
// const mapIcindekiFonksiyon=(age)=>{
//     return `diziden alınan değer: ${age}- diziden alınan elemanın küpü ${age**3}}`}

// let testvariable=customMap(ages,mapIcindekiFonksiyon)
// console.log(testvariable);
// const myFriends=["Oğuzhan Karagüzel","Nuri Baran Yeşilay","Hakan Melih Zambak","Zeynep İlkiz Kasapoğlu","Atakan Bektaş"];
// const singleNamedStudents=myFriends.filter((friend)=>friend.split(" ").length<=2)
// const multipleNamedStudents=myFriends.filter((friend)=>{ return friend.split(" ").length>2})
// // console.log(singleNamedStudents);
// // console.log(multipleNamedStudents);
// let variable=singleNamedStudents.map(isim=>isim+"ANKARA");
// console.log(variable);
const ages = [10, 25, 19, 11, 333, 65, 8, 27, 39];
const myFriends = [
  "Oğuzhan Karagüzel",
  "Nuri Baran Yeşilay",
  "Hakan Melih Zambak",
  "Zeynep İlkiz Kasapoğlu",
  "Atakan Bektaş",
];

// every
console.log(ages.every((age) => age > 5));
console.log(ages.every((age) => age > 10));

//some
console.log(ages.some((age) => age < 5));
console.log(ages.some((age) => age < 10));

// find
console.log(ages.find((age) => age === 9));
console.log(ages.find((age) => age > 8));
//findLast
console.log(ages.findLast((age) => age > 8));

// findIndex
console.log(ages.findIndex((age) => age === 65));
console.log(ages.findIndex((age) => age === 66));

//sort
console.log(ages.sort((birinciSayi, ikinciSayi) => birinciSayi - ikinciSayi));
console.log(myFriends.sort());

//reduce
console.log(
  myFriends.reduce((ustuneEklenenHali, suAndakiKelime) => {
    return ustuneEklenenHali + suAndakiKelime;
  }, "BAŞLANGIÇ DEĞERİ BEN EKLEDİM")
);
console.log(
  ages.reduce((toplanmisHali, suAndakiSayi) => {
    return toplanmisHali + suAndakiSayi;
  }, 90)
);

const carpmaIslemi = (...sayilar) => {
  return sayilar.reduce(
    (carpilmisHali, suAndakiSayi) => carpilmisHali * suAndakiSayi
  );
};

// console.log(carpmaIslemi(2,2,2));
// 10, 25, 19, 11, 333, 65, 8, 27, 39
console.log(
    ages.reduce((kalan, suAndakiSayi) => kalan + suAndakiSayi));