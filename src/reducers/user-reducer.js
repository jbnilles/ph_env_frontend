const defaultState = {
    loggedIn: false,
    user: {}
}

const userReducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_USER":
            return {
                loggedIn: true,
                user: { ...action.payload }
            }
        case "SIGN_UP":
            return {
                loggedIn: false,
                user: { }
            }
        case "LOG_OUT":
            localStorage.clear()
            return {
                loggedIn: false,
                user: {}
            }
        default: return state
    }
}

export default userReducer