import React from 'react'
import './header.css' 
import CTA from './CTA'
import EU from '../../assets/f3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Gustavo Pereira dos Santos</h1>
        <h5 className="text-light">Desenvolvedor Front End</h5>
        <CTA />

        <HeaderSocials />

        <div className="eu">
          <img src={EU} alt="eu" />
        </div>

        <a href="#contato" className='scroll__down'>Rolar para Baixo</a>
      </div>
    </header>
  )
}

export default Header