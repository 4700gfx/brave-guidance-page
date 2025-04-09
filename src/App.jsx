import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Faq from './components/Questions'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Services></Services>
    <Faq></Faq>
    </div>
  )
}

export default App;