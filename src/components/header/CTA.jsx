import React from 'react'
import CV from '../../assets/Currículo - Gustavo Pereira dos Santos.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Baixar Curriculo</a>
        <a href="#contato" className='btn btn-primary'>Fale Comigo</a>
    </div>
  )
}

export default CTA