import React from 'react';
// import  logo  from '../assets/images/logo.png';
// import ReactDOM from 'react-dom';
import Banner from '../views/Banner';
class Home extends React.Component {
	render() {
		let dataOutPut = this.props;
		let dataOutPut_ = this.props.dataOutPut;
		return (
			<>
			<div className="infor">
				{
					dataOutPut_.map((item, index) => {
						return(
						  	<div key={item.id} >
							  Job: {item.name}
							</div>
					)
				})
			  }
			</div>
			{/* <ChildOfChildComponent /> */}
			</>
		  );
	}
}

export default Home;