import * as React from 'react';

interface Props extends React.Props<ContributorRow> {
  contributor : any
}

export default class ContributorRow extends React.Component<Props, {}> {
   context: any;

   constructor(props, context) {
     super(props, context);
   }

   propTypes: {
   		contributor : any;
   	}

   public render() {
       if(!this.props.contributor) {
         return <div></div>;
       }

       return(
          <tr>
            <td>{this.props.contributor.name}</td>
            <td>{this.props.contributor.lastname}</td>
          </tr>
        );
  }
}
