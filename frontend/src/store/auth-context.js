import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user  : null,
    role: '',
    login: (authData) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [role, setRole] = useState(null)

    const userIsLoggedIn = !!token

    const loginHandler = (authData) => {
        setToken(authData.token)
        setUser(authData.user);
        setRole(authData.user.role)
    }

    const logoutHandler = () => {
        setToken(null)
        setUser(null)
        setRole(null)
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        user: user,
        role: role,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
}

export default AuthContext