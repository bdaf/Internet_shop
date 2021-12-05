import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user: null,
    role: '',
    login: (authData) => { },
    logout: () => { }
})

export const AuthContextProvider = (props) => {
    const initialAuth = JSON.parse(localStorage.getItem('auth'))


    const [token, setToken] = useState(!!initialAuth ? initialAuth.token : null)
    const [user, setUser] = useState(!!initialAuth ? initialAuth.user : null)
    const [role, setRole] = useState(!!initialAuth ? initialAuth.user.role : null)

    const userIsLoggedIn = !!token

    const loginHandler = (authData) => {
        localStorage.setItem('auth', JSON.stringify(authData))
        setToken(authData.token)
        setUser(authData.user);
        setRole(authData.user.role)
    }

    const logoutHandler = () => {
        localStorage.removeItem('auth')
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