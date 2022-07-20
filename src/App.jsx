import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Sobre from './components/sobre/Sobre'
import Conhecimentos from './components/conhecimentos/Conhecimentos'
import Portfolio from './components/portfolio/Portfolio'
import Contato from './components/contato/Contato'
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <Sobre />
        <Conhecimentos />
        <Portfolio />
        <Contato />
        <Footer />
    </>
  )
}

export default App