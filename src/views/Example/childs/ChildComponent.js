import React from 'react';
import ChildOfChildComponent from './childs-of-child/ChildOfChildComponent';
import funcHello from './childs-of-child/funcHello';
class ChildComponent extends React.Component {

  render() {

  	let {name, age, job} = this.props;
	console.log(this.props);
    return (
      <>
      <div className="infor">
      	{
	      	job.map((item, index) => {
	      		return(
					<div key={item.id}>
						Job: {item.title} - Salary: {item.salary}
			      	</div>
	      		)
	      	})
		}
      </div>
      <ChildOfChildComponent />
      </>
    );
  }

}

export default ChildComponent;