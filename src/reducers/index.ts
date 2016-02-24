
import { combineReducers } from 'redux';
//import contributorsReducer = require('./contributors');


let myApp = combineReducers({
  contributors: function contributors (state = [], action) {
                    switch (action.type) {
                      case 'CONTRIBUTORS_LOAD':
                        return [
                                {name: 'John',
                                lastname: 'Doe'
                                }
                                ,{name: 'Peter',
                                lastname: 'Karmack'
                                }
                               ]
                      default:
                        return state
                    }
                  }

   /*
   blank: function(state, action) {
                  if (state == null)
                    state = [];
                 return state;
               }
  */
   //,contributors: contributorsReducer
});


export default myApp;
