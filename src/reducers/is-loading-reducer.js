import * as c from './../actions/ActionTypes';



export default (state = false, action) => {
    switch (action.type) {
        case c.REQUEST_API_CALL:
            return true;
        case c.GET_API_CALL_SUCCESS:
            return false;
        case c.GET_API_CALL_FAILURE:
            return false;
        default:
            return state;
    }
};