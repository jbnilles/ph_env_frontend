// Action Creators

const setUser = (payload) => ({ type: "SET_USER", payload })
const signUpUser = (payload) => ({ type: "SIGN_UP", payload })

export const logUserOut = () => ({ type: "LOG_OUT" })

// Methods

export const fetchUser = (userInfo) => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Authenticate/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            localStorage.setItem("token", data.token)
            dispatch(setUser(data.user))

        })
}

export const signUserUp = (userInfo) => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Authenticate/Register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(userInfo)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            localStorage.setItem("token", data.token)
            dispatch(setUser(data.user))
        })
}

export const autoLogin = () => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Authenticate/auto_login`, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            localStorage.setItem("token", data.token)
            dispatch(setUser(data.user))
        })
}
