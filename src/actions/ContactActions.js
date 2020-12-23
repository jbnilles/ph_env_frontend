// Action Creators

const set_contacts = (payload) => ({ type: "GET_CONTACTS", payload })
export const clear_search = () => ({ type: "CLEAR_SEARCH", })
const add_contact = (payload) => ({ type: "ADD_CONTACT", payload })
const search_users = (payload) => ({ type: "SEARCH_USERS", payload })
const set_notifications = (payload) => ({ type: "SET_NOTIFICATIONS", payload })



// Methods

export const getContacts = () => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Contact/getContacts`, {
        method: "GET",
        headers: {
            'mode': 'cors',
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(set_contacts(data))

        })
}

export const addContact = (contactId) => dispatch => {
    fetch('https://phuserenvapi.azurewebsites.net/api/Contact/AddContact', {
        method: "POST",
        headers: {
            'mode': 'cors',
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(contactId)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(add_contact(data))
        })
}
export const searchUsers = (userNameModel) => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Authenticate/getUsers`, {
        method: "POST",
        headers: {
            'mode': 'cors',
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(userNameModel)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(search_users(data))

        })
}
export const getNotifications = () => dispatch => {

    fetch(`https://phuserenvapi.azurewebsites.net/api/Contact/getNotifications`, {
        method: "GET",
        headers: {
            'mode': 'cors',
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify()
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(set_notifications(data))

        })
}
