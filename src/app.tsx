//require("./usersPage.tsx")
//import { ControllerBase } from '../../../core/controllerBase';
import * as React from 'react'

// <usersPage/>
class App extends React.Component {

   // the JSX syntax is quite intuitive but check out
   // https://facebook.github.io/react/docs/jsx-in-depth.html
   // if you need additional help
   public render() {
       return (
         <div>
          <span>Home app</span>
        </div>
       );
     }, this);
   }
 }
}

function render() {
 React.render(
   <App/>,
   document.getElementsByClassName('app')[0]
 );

render();
