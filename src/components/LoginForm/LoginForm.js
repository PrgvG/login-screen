import React from "react"
import s from "./LoginForm.module.css"

const LoginForm = ({ children, submit }) => (
    <form className={s.form} onSubmit={submit}>
        {children}
    </form>
)

export default LoginForm
