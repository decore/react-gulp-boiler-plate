
import * as React from 'react';
import Header from './common/header.tsx';
import Contributors from './contributors/contributorsPage.tsx';

interface Props {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
class App extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="container-fluid">
          <Header/>
          <Contributors/>
        </div>
       );
  }
}

React.render(<App/>, document.getElementsByTagName('body')[0]);
