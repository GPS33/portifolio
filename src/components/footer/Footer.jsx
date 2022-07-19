import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiVercel} from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Gustavo Pereira dos Santos</a>

      <ul className='permalinks'>
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Conhecimentos</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contato</a></li>
      </ul>

      <div className='footer_Socials'>
          <a href="https://www.linkedin.com/in/gustavo-pereira-dos-santos/" target="_blank"><BsLinkedin /></a>
          <a href="https://github.com/GPS33" target="_blank"><BsGithub /></a>
          <a href="https://vercel.com/gps33" target="_blank"><SiVercel /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022, Desenvolvido por Gustavo Pereira dos Santos. </small>
      </div>
    </footer>
  )
}

export default Footer