type AuthAction = {
  type: "AUHTORIZED" | "NOT_AUTHORIZED"
}

type AuthState = {
  isAuthenticated: boolean
}

const authState: AuthState = {
  isAuthenticated: false
}

const reducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case "AUHTORIZED":
      localStorage.setItem("auth", JSON.stringify(state))
      return {
        isAuthenticated: true
      }
    case "NOT_AUTHORIZED":
      localStorage.removeItem("auth")
      return {
        isAuthenticated: false
      }
  }
}

const getToken = () => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem("auth")
    return token ? JSON.parse(token) : null
  }

  return null
}

export { reducer, authState, getToken }