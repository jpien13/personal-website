import React from 'react'
import Header from './componenets/header/Header.jsx'
import Nav from './componenets/nav/Nav.jsx'
import About from './componenets/about/About.jsx'
import Experience from './componenets/experience/Experience.jsx'
import Portfolio from './componenets/portfolio/Portfolio.jsx'
import Testimonials from './componenets/testimonials/Testimonials.jsx'
import Contact from './componenets/contact/Contact.jsx'
import Footer from './componenets/footer/Footer.jsx'
import Interests from './componenets/interests/Interests.jsx'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Interests/>
      <Contact />
      <Footer />
      
    </>
  )
}

export default App