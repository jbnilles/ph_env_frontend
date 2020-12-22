const defaultState = {
    games: [],
    currentGame: {}
    

}

const GameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_GAMES":

            return {
                games: [...action.payload],
                currentGame: state.currentGame


            }
        case "CREATE_GAME":

            return {
                games: state.games,
                currentGame: state.currentGame


            }
        case "JOIN_GAME":
            return {
                games: state.games,
                currentGame: action.payload
            }
        case "REMOVE_GAME":
            return {
                games: state.games,
                currentGame: state.currentGame

            }
        

        default: return state
    }
}

export default GameReducer;