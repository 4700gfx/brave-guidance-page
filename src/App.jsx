import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Faq from './components/Questions'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <AboutMe></AboutMe>
    <Services></Services>
    <Faq></Faq>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
  )
}

export default App;