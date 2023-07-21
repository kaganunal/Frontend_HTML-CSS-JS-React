import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';

function App() {

  const title = "Welcome to My Site"
  const message = "Merhaba, benim adım Cem"

  const skillsTitle = "Skills"
  const skills = [
    {
      title: "HTML",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam reiciendis enim ut quo commodi optio, veritatis ab numquam omnis?"
    },
    {
      title: "CSS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam reiciendis enim ut quo commodi optio, veritatis ab numquam omnis?"
    },
    {
      title: "JS",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam reiciendis enim ut quo commodi optio, veritatis ab numquam omnis?"
    },
    {
      title: "REACT",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quam reiciendis enim ut quo commodi optio, veritatis ab numquam omnis?"
    },
  ]


  return (
    <div className="App">
      <Header bgColor={"#333"} />
      <Main mesaj={message} title={title} src={"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80"} imgAlt={"person-image"} />
      <Skills title={skillsTitle} skills={skills} />
    </div>
  );
}

export default App;
