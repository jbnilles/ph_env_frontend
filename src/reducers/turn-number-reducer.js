import * as c from './../actions/ActionTypes';


export default (state = 0, action) => {
    switch (action.type) {
        case c.MOVE:
            return action.turnNumber;
        case c.JUMP_TO:
            return action.turnNumber;
        default:
            return state;
    }
};