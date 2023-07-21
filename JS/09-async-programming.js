// console.log(1);
// console.log(2);
// console.log("uzun süren bir işlem");
// console.log(4);
// console.log(5);

// const greetings=()=>console.log("hello world");
// // greetings();
// setInterval(()=>console.log("her saniye çalışırım"),1000)
// setTimeout(greetings,3000)
// setTimeout(greetings,6000)

//XHR XML HTTP REQUEST (JSON)
// const url="https://jsonplaceholder.typicode.com/posts/1/comments"
// const XHR =new XMLHttpRequest();
// console.log(XHR.readyState);
// XHR.open("GET",url)
// console.log(XHR.readyState);
// XHR.responseType="json"
// XHR.send();
// XHR.onreadystatechange=()=>{
//     if (XHR.readyState===4 && XHR.status===200) {
//         console.log(XHR.response);
//     }
// }

// const url1="https://jsonplaceholder.typicode.com/posts"

// const newPost=JSON.stringify({
//     userId:1,
//     id:1,
//     title:"Onur Alp Aydın",
//     body:"lorem ipsum"
// })
// // XHR.abort();
// const xhr=new XMLHttpRequest();
// xhr.open("POST",url1);
// xhr.setRequestHeader("Content-type","application/json, charset=utf-8")
// console.log(xhr.readyState);
// xhr.send(newPost);
// xhr.onreadystatechange=()=>{
//     if (xhr.status===201 && xhr.readyState===4) {
//         console.log("success");
//         console.log(newPost);
//     }
//     else{
//         console.log("error"+ xhr.status);
//     }
// }

// Promise nedir

// const promiseNesnem=new Promise((resolve,rejected)=>{
//     // resolve("Promise başarılı"),
//     rejected("promise tamamlandı ancak istenilen veri elde edilemedi")
// }).then(value=>console.log(value)).catch(err=>console.log(err))
// console.log(promiseNesnem);

// FetchApi-then
// https://pokeapi.co/api/v2/pokemon/pikachu

//   fetch("https://api.chucknorris.io/jokes/random")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

// const testNesnem = fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));
// //jsonplaceholder.typicode.com/posts/1/comments

// const test=fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) =>donusturulenNesne.filter((eleman)=>eleman.id===3)).then(filtrelenmisEleman=>console.log(filtrelenmisEleman[0].email))
//   .catch((err) => console.log(err))
// //   .finally(() => console.log("işlem tamam"));
// console.log(test);

//   fetch("https://pokeapi.co/api/v2/pokemon/squirtle")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

//   fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));
//   fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((json) => console.log(json));
//   fetch("https://pokeapi.co/api/v2/pokemon/charmander")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

//   fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

//   fetch("https://pokeapi.co/api/v2/pokemon/psyduck")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

//   fetch("https://pokeapi.co/api/v2/pokemon/onix")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

  
//   fetch("https://api.chucknorris.io/jokes/categories")
//   .then((cevap) => cevap.json())
//   .then((donusturulenNesne) => console.log(donusturulenNesne))
//   .catch((hata) => console.log(hata));

// async await

const asyncGet=async()=>{
    const response=await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data=await response.json();
    console.log(data.name);
    const response1=await fetch("https://api.chucknorris.io/jokes/categories");
    const data1=await response1.json();
    console.log(data1);
    const response2=await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
    const data2=await response2.json();
    console.log(data2);
    const response3=await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const data3=await response3.json();
    console.log(data3.filter(post=>post.id===1));
}
asyncGet();