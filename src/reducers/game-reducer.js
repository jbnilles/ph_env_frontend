import { act } from "react-dom/test-utils"

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
            console.log(action)
            return {
                games: state.games,
                currentGame: action.payload


            }
        case "JOIN_GAME":
            return {
                games: state.games,
                currentGame: action.payload
            }
        case "REMOVE_GAME":
            console.log('ssssssssssssssssss',action)
            return {
                games: [],
                currentGame: {}

            }
        case "CHECK_MOVE":
            return {
                games: state.games,
                currentGame: action.payload.game
            }
        case "LOG_OUT":
            return {
                games: [],
                currentGame: {}
            }
        case "GET_GAME":
            return {
                games: state.games,
                currentGame: action.payload


            }
        

        default: return state
    }
}

export default GameReducer;