// Action Creators

const setMessages = (payload) => ({ type: "GET_MESSAGES", payload })
//const setNewMessages = (payload) => ({ type: "GET_NEW_MESSAGES", payload })
const send_Message = (payload) => ({ type: "SEND_MESSAGE", payload })



// Methods

export const getMessagesFrom = (userId) => dispatch => {
    fetch(`http://localhost:3005/api/Message/getMessagesFrom`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(userId)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(setMessages(data))

        })
}

export const sendMessage = (MessageModel) => dispatch => {
    fetch('http://localhost:3005/api/Message/sendMessage', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(MessageModel)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(send_Message(data))
        })
}
/*export const getNewMessages = () => dispatch => {
    
    fetch(`http://localhost:3005/api/Message/getNewMessages`, {
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
            dispatch(setNewMessages(data))

        })
}*/
