import { useEffect, useState } from 'react'
import { getProtected, logout } from './api'

export default function Protected() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    getProtected().then(res => setMessage(res.message || res.error))
  }, [])



  useEffect(() => {
    const checkAuth = async () => {
      const res = await getProtected()
      if (res.message) setMessage(res.message)
    }
    checkAuth()
  }, [logout])


  return <div>

    {message}

    <button onClick={logout}>Logout</button>
  </div>
}
