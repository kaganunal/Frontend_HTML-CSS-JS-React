// import React from 'react'
// import { useState } from 'react'

// const State = () => {
//     return (
//         <div>
//             <h2>State bir componentin hafızasıdır.</h2>
//             <MyButton />
//             <br />
//             <MyButtonState />
//             <hr />
//             <ArkadaslariGez/>
//             <hr />
//             <br />
//             <StringSet/>
//             <hr />
//             <br />
//             <ChekboxCheck/>
//         </div>
//     )
// }


// const MyButton = () => {
//     let counter = 0;
//     const handleClick = () => {
//         counter++;
//         console.log(counter);
//     }
//     return (
//         // <button type='button' onClick={()=>{counter++
//         // console.log(counter);
//         // }}>HELLO {counter}</button>
//         <button type='button' onClick={handleClick}>HELLO {counter}</button>
//     )
// }



// const MyButtonState = () => {
//     const [sayac, setSayac] = useState(0)
//     const handleClick = () => {
//         setSayac(sayac + 1)
//         console.log(sayac);
//         console.log(setSayac);
//     }
//     return (
//         // <button type='button' onClick={()=>{counter++
//         // console.log(counter);
//         // }}>HELLO {counter}</button>
//         <button type='button' onClick={handleClick}>Sayaçlı HELLO {sayac}</button>
//     )
// }
// const friends = [{ ad: "Eyüp", soyad: "Kayatuzi" }, { ad: "Atakan", soyad: "Bektaş" }, { ad: "Mehtap", soyad: "Çiftci" }, { ad: "Hakan Melih", soyad: "Zambak" }, { ad: "Nuri Baran", soyad: "Yeşilay" }]

// const ArkadaslariGez = () => {
// const [index, setIndex] = useState(0)
// const handleNext=()=>{
//     // if (index===friends.length-1) {
//     //     console.log(index);
//     //     setIndex(0);
        
//     // } else {
//     //     console.log(index);
//     //     setIndex(index+1)
//     // }
//     index===friends.length-1 ? setIndex(0) :setIndex(index+1) 
// }
//   return (
//     <div>
//         <h2>{friends[index].ad}</h2>
//         <h2>{friends[index].soyad}</h2>
//         <button type='button' onClick={handleNext}>NEXT</button>
//     </div>
//   )
// }


// const StringSet = () => {
//     const [yazi, setYazi] = useState("Eyüp")
//     const yaziYakala=(e)=>{
//         setYazi(e.target.value)
//     }
//   return (
//     <div>
//         <input type="text" onChange={yaziYakala} value={yazi} />
//         <p>{yazi}</p>
//         <button onClick={()=>{setYazi("")}}>Sil</button>
//     </div>
//   )
// }

// const ChekboxCheck = () => {
//     const [onayla, setOnayla] = useState(true)
//     const onaylaYakala=(e)=>{setOnayla (e.target.checked)}
//   return (
//     <div>
//         <label htmlFor="">Onayladım</label>
//         <input type="checkbox" checked={onayla}  onChange={onaylaYakala} />
//         <p>Sen bu checkboxı {onayla ? 'onayladın': 'onaylamadın'}</p>
//         <p>Sen bu checkboxı {onayla ? 'MEHTAP': 'İLKİZ'}</p>
//     </div>
//   )
// }


// export default State
