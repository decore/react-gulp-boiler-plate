
import * as React from 'react';
import { connect } from 'react-redux'
import loadContributors from '../../actions/loadContributors'
import ContributorRow from './contributorRow';


interface Props extends React.Props<ContributorsPage>  {
  contributors? : Array<any>;
  onLoad? : () => void;
}

class ContributorsPage extends React.Component<Props, {}> {
   context: any;

   constructor(props, context) {
     super(props, context);
   }

   static contextTypes = {
        store: React.PropTypes.object
   }

   componentDidMount() {
     this.props.onLoad();
   }

   public render() {
       if(!this.props.contributors)
          return (<div>No data</div>)

       return (
         <div className="row">
           <table className="table">
   					<thead>
   						<th>Name</th>
   						<th>Lastname</th>
   					</thead>
   					<tbody>
                {
                  this.props.contributors.map(contributor =>
                  <ContributorRow contributor = {contributor}/>
                )}
   					</tbody>
   				</table>
        </div>
       );
  }
}

const mapStateToProps = (state) => {
    return {
      contributors: state.contributors
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: () => dispatch(loadContributors())
  }
}

const ContainerContributorsPage = connect(
                                   mapStateToProps
                                  ,mapDispatchToProps
                                )(ContributorsPage)


export default ContainerContributorsPage;
