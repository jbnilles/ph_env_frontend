const defaultState = {
    messages: [],
    
}

const chatReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_MESSAGES":
            console.log(action)

            return {
                messages: [ ...action.payload ]
            }
        case "SEND_MESSAGE":
            return {
                messages: state.messages
            }
        default: return state
    }
}

export default chatReducer;