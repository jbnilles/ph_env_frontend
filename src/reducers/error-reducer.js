import * as c from './../actions/ActionTypes';



export default (state = null, action) => {
    switch (action.type) {
        
        case c.GET_API_CALL_FAILURE:
            return action.error;
        default: 
            return state;
    }
};