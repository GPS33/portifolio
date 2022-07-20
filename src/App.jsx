import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'

import Conhecimentos from './components/conhecimentos/Conhecimentos'
import Portfolio from './components/portfolio/Portfolio'

import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
        <Header />
        <Nav />
        
        <Conhecimentos />
        <Portfolio />
        
        <Footer />
    </>
  )
}

export default App