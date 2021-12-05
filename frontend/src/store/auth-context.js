import React, { useState } from 'react'

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user  : null,
    role: null,
    login: (token, user) => {},
    logout: () => {}
})

export const AuthContextProvider = (props) => {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)

    const userIsLoggedIn = !!token

    const loginHandler = (token, user) => {
        setToken(token)
        setUser(user);
    }

    const logoutHandler = () => {
        setToken(null)
        setUser(null);
    }

    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        user: user,
        role: null,
        login: loginHandler,
        logout: logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
}

export default AuthContext