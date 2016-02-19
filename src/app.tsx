
import * as React from 'react';

interface Props {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
class App extends React.Component<Props, {}> {
   // the JSX syntax is quite intuitive but check out
   // https://facebook.github.io/react/docs/jsx-in-depth.html
   // if you need additional help
   public render() {
       return (
         <div>
          <span>Component Home app</span>
        </div>
       );
  }
}

React.render(<App/>, document.getElementsByTagName('body')[0]);
