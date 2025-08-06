import { useState } from 'react'
import Login from './Login'
import Protected from './Protected'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  return (
    <div>
      <h1>JWT Auth App</h1>
      {loggedIn ? <Protected /> : <Login setLoggedIn={setLoggedIn} />}
    </div>
  )
}

export default App
