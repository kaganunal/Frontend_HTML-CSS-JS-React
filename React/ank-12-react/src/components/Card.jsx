// // import React from 'react'

// // const Card = () => {
// //   return (
// //     <>
// //     <div>Card</div>
// //     <Oguzhan/>
// //     </>
// //   )
// // }

// // const Oguzhan = () => {
// //     return (
// //       <div>Oğuzhan</div>
// //     )
// //   }


// // export  {Card,Oguzhan}
// // import React from 'react'

// // const Card = () => {
// //   return (
// //     <div>
// //       <div className="card">
// //         <img src="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg" alt="" />
// //         <h2>CSS</h2>
// //         <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
// //         <div className="btn"><a href="">Link</a></div>

// //       </div>
// //       <div className="card">
// //         <img src="https://i.stack.imgur.com/PgcSR.png" alt="" />
// //         <h2>HTML</h2>
// //         <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.</p>
// //         <div className="btn"><a href="">Link</a></div>

// //       </div>
// //     </div>
// //   )
// // }

// // export default Card


// // import React from 'react'

// // const Card = (props) => {
// //   console.log(props);
// //   return (
// //     <div className="card">
// //       <img src={props.kursResmi} alt="" />
// //       <div className="info">
// //         <h3>{props.kursAdi}</h3>
// //         <p>{props.kursBilgisi}</p>
// //       </div>
// //       <div className="btn">
// //         <a href={props.kursLinki}>More info...</a>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Card

// // import React from 'react'

// // const Card = ({ kursAdi="JS", kursBilgisi="Eyüp", kursLinki="Burak", kursResmi="https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png" }) => {
// //   // console.log(kursAdi);
// //   // console.log(kursBilgisi);
// //   // console.log(kursResmi);
// //   // console.log(kursLinki);
// //   return (
// //     <div className="card">
// //       <img src={kursResmi} alt="" />
// //       <div className="info">
// //         <h3>{kursAdi}</h3>
// //         <p>{kursBilgisi}</p>
// //       </div>
// //       <div className="btn">
// //         <a href={kursLinki}>More info...</a>
// //       </div>
// //     </div>
// //   )
// // }

// // import React from 'react'

// const Card = ({ kursAdi, kursBilgisi, kursLinki, kursResmi }) => {
//     // console.log(kursAdi);
//     // console.log(kursBilgisi);
//     // console.log(kursResmi);
//     // console.log(kursLinki);
//     return (
//       <div className="card">
//         <img src={kursResmi} alt="" />
//         <div className="info">
//           <h3>{kursAdi}</h3>
//           <p>{kursBilgisi}</p>
//         </div>
//         <div className="btn">
//           <a href={kursLinki}>More info...</a>
//         </div>
//         {/* <Button/>
//         <Button textGelen="Burak" bgColorGelen="blue" colorGelen="yellow"/> */}
//       </div>
//     )
//   }
//   export default Card
//   Card.defaultProps={
//     kursAdi:"Hasret",
//     kursBilgisi:"Mehtap",
//     kursResmi:"https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png"
//   }


//   const Button = ({textGelen="Standart değer",bgColorGelen="#000",colorGelen="red"}) => {
//     return (
//       <button style={{backgroundColor:bgColorGelen , color:colorGelen}}>{textGelen}</button>
//     )
//   }

import React from 'react'

const Card = ({ course,handleDelete }) => {
    return (
        <div className="card-content">
            {course.map((kurs) => <div className="cards">
                <div className="card">
                    <button className='delete-btn' onClick={()=>{handleDelete(kurs.id)}}>SİL</button>
                    <div className="title">
                        <img src={kurs.courseImg} alt={kurs.courseName} />
                        <div className="info">
                            <h3>{kurs.courseName}</h3>
                            <p>{kurs.courseInfo}</p>
                        </div>
                    </div>
                    <div className="btn">
                        <a href={kurs.courseURL} target='_blank'>MORE INFO ...</a>
                    </div>
                </div>
            </div>










            )}
        </div>
    )
}

export default Card