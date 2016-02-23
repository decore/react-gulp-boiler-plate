
import * as React from 'react';

interface Props extends React.Props<ContributorsPage> {
  contributors : Array<any>;
}

//export default class ContributorsPage extends React.Component<Props, {}> {
export default class ContributorsPage extends React.Component<any, {}> {
   context: any;


   static contextTypes = {
        store: React.PropTypes.object
   }
   private unsubscribe: Function;

   componentDidMount() {
           this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
       }
   componentWillUnmount() {
       this.unsubscribe();
   }


   public render() {
       return (
         <div className="row">
          <span>Contributors Page</span>
        </div>
       );
  }
}
