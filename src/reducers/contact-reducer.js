const defaultState = {
    contacts: [],
    searchResults: [],
    notifications: [],

}

const contactReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_CONTACTS":

            return {
                contacts: [...action.payload],
                searchResults: state.searchResults,
                notifications: state.notifications

            }
        case "SEARCH_USERS":

            return {
                searchResults: [...action.payload],
                contacts: state.contacts,
                notifications: state.notifications

            }
        case "ADD_CONTACT":
            return {
                contacts: state.contacts,
                searchResults: state.searchResults,
                notifications: state.notifications
            }
        case "SET_NOTIFICATIONS":
            return {
                contacts: state.contacts,
                searchResults: state.searchResults,
                notifications: [...action.payload]
            }
        case "LOG_OUT":
            return {
                contacts: [],
                searchResults: [],
                notifications: []
            }

        default: return state
    }
}

export default contactReducer;