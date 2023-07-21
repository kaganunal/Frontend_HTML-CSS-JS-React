
import React,{useState} from 'react'

const Form = ({handleCreate}) => {
    const [photoURL, setPhotoURL] = useState("")
    const [courseName, setCourseName] = useState("")
    const [courseInfo, setCourseInfo] = useState("")
    const [courseURL, setcourseURL] = useState("")
    const handleSubmit=(e)=>{
e.preventDefault();
handleCreate({
    id:Math.floor(Math.random()*10000)+1,
    courseName:courseName,
    courseImg:photoURL,
    courseURL:courseURL,
    courseInfo:courseInfo
})
    }
  
  return (
<form action="" onSubmit={handleSubmit}>
    <div>
        <input type="text" placeholder='Course Name' onChange={(event)=>setCourseName(event.target.value)}/>
    </div>
    <div>
        <input type="text" placeholder='Course Image' onChange={(event)=>setPhotoURL(event.target.value)}/>
    </div>
    <div>
        <input type="text" placeholder='Course Info'onChange={(event)=>setCourseInfo(event.target.value)}/>
    </div>
    <div>
        <input type="text" placeholder='Course Link ' onChange={(event)=>setcourseURL(event.target.value)}/>
    </div>
    <input type="submit" className="btn btn-add" value={"Add Course"} />
</form>  )
}

export default Form