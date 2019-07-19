import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import StreamsReducer from './StreamReducer';

export default combineReducers({
    auth: AuthReducer,
    form: formReducer,
    streams: StreamsReducer
});