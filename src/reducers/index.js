import xIsNextReducer from './x-is-next-reducer';
import historyReducer from './history-reducer';
import turnNumberReducer from './turn-number-reducer';
import errorReducer from './error-reducer';
import isLoadingReducer from './is-loading-reducer';
import userReducer from './user-reducer'
import chatReducer from './chat-reducer'
import contactReducer from './contact-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    history: historyReducer,
    xIsNext: xIsNextReducer,
    turnNumber: turnNumberReducer,
    isLoading: isLoadingReducer,
    error: errorReducer,
    userReducer,
    chatReducer,
    contactReducer

});

export default rootReducer;