import './App.css'
import About from './components/about'
import Contacts from './components/contacts'
import Header from './components/header'
import Projects from './components/projects'

function App() {

  return (
    <div className='container'>
      <Header/>
      <div className="main">
        <About/>
        <Projects/>
        <Contacts/>
      </div>
    </div>
  )
}

export default App
