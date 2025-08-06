import { useState } from 'react'
import './App.css'

import Converter from './components/Converter'
import ExchangeRates from './components/ExchageRates'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <div className="container">
        <Home />
      </div>
      <div className="container">
        <Converter />
      </div>
      <div className="container">
        <ExchangeRates />
      </div>
    </>
  )
}

export default App
