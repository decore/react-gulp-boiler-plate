
import * as React from 'react';
import { connect } from 'react-redux'

interface Props extends React.Props<ContributorsPage> {
  contributors : Array<any>;
}

class ContributorsPage extends React.Component<Props, {}> {
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

const mapStateToProps = (state) => {
    return {
      contributors: state
    }
}

const VisibleContributorsPage = connect(
                                  mapStateToProps
                                  ,null
                                )(ContributorsPage)


export default VisibleContributorsPage;
