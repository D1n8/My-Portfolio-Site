import './App.css'
import About from './components/about'
import Footer from './components/footer'
import Header from './components/header'
import Projects from './components/projects'

function App() {

  return (
    <div className='container'>
      <Header/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
