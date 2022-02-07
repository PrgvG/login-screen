export const SAME_ME_TEXT = "Remember me"
export const LOGIN_TEXT = "Login"
export const PASSWORD_TEXT = "Password"
export const SUBMIT_TEXT = "Continue"
export const TITLE = "Welcome"

export const ButtonType = {
    SUBMIT: "submit",
    BUTTON: "button",
}

export const handleSubmit = (email, password, remember) => {
    const isRemember = remember ? "" : "not "
    return alert(`Your email: ${email}\nYour password: ${password}\nYou are ${isRemember}saved`)
}
