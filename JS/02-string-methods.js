//let myVariable='      Atakan Mehtap Cemtuğ Baran Burak Eyüp Hasret        '
let myVariable='Cemtuğ Atakan Mehtap Cemtuğ Baran Burak Cemtuğ Eyüp Hasret Cemtuğ'

// length
// console.log(myVariable.length);
// let lengthDegeri=myVariable.length
// console.log(lengthDegeri);
// let logDegeri=console.log("test");
// console.log(logDegeri);

// //toUpperCase
// console.log(myVariable.toUpperCase());
// //tolowerCase
// console.log(myVariable.toLowerCase());


// // trim
// console.log(myVariable);
// console.log(myVariable.trim());
// console.log(myVariable.trimEnd());
// console.log(myVariable.trimStart());
// console.log(myVariable.trimLeft());
// console.log(myVariable.trimRight());

// //replace
// console.log(myVariable.replace("Atakan","BURAK"));
// console.log(myVariable.replace("Cemtuğ","BURAK"));

// // replaceall
// console.log(myVariable.replaceAll("Cemtuğ","Hakan Melih"));
// //substring
// console.log(myVariable.substring(1));
// console.log(myVariable.substring(1,9));
// console.log(myVariable.substring(-1));
// console.log(myVariable.substring(-1,9));
// console.log(myVariable.substring(6,0));
// console.log(myVariable.substring(0,6));

// //slice
// console.log(myVariable.slice());
// console.log(myVariable.slice(3));
// console.log(myVariable.slice(3, 9));
// console.log(myVariable.slice(-3));
// console.log(myVariable.slice(-1));
// console.log(myVariable.slice(6,0));
// console.log(myVariable.slice(-4,-1));
// console.log(myVariable.slice(-1,-4));

//includes
console.log(myVariable);
console.log(myVariable.includes("Mehtap"));
console.log(myVariable.includes("Mehtap"));
console.log(myVariable.includes("mehtap"));
console.log(myVariable.includes("Mehtap",10));
console.log(myVariable.includes("Mehtap",20));

//indexOf
console.log(myVariable.indexOf("Mehtap"));
console.log(myVariable.indexOf("mehtap"));
let ucuncuTespit= myVariable.indexOf("Cemtuğ",6)
console.log(myVariable.indexOf("Cemtuğ",(ucuncuTespit+6)))
//lastIndexOf
console.log(myVariable.lastIndexOf("Cemtuğ"));

console.log(myVariable.substr(10,10));
let myVariable1='Cemtuğ,Atakan,Mehtap,Cemtuğ,Baran Burak Cemtuğ Eyüp Hasret Cemtuğ'
//split
console.log(myVariable.split(" "));
console.log(myVariable.split(""));
console.log(myVariable1.split(","));