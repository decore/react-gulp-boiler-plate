
import * as React from 'react';

interface Props extends React.Props<ContributorsPage> {
  contributors : Array<any>;
}

//export default class ContributorsPage extends React.Component<Props, {}> {
export default class ContributorsPage extends React.Component<Props, {}> {
   context: any;

   constructor(props, context) {
     super(props, context);
   }

   propTypes: {
   		contributors : Array<any>;
   	}

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
           <table className="table">
   					<thead>
   						<th>Name</th>
   						<th>Lastname</th>
   					</thead>
   					<tbody>
                {this.props.contributors.map((contributor) => {
                        return (
                        <tr>
                          <td>{contributor.name}</td>
                          <td>{contributor.lastname}</td>
                        </tr>);
                      })
                }
   					</tbody>
   				</table>
        </div>
       );
  }
}
