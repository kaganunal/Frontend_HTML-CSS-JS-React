// let myFriend="Zeynep İlkiz"
// let myFriend1="Mehtap"
// let myFriend2="Hasret"
// let myFriend3="Burak"
// let myFriend4="Eyüp"
// let myFriend5="Hakan Melih"
// let myFriend6="Atakan"

// const myArray=new Array("İlkiz","Mehtap","Hasret","Burak","Eyüp","Hakan Melih","Atakan")
// console.log(myArray);
// const anotherArray=["İlkiz",false,19,"Burak",{},["1","Mustafa",1],"Atakan"]
// console.log(anotherArray);
// console.log(anotherArray[3]);
// console.log(anotherArray[5][1]);
// console.log(anotherArray.length);
// anotherArray[0]="Cem Mert Şimşek"
// // anotherArray="Cem Mert Şimşek"
// console.log(anotherArray);
const myArray=new Array("İlkiz","Mehtap","Hasret","Burak","Eyüp","Hakan Melih","Atakan")

// Array Methods

// push dizinin sonuna eleman ekler
let variable=myArray.push("Onur","Alp","Aydın")
console.log(myArray);
console.log(variable);
//pop dizinin son elemanını çıkartır.
variable=myArray.pop();
console.log(myArray);
console.log(variable);

//shift 
variable=myArray.shift();
console.log(myArray);
console.log(variable);

// unshift
variable=myArray.unshift("Cem","Mert","Şimşek");
console.log(myArray);
console.log(variable);

//slice
// variable=myArray.slice()
// console.log(myArray);
// console.log(variable);
// variable.push(1,2,3)
// console.log(myArray);
// console.log(variable);
variable=myArray.slice(1)
console.log(myArray);
console.log(variable);
variable=myArray.slice(1,5)
console.log(myArray);
console.log(variable);
console.log("*****************************************************");

let kopyaArray=myArray;
console.log(kopyaArray);
console.log(myArray);
kopyaArray.push("HAKAN","Melih","Zambak")
console.log(kopyaArray);
console.log(myArray);

// spread operator
const copyArray=[...myArray]
copyArray.push(1,2,3)
console.log(copyArray);
console.log(myArray);

variable=myArray.splice(4,3)
console.log(myArray);
console.log(variable);
variable=myArray.splice(4,3,"Cemtuğ","Kaan")
console.log(myArray);
console.log(variable);

// reverse
variable=myArray.splice(1,5,"ekle","ekle","ekle").reverse()
console.log(myArray);
console.log(variable);
variable.push(1,2,3)
console.log(myArray);
console.log(variable);
const newArray=[1,2,3,4,5,6,7];
const testArray=myArray.concat(newArray,copyArray)
console.log(testArray);
console.log(myArray);
console.log(newArray);

const spreadedArray=[...testArray,...newArray,...copyArray,...myArray]
console.log(spreadedArray);

// join
console.log("----------------------------------------");
console.log(myArray);
variable=myArray.join("-").toUpperCase();
console.log(variable);

//indexOf
variable=myArray.indexOf("ekle")
variable=myArray.indexOf("ekle",3)
variable=myArray.indexOf("ekle",4)
variable=myArray.indexOf("Ekle")
console.log(variable);

//lastIndexOf
variable=myArray.lastIndexOf("ekle");
console.log(variable);

//includes 
variable=myArray.includes("ekle")
console.log(variable);
variable=myArray.includes("Ekle")
console.log(variable);

// [09:46] Onur Alp Aydın (BilgeAdam Boost)

// boş bir dizi oluşturunuz. içine 7 tane eleman ekleyiniz. Sondaki elemanı çıkartınız. Baştaki elemanı çıkartınız. Dizinin başına yeni bir eleman ekleyiniz. dizinin elemanlarından 2 sini güncelleyiniz. Dizinin bütün elemanlarını console a yazdırınız

// [09:47] Onur Alp Aydın (BilgeAdam Boost)

// dizinin son hali ["elma",25,true,"armut",15,false] gibi stok tutan bir uygulamaya dönüşsün

// [09:48] Onur Alp Aydın (BilgeAdam Boost)

// diziyi terse çevirip tek satır bir cümle oluşturunuz.

const stockList=[];
stockList.push("elma",25,true,"armut",35,false,"karpuz");
stockList.pop();
stockList.shift();
stockList.unshift("erik")
stockList.splice(2,2,false,"çilek")
console.log("********************");
console.log(stockList[0]);
console.log(stockList[1]);
console.log(stockList[2]);
console.log(stockList[3]);
console.log(stockList[4]);
console.log(stockList[5]);
let deger=stockList.reverse().join(" ");
console.log(deger);