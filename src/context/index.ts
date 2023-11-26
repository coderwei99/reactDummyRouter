import { createContext } from 'react'

export const coutContext = createContext<{
  count: string
  menuList: any[]
  setCount: (n: string) => void
  setMenuList: any
}>({
  count: '',
  menuList: [],
  setCount: () => {},
  setMenuList: () => {},
})
