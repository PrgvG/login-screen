export const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true
        setTimeout(callback, 0)
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false
        setTimeout(callback, 100)
    },
}
