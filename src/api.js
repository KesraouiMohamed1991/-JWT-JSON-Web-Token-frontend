const API = import.meta.env.VITE_API_URL

export const login = async (credentials) => {
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials)
  })

  const json = await res.json()

  console.log(json);
  return json
}

export const logout = async () => {
  const res = await fetch(`${API}/logout`, {
    method: 'POST',
    credentials: 'include'
  })

  const json = await res.json()
  console.log(json);

  return await json
}


export const getProtected = async () => {
  const res = await fetch(`${API}/protected`, {
    credentials: 'include'
  })
  return await res.json()
}
