// Action Creators

const get_games = (payload) => ({ type: "GET_GAMES", payload })
const create_game = (payload) => ({ type: "CREATE_GAME", payload })
const join_game = (payload) => ({ type: "JOIN_GAME", payload })
const remove_game = (payload) => ({ type: "REMOVE_GAME", payload })
const check_move = (payload) => ({ type: "CHECK_MOVE", payload })
const get_game = (payload) => ({ type: "GET_GAME", payload })



// Methods

export const getGames = (gameName) => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Game/getGamesByName`, {
        method: "POST",
        headers: {
            'mode': 'cors',
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
    fetch('https://phuserenvapi.azurewebsites.net/api/Game/createGame', {
        method: "POST",
        headers: {
            'mode': 'cors',
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
    fetch(`https://phuserenvapi.azurewebsites.net/api/Game/joinGame`, {
        method: "POST",
        headers: {
            'mode': 'cors',
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
    fetch(`https://phuserenvapi.azurewebsites.net/api/Game/remove`, {
        method: "POST",
        headers: {
            'mode': 'cors',
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
export const checkMove = (GameIdModel) => dispatch => {

    fetch(`https://phuserenvapi.azurewebsites.net/api/Game/checkMoveTTT`, {
        method: "POST",
        headers: {
            'mode': 'cors',
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
            dispatch(check_move(data))

        })
}
export const getGame = (GameIdModel) => dispatch => {
    fetch(`https://phuserenvapi.azurewebsites.net/api/Game/getGame`, {
        method: "POST",
        headers: {
            'mode': 'cors',
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
            dispatch(get_game(data))

        })
}
