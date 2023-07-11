import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jason Pien</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Exeperience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#interests">Interests</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/jason-pien"><BsLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer