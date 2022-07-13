import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiVercel} from 'react-icons/si'

const HeaderSocials = () => {
    return (
      <div className='header__socials'>
          <a href="https://www.linkedin.com/in/gustavo-pereira-dos-santos-8493a0209/" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/GPS33" target="_blank"><BsGithub /></a>
          <a href="https://vercel.com/gps33" target="_blank"><SiVercel /></a>
      </div>
    )
  }

export default HeaderSocials