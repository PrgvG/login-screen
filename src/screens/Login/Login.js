import React, { useEffect, useState } from "react"
import LoginForm from "./components/LoginForm/LoginForm"
import LoginInput from "./components/LoginInput/LoginInput"
import LoginCheckbox from "./components/LoginCheckbox/LoginCheckbox"
import CustomButton from "../../components/CustomButton/CustomButton"
import { LOGIN_TEXT, PASSWORD_TEXT, SAME_ME_TEXT, SUBMIT_TEXT, TITLE, ButtonType } from "./utils"
import s from "./Login.module.css"
import { useNavigate, useLocation } from "react-router-dom"
import useAuth from "../../auth/useAuth"

const Login = () => {
    const savedLogin = localStorage.getItem("userLogin")

    const [remember, setRemember] = useState(!!savedLogin)
    const [userLogin, setUserLogin] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const navigate = useNavigate()
    const location = useLocation()
    const auth = useAuth()
    const from = location.state?.from?.pathname || "/"

    useEffect(() => {
        savedLogin &&
            auth.signin(savedLogin, () => {
                navigate(from, { replace: true })
            })
    }, [auth, from, navigate, savedLogin])

    const submit = e => {
        remember && localStorage.setItem("userLogin", userLogin)
        e.preventDefault()
        auth.signin(userLogin, () => {
            navigate(from, { replace: true })
        })
    }

    return (
        <section className={s.containcer}>
            <section className={s.form}>
                <header>
                    <h1>{TITLE}</h1>
                </header>
                <LoginForm submit={submit}>
                    <LoginInput type="text" value={userLogin} setValue={setUserLogin} label={LOGIN_TEXT} />
                    <LoginInput type="password" value={userPassword} setValue={setUserPassword} label={PASSWORD_TEXT} />
                    <LoginCheckbox value={remember} setValue={setRemember} label={SAME_ME_TEXT} />
                    <CustomButton label={SUBMIT_TEXT} type={ButtonType.SUBMIT} />
                </LoginForm>
            </section>
        </section>
    )
}

export default Login
