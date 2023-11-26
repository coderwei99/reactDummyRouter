import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { coutContext } from '../../context/index'
export default function Login() {
  const navigate = useNavigate()
  const { count, setCount } = useContext(coutContext)
  const handleLoginClick = () => {
    console.log('login', count)
    setCount('role')
    navigate('/main')
  }
  return (
    <div>
      <button onClick={handleLoginClick}>login:</button>
    </div>
  )
}
