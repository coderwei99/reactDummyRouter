import { createContext } from 'react'

export const coutContext = createContext<{ count: string; setCount: (n: string) => void }>({
  count: '',
  setCount: () => {},
})
