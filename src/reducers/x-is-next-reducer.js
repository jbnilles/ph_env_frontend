import * as c from './../actions/ActionTypes';


export default (state = true, action) => {
    switch (action.type) {
        case c.MOVE:
            return action.xIsNext;
        case c.JUMP_TO:
            return action.xIsNext;
        default:
            return state;
    }
};