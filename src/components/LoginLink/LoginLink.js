import React from "react"
import s from "./LoginLink.module.css"

const LoginLink = ({ href, label }) => (
    <a className={s.link} href={href} tabIndex={0}>
        {label}
    </a>
)

export default LoginLink
