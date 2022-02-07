import React from "react"
import { AuthContext } from "./AuthContext"
import { fakeAuthProvider } from "./auth"

export default function AuthProvider({ children }) {
    const [user, setUser] = React.useState(null)

    const signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser)
            callback()
        })
    }

    const signout = callback => {
        return fakeAuthProvider.signout(() => {
            setUser(null)
            callback()
        })
    }

    const value = { user, signin, signout }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
