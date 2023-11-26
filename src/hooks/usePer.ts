import { useState } from 'react'

export default function usePer() {
  const [count, setCount] = useState(0)

  return {
    count,
    setCount,
  }
}
