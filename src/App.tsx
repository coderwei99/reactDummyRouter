import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { coutContext } from './context/index'
import Router from './router'

export default function App() {
  const [count, setCount] = useState('role')
  const [menuList, setMenuList] = useState([])
  return (
    <BrowserRouter>
      <coutContext.Provider value={{ count, setCount, menuList, setMenuList }}>
        <Router></Router>
      </coutContext.Provider>
    </BrowserRouter>
  )
}
