
import { combineReducers } from 'redux'
import contributorsReducer from './contributors'

let myApp = combineReducers({
   contributors: contributorsReducer
});


export default myApp;
