import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Faq from './components/Questions'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import InsuranceDisplay from './components/InsuranceDisplay'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <InsuranceDisplay></InsuranceDisplay>
    <AboutMe></AboutMe>
    <Services></Services>
    <Faq></Faq>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
  )
}

export default App;