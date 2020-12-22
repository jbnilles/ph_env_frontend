// Action Creators

const get_games = (payload) => ({ type: "GET_GAMES", payload })
const create_game = (payload) => ({ type: "CREATE_GAME", payload })
const join_game = (payload) => ({ type: "JOIN_GAME", payload })
const remove_game = (payload) => ({ type: "REMOVE_GAME", payload })



// Methods

export const getGames = (gameName) => dispatch => {
    fetch(`http://localhost:3005/api/Game/getGamesByName`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(gameName)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(get_games(data))
        })
}

export const createGame = (gameModel) => dispatch => {
    fetch('http://localhost:3005/api/Game/createGame', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(gameModel)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(create_game(data))
        })
}
export const joinGame = (GameIdModel) => dispatch => {
    fetch(`http://localhost:3005/api/Game/joinGame`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(GameIdModel)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(join_game(data))

        })
}
export const removeGame = (GameIdModel) => dispatch => {

    fetch(`http://localhost:3005/api/Game/remove`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(GameIdModel)
    })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            dispatch(remove_game(data))

        })
}
