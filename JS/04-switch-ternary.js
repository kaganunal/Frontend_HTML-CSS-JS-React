// expression vs statement
const month = 9;
const day = 9;
// if statement
if (month === 1) {
  console.log("January");
} else if (month === 8) console.log("August");
else if(month>5 && day<21) console.log("Çoklu kontrol");
else console.log("Invalid Month");

// let operation=20-15;

switch (month && day) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
    case 7:
    console.log("July");
    break;
  case 8:
    console.log("Ağustos");
    break;
    case 9 && 9 :
        console.log("Buraya düşer mi ?");
        break;

  default:
    console.log("Böyle bir ay bulunmamaktadır.");
    break;
}

// ternary if
let age=15;
month>5 ?  console.log("5ten büyük"):console.log("5ten küçük");
month>=18 ?  console.log("Adult"):console.log("UnderAge");