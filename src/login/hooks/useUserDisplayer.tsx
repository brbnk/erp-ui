import { useState } from 'react'

type User = {
  found: boolean,
  name?: string,
  photo?: string
}

function useUserDisplayer() {
  const [user, setUser] = useState<User>({ found: false })
  const [visibility, setVisibility] = useState<boolean>(false)

  const assignUser = (u: User) => {
    setUser(u)
    setVisibility(true)
  }

  const resetUser = () => {
    setVisibility(false)
    setTimeout(() => setUser({ found: false }), 300)
  }

  return { user, visibility, resetUser, assignUser }
}

export { useUserDisplayer }