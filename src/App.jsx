import './App.css'
import AboutMe from './components/AboutMe'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Faq from './components/Questions'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import InsuranceDisplay from './components/InsuranceDisplay'
import Quote1 from './components/Quote1'

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <InsuranceDisplay></InsuranceDisplay>
    <AboutMe></AboutMe>
    <Quote1></Quote1>
    <Services></Services>
    <Faq></Faq>
    <ContactMe></ContactMe>
    <Footer></Footer>
    </div>
  )
}

export default App;