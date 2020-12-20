import * as c from './../actions/ActionTypes';

export default (state = [{
    squares: Array(9).fill(null),
}], action) => {
    switch (action.type) {
        case c.MOVE:
            return action.history;
        case c.JUMP_TO:
            return action.history;
        default:
            return state;
    }
};