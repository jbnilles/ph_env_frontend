const defaultState = {
    contacts: [],
    searchResults: [],

}

const contactReducer = (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case "GET_CONTACTS":
            console.log(action)

            return {
                contacts: [...action.payload],
                searchResults: state.searchResults
            }
        case "SEARCH_USERS":
            console.log('sssssssssssssss',action)

            return {
                searchResults: [...action.payload],
                contacts: state.contacts
            }
        case "ADD_CONTACT":
            return {
                contacts: state.contacts,
                searchResults: state.searchResults
            }
        default: return state
    }
}

export default contactReducer;