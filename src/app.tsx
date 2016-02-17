//require("./usersPage.tsx")
//import { ControllerBase } from '../../../core/controllerBase';
import * as React from 'react';
//import ReactDOM = require('react-dom')

// Render a simple React h1 component into the body.
// http://stackoverflow.com/questions/33980336/property-render-does-not-exist-on-type-typeof-react
// I have to update react version, this is not ok omg !
// check from the other seed the versions
React.render(<h1>Hello, TypeScript!</h1>, document.getElementsByTagName('body')[0]);

/*
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
*/
