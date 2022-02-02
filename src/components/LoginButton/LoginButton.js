import React from "react"
import s from "./LoginButton.module.css"

const LoginButton = ({ label }) => (
    <button className={s.button} type="submit" tabIndex={0}>
        {label}
    </button>
)

export default LoginButton
