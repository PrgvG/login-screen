import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./screens/Home/Home"
import Login from "./screens/Login/Login"
import AuthProvider from "./auth/AuthProvider"
import RequireAuth from "./auth/RequireAuth"

export const App = () => {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<RequireAuth>{<Home />}</RequireAuth>} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </AuthProvider>
    )
}
