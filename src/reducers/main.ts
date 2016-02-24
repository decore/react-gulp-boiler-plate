
import { combineReducers } from 'redux';
import contributorsReducer = require('./contributors');

/*
const myApp = combineReducers({
   contributors: contributorsReducer
});

export default myApp;
*/

const myApp =(state, action) => {
                          switch (action.type)  {
                            default:
                              return state;
                          }
                        };

export default myApp;
