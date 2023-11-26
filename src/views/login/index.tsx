import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { coutContext } from '../../context/index'
export default function Login() {
  const navigate = useNavigate()
  const { setCount } = useContext(coutContext)
  const handleLoginClick = (p) => {
    setCount(p)
    navigate('/main')
  }
  return (
    <div>
      <button onClick={() => handleLoginClick('role')}>login: Role</button>
      <button onClick={() => handleLoginClick('user')}>login: User</button>
    </div>
  )
}
