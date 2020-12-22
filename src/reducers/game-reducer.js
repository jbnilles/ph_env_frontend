const defaultState = {
    games: [],
    

}

const GameReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "GET_GAMES":

            return {
                games: [...action.payload],
                

            }
        case "CREATE_GAME":

            return {
                games: state.games

            }
        case "JOIN_GAME":
            return {
                games: state.games

            }
        case "REMOVE_GAME":
            return {
                games: state.games

            }
        

        default: return state
    }
}

export default GameReducer;