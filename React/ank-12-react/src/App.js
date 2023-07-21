// import React from "react"; 
// // import {Card,Oguzhan} from "./components/Card";
// import Card from "./components/Card";
// import State from "./components/State";
// //değişken tanımlayabiliyoruz.
// // const courseList = [
// //   {
// //     id: 1,
// //     course: "C#",
// //   },
// //   {
// //     id: 2,
// //     course: "HTML",
// //   },
// //   {
// //     id: 3,
// //     course: "JS",
// //   },
// //   {
// //     id: 4,
// //     course: "CSS",
// //   },
// //   {
// //     id: 5,
// //     course: "REACT",
// //   },
// // ];
// // function Eyup() {
// //   const titleName = "Dinamik başlık";
// //   const listName = "KURS LİSTESİ";

// //   const listem = [<p>Mustafa</p>, <p>Melih</p>, <p>Hasret</p>];
// //   return (
// //     <>
// //       <header>
// //         <h2>Statik Başlık</h2>
// //         <h2>{titleName}</h2>
// //         <h3>Toplam:{111 + 7}</h3>
// //       </header>
// //       <div className="App">
// //         <h2>Course List</h2>
// //         <ul>
// //           <li>REACT</li>
// //           <li>C#</li>
// //           <li>HTML</li>
// //           <li>CSS</li>
// //           <li>JS</li>
// //         </ul>
// //         <hr />
// //         <h2>{listName}</h2>
// //         <ul>
// //           {courseList.map((kurs) => (
// //             <li>
// //               {kurs.id}-{kurs.course}
// //             </li>
// //           ))}
// //         </ul>
// //       </div>
// //       <Mehtap />
// //       <div>{`Template Literals ${titleName}`}</div>
// //       <ul>
// //         {courseList.map((kurs) => (
// //           <li>{`template literals kullanırsak ${kurs.id}-${kurs.course}`}</li>
// //         ))}
// //       </ul>
// //       {listem}
// //       <Burak />
// //       <NuriBaran/>
// //       <Card/>
// //       <Oguzhan/>
// //     </>
// //   );
// // }

// // const Mehtap = () => {
// //   return <div>Atakan</div>;
// // };

// // const Burak = () => {
// //   const isActive = true;
// //   return (
// //     <div className="Burak">
// //       <h3>KURS LİSTEM</h3>
// //       {isActive ? (
// //         <div>
// //           <ul>
// //             {courseList.map((kurs) => (
// //               <li>
// //                 {kurs.id}-{kurs.course}
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       ) : (
// //         <section>Oğuzhan</section>
// //       )}
// //     </div>
// //   );
// // };
// // const NuriBaran = () => {
// //   const isActive = true;
// //   return (
// //     <div className="Nuri-Baran">
// //       <h3>KURS LİSTEM</h3>
// //      <ul>
// //       {courseList.filter((kurs)=>kurs.id===2).map((eleman)=><li>{eleman.id}-{eleman.course}</li>)}
// //      </ul>
// //      <hr />
// //      <br />
// //      <ul>
// //       {courseList.filter((kurs)=>kurs.course.includes("T")).map((eleman)=><li>{eleman.id}-{eleman.course}</li>)}
// //      </ul>
// //      <hr />
// //      <br />
// //      <ul>
// //       {courseList.filter((kurs)=>!(kurs.id%2)).map((eleman)=><li>{eleman.id}-{eleman.course}</li>)}
// //      </ul>
     
// //     </div>
// //   );
// // };

// // export default Eyup;


// const App = () => {
//   const courseName="CSS";
//   const courseImg="https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg";
//   const courseInfo="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
//   const courseLink="https://en.wikipedia.org/wiki/CSS"
//   return (
//     <div className="app">
//       <Card kursAdi={courseName} kursResmi={courseImg}
//       kursBilgisi={courseInfo} 
//       kursLinki={courseLink}/>

//       <Card kursAdi="HTML" kursResmi="https://i.stack.imgur.com/PgcSR.png" 
//       kursBilgisi="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript."
//       kursLinki={courseLink}/>

// <Card />
// <State/>
//     </div>
//   )
// }

// export default App







import React,{useState} from 'react'
import data from './data/db.js'
import Card from './components/Card.jsx'
import Form from './components/Form.jsx'

const App = () => {
  const handleDelete=(id)=>{
    setcourseData(courseData.filter((kurs)=>kurs.id!==id))
  }
  const [courseData, setcourseData] = useState(data)

  const propHandler=(course)=>{setcourseData([...courseData,course])}
  return (
    <div className='eyüp'>
      <Form handleCreate={propHandler}/>
      <br />
        <Card course={courseData} handleDelete={handleDelete}/>
    </div>
  )
}

export default App