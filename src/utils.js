export const SAME_ME_TEXT = "Remember me"
export const LOGIN_TEXT = "Email"
export const PASSWORD_TEXT = "Password"
export const SUBMIT_TEXT = "Continue"
export const HELP_TEXT = "I forgot my password"
export const TITLE = "Welcome"

export const handleSubmit = (email, password, remember) => {
    const isRemember = remember ? "" : "not "
    return alert(`Your email: ${email}\nYour password: ${password}\nYou are ${isRemember}saved`)
}
