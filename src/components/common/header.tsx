
import * as React from 'react';

interface Props {
}

export default class Header extends React.Component<Props, {}> {
   public render() {
       return (
         <div className="row">
          <span>Header Component</span>
        </div>
       );
  }
}
