
import * as c from './ActionTypes';

export const requestApiCall = () => ({
    type: c.REQUEST_API_CALL
});

export const getApiCallSuccess = (response) => ({
    type: c.GET_API_CALL_SUCCESS,
    response
});

export const getApiCallFailure = (error) => ({
    type: c.GET_API_CALL_FAILURE,
    error
}); 
export const move = () => ({
    type: c.MOVE,
});

export const jumpTo = () => ({
    type: c.JUMP_TO,
});

/*export const makeApiCall = () => {
    return dispatch => {
        dispatch(requestApiCall);
        return fetch(`https://localhost:44350/api/weatherforecast`)
            .then(response => response.json())
            .then(
                (jsonifiedResponse) => {
                    dispatch(getApiCallSuccess(jsonifiedResponse.results));
                })
            .catch((error) => {
                dispatch(getHeadlinesFailure(error));
            });
    }
}*/