import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { coutContext } from './context/index'
import Router from './router'

export default function App() {
  const [count, setCount] = useState('role')
  return (
    <BrowserRouter>
      <coutContext.Provider value={{ count, setCount }}>
        <Router></Router>
      </coutContext.Provider>
    </BrowserRouter>
  )
}
