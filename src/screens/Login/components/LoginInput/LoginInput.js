import React from "react"
import s from "./LoginInput.module.css"

const LoginInput = ({ type, value, setValue, label }) => (
    <>
        <label className={s.fieldLabel} htmlFor={`${type}-text"`}>
            {label}
        </label>
        <input className={s.textField} id={`${type}-text"`} type={type} required tabIndex={0} value={value} onChange={e => setValue(e.target.value)} />
    </>
)

export default LoginInput
