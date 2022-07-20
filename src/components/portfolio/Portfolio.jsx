import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/gs.png'
import IMG2 from '../../assets/tsJS.png'
import IMG3 from '../../assets/pomme.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className="portfolio_-item-img">
            <img src={IMG1} alt="Imagem do projeto gerador de senha" />
          </div>
          <h3>Gerador de Senha</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GPS33/Gerador-de-Senha" className='btn' target='_blank'>Github</a>
            <a href="https://gerador-de-senha-beta.vercel.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
            
        </article>

        <article className='portfolio__item'>
          <div className="portfolio_-item-img">
            <img src={IMG2} alt="Imagem do projeto Testes Javascript" />
          </div>
          <h3>Testes Javascript</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GPS33/Testes-Javascript" className='btn' target='_blank'>Github</a>
            <a href="https://teste-javascript.vercel.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio_-item-img">
            <img src={IMG3} alt="Imagem do projeto POMME" />
          </div>
          <h3>POMME</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/GPS33/POMME-projeto-hackaton" className='btn' target='_blank'>Github</a>
            <a href="https://pomme-projeto-hackaton.vercel.app/" className='btn btn-primary' target='_blank'>Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio