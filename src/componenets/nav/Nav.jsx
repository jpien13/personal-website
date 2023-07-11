import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBook} from 'react-icons/bs'
import {MdWork} from 'react-icons/md'
import {BiMailSend} from 'react-icons/bi'
import {useState } from 'react'
import {MdSkateboarding} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav> 
      <a href='#' onClick={() => setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={() => setActiveNav('#experience')}className={activeNav === '#experience' ? 'active' : ''}><MdWork/></a>
      <a href='#portfolio'onClick={() => setActiveNav('#portfolio')}className={activeNav === '#portfolio' ? 'active' : ''}><BsBook/></a>
      <a href='#interests'onClick={() => setActiveNav('#interests')}className={activeNav === '#interests' ? 'active' : ''}><MdSkateboarding/></a>
      <a href='#contact'onClick={() => setActiveNav('#contact')}className={activeNav === '#contact' ? 'active' : ''}><BiMailSend/></a>
    </nav>
  )
}

export default Nav