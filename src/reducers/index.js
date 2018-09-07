import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
//gives alias incase we hve multiple reducers

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
