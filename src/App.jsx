import React from 'react'
import './App.css'
import { Footer,Blog,Posibilities,Features,WhatGpt3,Header } from './assets/containers'
import { Navbar,Cta,Brand } from './assets/components'


export default function App() {
  return (
    <div className='app'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGpt3/>
      <Features/>
      <Posibilities/>
      <Cta/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}
