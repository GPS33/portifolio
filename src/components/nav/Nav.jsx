import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookOpen} from 'react-icons/bi'
import {AiOutlineDesktop} from 'react-icons/ai'
import {AiOutlineMessage} from 'react-icons/ai'


const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#sobre"><AiOutlineUser /></a>
      <a href="#conhecimentos"><BiBookOpen /></a>
      <a href="#portifolio"><AiOutlineDesktop /></a>
      <a href="#contato"><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav