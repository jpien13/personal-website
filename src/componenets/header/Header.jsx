import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      
      <div className="container header__container">
        <h2>Hello I'm</h2>
        <h1>Jason Pien</h1>
        <h3 className="text-light-heading">Computer Engineering</h3>
        <CTA />
        <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default Header 