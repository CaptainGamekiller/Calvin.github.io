import React from 'react'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Positions from './components/Positions/Positions'
import Experience from './components/Experience/Experience'
import css from './styles/App.module.scss'
const App = () => {
  //don't forget to add font link in index.html
  //更改了順序位置
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Positions/>
      <Footer/>
    </div>
  )
}

export default App