import React from 'react';
import  logo  from '../assets/images/logo.png';
import ReactDOM from 'react-dom';
class Header extends React.Component {

	render() {

		return (
			<>
				<div className="header">
					<div className="header__inner container">
						<div className="header__logo">
							<img src={logo} alt="" />
						</div>
						<ul className="header__nav">
							<li><a href="#">Login</a></li>
							<li><a href="#">Cart</a></li>
						</ul>
					</div>
				</div>
			</>
		);
	}

}

export default Header;