import { coutContext } from '@/context'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Index() {
  const { count, setCount } = useContext(coutContext)
  return (
    <>
      <div>
        <NavLink to="/main">home: {Math.random()}</NavLink>
      </div>
      <div>
        <NavLink to="/main/about">about</NavLink>
      </div>
      <div>
        <NavLink to="/main/category">category</NavLink>
      </div>
      <div
        onClick={() => {
          console.log(count)
          setCount('role')
        }}
      >
        click me to Role
      </div>
      <div
        onClick={() => {
          console.log(count)
          setCount('user')
        }}
      >
        click me to user
      </div>
      <h1>{count}</h1>
      <Outlet />
    </>
  )
}
