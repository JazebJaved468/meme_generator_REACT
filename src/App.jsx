import React from 'react'
import './css/App.css'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'


export default function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <MainContent />
    </div>
  )
}


