import { useState, useEffect } from 'react'
import { login, getProtected } from './api'

export default function Login({ setLoggedIn }) {
  const [form, setForm] = useState({ username: '', password: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await login(form)
    console.log(res)

    if (res.message) setLoggedIn(true)
    else alert(res.error)
  }

  // ✅ Vérifie au chargement si le cookie est encore valide
  useEffect(() => {
    const checkAuth = async () => {
      const res = await getProtected()
      if (res.message) setLoggedIn(true)
    }
    checkAuth()
  }, [])

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} placeholder="Username" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button>Login</button>
    </form>
  )
}
