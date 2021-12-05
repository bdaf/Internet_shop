import React, { useEffect, useState, useCallback } from 'react'

let logoutTimer;

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    user: null,
    role: '',
    login: (authData, expirationTime) => { },
    logout: () => { }
})

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime()
    const adjExpirationTime = new Date(expirationTime).getTime()

    const remainingDuration = adjExpirationTime - currentTime

    return remainingDuration
}

const retrieveStoredToken = () => {
    const storedAuth = JSON.parse(localStorage.getItem('auth'))
    const storedExpirationTime = localStorage.getItem('expirationTime')

    const remainingTime = calculateRemainingTime(storedExpirationTime)

    if (remainingTime <= 3600) {
        localStorage.removeItem('auth')
        localStorage.removeItem('expirationTime')

        return null
    }

    return {
        auth: storedAuth,
        duration: remainingTime
    };
}

export const AuthContextProvider = (props) => {
    const auth = retrieveStoredToken()
    const initialAuth = !!auth ? auth.auth : null


    const [token, setToken] = useState(!!initialAuth ? initialAuth.token : null)
    const [user, setUser] = useState(!!initialAuth ? initialAuth.user : null)
    const [role, setRole] = useState(!!initialAuth ? initialAuth.user.role : null)

    const userIsLoggedIn = !!token


    const logoutHandler = useCallback(() => {
        localStorage.removeItem('auth')
        localStorage.removeItem('expirationTime')

        setToken(null)
        setUser(null)
        setRole(null)

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])

    const loginHandler = (authData, expirationTime) => {
        localStorage.setItem('auth', JSON.stringify(authData))
        localStorage.setItem('expirationTime', expirationTime)

        setToken(authData.token)
        setUser(authData.user)
        setRole(authData.user.role)

        const remainingTime = calculateRemainingTime(expirationTime)

        setTimeout(logoutHandler, remainingTime)
    }

    useEffect(() => {
        if (auth) {
            logoutTimer = setTimeout(logoutHandler, auth.duration)
        }
    }, [auth, logoutHandler])


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