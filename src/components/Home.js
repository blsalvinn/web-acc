import React from 'react';
// import  logo  from '../assets/images/logo.png';
import ReactDOM from 'react-dom';
import Banner from '../views/Banner';
import SearchInfor from '../views/SearchInfor';
import Product from '../views/Product'
import gold from '../assets/rank/gold.png';
// import master from '../assets/rank/master.webp';
// import grand_master from '../assets/rank/grand-master.png';
// import diamond from '../assets/rank/diamond.webp';
// import challenger from '../assets/rank/challenger.webp';
// import platium from '../assets/rank/platium.webp';
import { getProduct } from "../api";
import { useState, useEffect } from 'react';
const Home = () => {
	return (
		<>
			<Banner />
			<SearchInfor />
			<Product />
		</>
	);
}
export default Home;