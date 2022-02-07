import React from "react"
import s from "./LoginCheckbox.module.css"

const LoginCheckbox = ({ value, setValue, label }) => (
    <>
        <input className={s.check} id="remember-me" type="checkbox" tabIndex={0} value={value} onClick={() => setValue(!value)} />
        <label className={s.label} htmlFor="remember-me">
            {label}
        </label>
    </>
)

export default LoginCheckbox
