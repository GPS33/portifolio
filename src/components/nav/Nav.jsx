import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineDesktop} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'

const Nav = () => {
  const[activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#sobre" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#conhecimentos" onClick={() => setActiveNav('#conhecimentos')} className={activeNav === '#conhecimentos' ? 'active' : ''}><BiBookOpen /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><AiOutlineDesktop /></a>
      <a href="#contato" onClick={() => setActiveNav('#contato')} className={activeNav === '#contato' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav