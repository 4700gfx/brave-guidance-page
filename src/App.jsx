import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Services></Services>
    </div>
  )
}

export default App;