import React from 'react';
import logo from '../assets/images/logo.png';
import ReactDOM from 'react-dom';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from '../views/Banner';
import Support from '../views/Support';
class Header extends React.Component {

	render() {
		return (
			<>
				<div className="header">
					<div className="header__inner container">
						<div className="header__logo">
							<Link to="/home">
								{/* <img src={logo} alt=""></img> */}
								<h3 className="logo-home">Panda</h3>
							</Link>
						</div>
						<div className="header__nav">
							<nav className="menu-toggle">
								<ul className="item-center">
									<li><Link to="/home">Home</Link></li>
									<li><Link to="/support">Support</Link></li>
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