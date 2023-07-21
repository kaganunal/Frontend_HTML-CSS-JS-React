// nesne(object) nedir?
// sınıf(class) nedir ?
const instructor = {
  firstName: "Onur Alp",
  lastName: "Aydın",
  "tc-KNO": 1234567890,
  birthPlace: "Ankara",
  isMarried: false,
  birthYear: 1995,
  hobbies: ["fishing", "coding", "reading"],
  age: function () {
    return 2023 - this.birthYear;
  },
};
const apple={
    color:"Red",
    weight:100
}
console.log(instructor);
// dot notation
console.log(instructor.lastName);
// bracket notation
console.log(instructor["firstName"]);
console.log(instructor["tc-KNO"]);
console.log(instructor.age());
instructor.firstName="Atakan"
instructor.lastName="Bektaş"
// console.log(instructor);
instructor.hasAuto=true
console.log(instructor);
instructor["isStudent"]="falS€"
console.log(instructor);

// hasOwnProperty
console.log(instructor.hasOwnProperty("firstName"));
console.log(instructor.hasOwnProperty("firstname"));

//object.keys
console.log(Object.keys(instructor));
//object.values
console.log(Object.values(instructor));
// for in
for (const key in instructor) {
    if (Object.hasOwnProperty.call(instructor, key)) {
        let value = instructor[key];
        console.log(`Property Key: ${key} - Value:${value}`);
    }
}

// object entries
console.log(Object.entries(instructor));
// for of
for (const [mahmut,tuncer] of Object.entries(instructor)) {
    console.log(`${mahmut}///${tuncer}`);
}
// customForof
const variable=Object.entries(instructor)
variable.forEach(dizi=>console.log(dizi[0],dizi[1]))

// object freeze
Object.freeze(instructor);
instructor.firstName = "Burak";
console.log(instructor);
instructor.sevdigimHayvanlar = ["kedi", "köpek", "kuş"];
console.log(instructor);

const copiedInstructor = { ...instructor };
copiedInstructor.firstName = "Burak";
copiedInstructor.lastName = "Özgür";
copiedInstructor.sevdigimHayvanlar = ["kedi", "köpek", "kuş"];
console.log(copiedInstructor);
const assignInstructor = Object.assign({}, copiedInstructor);
assignInstructor.firstName = "Zeynep İlkiz";
assignInstructor.lastName = "Kasapoğlu";
console.log(assignInstructor);
// const newInstructor=assignInstructor
// assignInstructor.birthPlace="İstanbul"
// console.log(newInstructor);
// newInstructor.firstName="Hakan Melih"
// newInstructor.lastNameName="Zambak"
// console.log(newInstructor);

// object seal
Object.seal(copiedInstructor);
copiedInstructor.yeniOzellik = 123;
copiedInstructor.firstName = "Oğuz Kaan";
copiedInstructor.lastName = "Oğuz Kaan";
delete copiedInstructor.firstName;
delete assignInstructor.firstName;
console.log(copiedInstructor);
console.log(assignInstructor);

// destructring
// [firstValue, secondValue] = ["Nuri", "Baran"];

// [firstValue, secondValue, ...geriKalanDegerler] = [
//   "Nuri",
//   "Baran",
//   "Yeşilay",
//   "Atakan",
//   "Bektaş",
//   "Cemtuğ",
//   "Kaan",
//   "Taşan",
// ];
// console.log(firstValue);
// console.log(secondValue);
// console.log(geriKalanDegerler);

// rest pattern
// [first, second, ...rest] = [
//   ["Nuri", "Baran"],
//   ["Yeşilay", "Atakan"],
//   ["Bektaş", "Cemtuğ", "Kaan", "Taşan"],
// ];
// console.log(first);
// console.log(...first);
// console.log(rest);
// console.log(...rest);

const students = [
  "Nuri",
  "Baran",
  "Yeşilay",
  "Atakan",
  "Bektaş",
  "Cemtuğ",
  "Kaan",
  "Taşan",
];
// array destructring
// [first,second,third,...rest]=students
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// object destructring
const {firstName,soyadi,birthPlace,birthYear}=instructor
console.log(firstName);
console.log(soyadi);
console.log(birthPlace);
console.log(birthYear);