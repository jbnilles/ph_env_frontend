// Action Creators

const set_contacts = (payload) => ({ type: "GET_CONTACTS", payload })
const add_contact = (payload) => ({ type: "ADD_CONTACT", payload })



// Methods

export const getContacts = () => dispatch => {
    fetch(`http://localhost:3005/api/Contact/getContacts`, {
        method: "GET",
        headers: {
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
            console.log(data)
            console.log(localStorage)

        })
}

export const addContact = (contactId) => dispatch => {
    console.log(contactId)
    fetch('http://localhost:3005/api/Contact/AddContact', {
        method: "POST",
        headers: {
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
            console.log(data)
            dispatch(add_contact(data))
        })
}
