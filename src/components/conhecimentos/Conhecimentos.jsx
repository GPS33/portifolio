import React from 'react'
import './conhecimentos.css'
import{BsFillCheckCircleFill} from 'react-icons/bs'

const Conhecimentos = () => {
  return (
    <section id='conhecimentos'>
      <h2>Conhecimentos</h2>
      <div className="container conhecimentos__container">
        <div className="container conhecimentos__frontend">
          <h3>Desenvolvimento Front End</h3>
            <div className="conhecimento__conteudo">
              <article className='conhecimentos__detalhes'>
              <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
              <h4>HTML</h4>
              </article>

              <article className='conhecimentos__detalhes'>
              <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
              <h4>CSS</h4>
              </article>

              <article className='conhecimentos__detalhes'>
              <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
              <h4>Javascript</h4>
              </article>

              <article className='conhecimentos__detalhes'>
              <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
              <h4>Bootstrap</h4>
              </article>

              <article className='conhecimentos__detalhes'>
              <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
              <h4>ReactJS</h4>
              </article>
              
            </div>
        </div>

        <div className="container conhecimentos__outros">
          <h3>Outras Skills</h3>
            <div className="conhecimento__conteudo">
              <article className='conhecimentos__detalhes'>
                <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
                <h4>Linguagem C</h4>
              </article>

              <article className='conhecimentos__detalhes'>
                <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
                <h4>Banco de Dados</h4>
              </article>

              <article className='conhecimentos__detalhes'>
                <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
                <h4>MySQL</h4>
              </article>

              <article className='conhecimentos__detalhes'>
                <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
                <h4>AutoCAD</h4>
              </article>

              <article className='conhecimentos__detalhes'>
                <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
                <h4>Unity, C#</h4>
              </article>

              <article className='conhecimentos__detalhes'>
                <BsFillCheckCircleFill className='conhecimentos__detalhes-icones'/>
                <h4>Inglês</h4>
              </article>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Conhecimentos