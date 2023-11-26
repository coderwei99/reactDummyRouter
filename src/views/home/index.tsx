import { coutContext } from '@/context'
import { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Index() {
  const { count, setCount, menuList } = useContext(coutContext)
  console.log(menuList)
  return (
    <>
      {menuList.map((item) => {
        return (
          <div key={item.path} to={item.path}>
            {item.title}: {Math.random()}
            {item.children.map((_item) => {
              return (
                <div key={_item.path}>
                  <NavLink to={_item.path}>{_item.title}</NavLink>
                </div>
              )
            })}
          </div>
        )
      })}
      {/* <div>
        <NavLink to="/main">home: {Math.random()}</NavLink>
      </div>
      <div>
        <NavLink to="/main/about">about</NavLink>
      </div>
      <div>
        <NavLink to="/main/category">category</NavLink>
      </div> */}
      {/* <div
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
      </div> */}
      <h1>{count}</h1>
      <Outlet />
    </>
  )
}
