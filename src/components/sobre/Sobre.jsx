import React from 'react'
import './sobre.css'
import EU from '../../assets/ff.jpg'
import { FaGraduationCap } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'

const Sobre = () => {
  return (
    <section id='sobre'>
      <h2>Sobre Mim</h2>

      <div className='container sobre__container'>
        {/* Imagem de apresentação */}
        <div className="sobre__mim">
          <div className="sobre__mim__img">
            <img src={EU} alt="Imagem Sobre Mim" />
          </div>
        </div>

        {/* Conteúdo textual e cards */}
        <div className="sobre__conteudo">
          {/* Cards de experiências */}
          <div className="sobre__cards">
            <article className='sobre__card'>
              <FaGraduationCap className="sobre__icone" />
              <h5>Técnico em <br /> Informática</h5>
              <small>Formado no IFSul Campus Charqueadas (2018-2022)</small>
            </article>

            <article className='sobre__card'>
              <BiCodeAlt className="sobre__icone" />
              <h5>Desenvolvedor <br /> Web</h5>
              <small>Experiência com Html/Css, Javascript, ReactJS, Vite, Tailwind, Bootstrap, PHP e MySQL</small>
            </article>

            <article className='sobre__card'>
              <BiCodeAlt className="sobre__icone" />
              <h5>Desenhista Técnico - <br /> Topografia</h5>
              <small>Atuando na empresa Agro Engenharia de setembro/2022 até abril/2024</small>
            </article>

            <article className='sobre__card'>
              <BiCodeAlt className="sobre__icone" />
              <h5>Manutenção de <br /> Computadores</h5>
              <small>Formatação, exclusão de vírus e limpeza para garantir o melhor desempenho.</small>
            </article>
          </div>

          {/* Texto de apresentação */}
          <p>
            Sou desenvolvedor web e técnico em informática. Trabalhei como Desenhista Técnico na empresa Agro Engenharia, atuei de forma autônoma com manutenção de computadores e trabalhei na empresa Making Publicidade como Desenvolvedor Web. Atualmente cursando Análise e Desenvolvimento de Sistemas na UniBF.
          </p>

          {/* Botão de contato */}
          <div className='buton'>
            <a href="#contato" className='btn btn-primary'>Fale Comigo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
