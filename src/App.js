import React, { useState } from "react"
import LoginCheckbox from "./components/LoginCheckbox/LoginCheckbox"
import LoginInput from "./components/LoginInput/LoginInput"
import LoginButton from "./components/LoginButton/LoginButton"
import LoginLink from "./components/LoginLink/LoginLink"
import LoginForm from "./components/LoginForm/LoginForm"
import { LOGIN_TEXT, PASSWORD_TEXT, SAME_ME_TEXT, SUBMIT_TEXT, HELP_TEXT, TITLE, handleSubmit } from "./utils"
import s from "./App.module.css"

export const App = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [remember, setRemember] = useState(false)

    const submit = e => {
        e.preventDefault()
        handleSubmit(email, password, remember)
    }

    return (
        <section className={s.containcer}>
            <section className={s.form}>
                <header>
                    <h1>{TITLE}</h1>
                </header>
                <LoginForm submit={submit}>
                    <LoginInput type="email" value={email} setValue={setEmail} label={LOGIN_TEXT} />
                    <LoginInput type="password" value={password} setValue={setPassword} label={PASSWORD_TEXT} />
                    <LoginCheckbox value={remember} setValue={setRemember} label={SAME_ME_TEXT} />
                    <LoginButton label={SUBMIT_TEXT} />
                </LoginForm>
                <footer>
                    <LoginLink href="/" label={HELP_TEXT} />
                </footer>
            </section>
        </section>
    )
}
