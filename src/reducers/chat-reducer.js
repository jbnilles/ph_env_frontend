const defaultState = {
    messages: [],
    newMessages: [],
    
}

const chatReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_MESSAGES":

            return {
                messages: [...action.payload],
                newMessages: state.newMessages
            }
        case "GET_NEW_MESSAGES":

            return {
                newMessages: [...action.payload],
                messages: state.messages
            }
        case "SEND_MESSAGE":
            return {
                messages: state.messages,
                newMessages: state.newMessages
            }
        default: return state
    }
}

export default chatReducer;