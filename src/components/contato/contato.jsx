import React from 'react'
import './contato.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'
import {AiOutlineWhatsApp} from 'react-icons/ai'

const Contato = () => {
  return (
    <section id='contato'>
      <h2>Contato</h2>

      <div className='container contato__container'>
        <div className="contato__opcoes">
          <article className='contato__opcao'>
            <AiOutlineMail className='.contato__opcao-icon'/>
            <h4>Email</h4>
            <h5>gustavo-pereira23@protonmail.com</h5>
            <a href="mailto:gustavo-pereira23@protonmail.com" target="_blank">Envie uma mensagem</a>
          </article>

          <article className='contato__opcao'>
            <BsLinkedin className='.contato__opcao-icon'/>
            <h4>Linkedin</h4>
            <h5>Gustavo Pereira dos Santos</h5>
            <a href="https://www.linkedin.com/in/gustavo-pereira-dos-santos" target="_blank">Envie uma mensagem</a>
          </article>

          <article className='contato__opcao'>
            <AiOutlineWhatsApp className='.contato__opcao-icon'/>
            <h4>Whatsapp</h4>
            <h5>55 51 99588-1983</h5>
            <a href="https://api.whatsapp.com/send?phone=5551995881983" target="_blank">Envie uma mensagem</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Nome completo' required/>
          <input type="email" name='email' placeholder='Email' required/>
          <textarea name="message" rows="10" placeholder='Escreva uma mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar Mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contato