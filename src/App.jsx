import { useState } from 'react'
import './App.css'

import Converter from './components/Converter'
import ExchangeRates from './components/ExchageRates'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Converter /> */}
      <ExchangeRates />
    </>
  )
}

export default App
