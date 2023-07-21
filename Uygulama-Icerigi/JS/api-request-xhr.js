// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";

// GET

// const get = (callback, url) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("GET", url, true)
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){

//             if(xhr.status === 200){
//                 const response = JSON.parse(xhr.responseText)
//                 callback(null, response)
//             } else {
//                 callback("Hata: " + xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

// get((err, data) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// },`${jsonplaceholderURL}albums/7`)

// POST

// const post = (url, data, callback) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("POST", url, true)
//     xhr.setRequestHeader("Content-Type", "application/json" )

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status === 201){
//                 const response = JSON.parse(xhr.responseText)
//                 callback(null, response)
//             } else {
//                 callback("Hata: " + xhr.status, null)
//             }
//         }
//     }
//     xhr.send(JSON.stringify(data))
// }
// const postData = {name: "Cem", age: 29}

// post(`https://jsonplaceholder.typicode.com/albums`, postData, (err,data)=> {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// PUT

// const put = (url, data, callback) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("PUT", url, true)
//     xhr.setRequestHeader("Content-Type", "application/json" )

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 const response = JSON.parse(xhr.responseText)
//                 callback(null, response)
//             } else {
//                 callback("Hata: " + xhr.status, null)
//             }
//         }
//     }
//     xhr.send(JSON.stringify(data))
// }

// const putData = {name: "Cem"}

// put(`https://jsonplaceholder.typicode.com/users/1`, putData, (err,data)=> {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// PATCH

// const patch = (url, data, callback) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("PATCH", url, true)
//     xhr.setRequestHeader("Content-Type", "application/json" )

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status === 200){
//                 const response = JSON.parse(xhr.responseText)
//                 callback(null, response)
//             } else {
//                 callback("Hata: " + xhr.status, null)
//             }
//         }
//     }
//     xhr.send(JSON.stringify(data))
// }
// const patchData = {name: "Cem"}

// patch(`https://jsonplaceholder.typicode.com/users/1`, patchData, (err,data)=> {
//     if(err){
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// DELETE

// const del = (url, callback) => {
//     const xhr = new XMLHttpRequest()
//     xhr.open("DELETE", url, true)

//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             if(xhr.status === 200){
//                 callback(null)
//             } else {
//                 callback("Hata: " + xhr.status)
//             }
//         }
//     }
//     xhr.send()
// }

// del(`https://jsonplaceholder.typicode.com/users/1`, (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log("Kayıt silindi");
//     }
// })
