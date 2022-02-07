import React from "react"
import s from "./CustomButton.module.css"

const CustomButton = ({ label, type, onClick = () => null }) => (
    <button className={s.button} type={type} onClick={onClick} tabIndex={0}>
        {label}
    </button>
)

export default CustomButton
