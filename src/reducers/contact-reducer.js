const defaultState = {
    contacts: [],

}

const contactReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTACTS":
            console.log(action)

            return {
                contacts: [...action.payload]
            }
        case "ADD_CONTACT":
            return {
            }
        default: return state
    }
}

export default contactReducer;