import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import myApp  from '../reducers/main';
import Header from './common/header';
import ContainerContributorsPage from './contributors/contributorsPage';


// Starting with redux, good starting point:
// https://github.com/reactjs/redux/blob/master/docs/basics/ExampleTodoList.md

interface Props {
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
class App extends React.Component<Props, {}> {
   public render() {
       return (
        <div className="container-fluid">
          <Header/>
          <ContainerContributorsPage/>
        </div>
       );
  }
}

let store = createStore(myApp);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
