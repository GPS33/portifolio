import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Conhecimentos from './components/conhecimentos/Conhecimentos'
import Portifolio from './components/portifolio/Portifolio'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Sobre />
        <Conhecimentos />
        <Portifolio />
        <Contato />
        <Footer />
    </>
  )
}

export default App