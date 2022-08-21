import React from 'react';
import logo from '../assets/images/logo.png';
import ReactDOM from 'react-dom';
class Header extends React.Component {

	render() {
		let dataOutPut = this.props
		return (
			<>
				{/* {console.log(dataOutPut)} */}
				<div className="header">
					<div className="header__inner container">
						<div className="header__logo">
							<img src={logo} alt="" />
						</div>
						<div className="header__nav">
							<nav className="menu-toggle">
								<ul className="item-center">
									<li><a href="index.html" className="">Home</a></li>
									<li><a href="login.html" className="">Support</a></li>
									<li><a href="huong-dan-mua-acc.html" className="">Contact</a></li>
								</ul>
							</nav>
							<a href="#" className="action login">Login</a>
							<a href="#" className="action sigin">Sigin</a>
						</div>
					</div>
				</div>
			</>
		);
	}

}

export default Header;