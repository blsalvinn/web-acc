import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getBannerAPI } from "../api";
import { useState, useEffect } from 'react';

const Banner = () => {
	const [banner, setBanner] = React.useState([]);

	useEffect(() => {
		getBannerAPI().then(res => setBanner(res))
	}, [])
	const settings = {
		infinite: true,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: false,
		autoplaySpeed: false,

	};
	return (
		<>
			<div className="Banner">
				<div className="imgslider">
					<Slider {...settings}>
						{
							banner.map((item, index) => {
								console.log(item)
								return (
									<div className="container-banner">
										<div className="banner-carousel" key={index}>
											<img src={item.mediaItemUrl}>
											</img>
										</div>
									</div>
								)
							})
						}
					</Slider>
				</div>
			</div>
		</>
	);
}
// function useDataBanner() {
// 	const [dataBanner, setBanner] = React.useState([]);
// 	React.useEffect(() => {
// 		fetch('http://localhost/web-shop/wordpress/graphql', {
// 			method: "POST",
// 			headers: { "Content-Type": "application/json" },
// 			body: JSON.stringify({ query: value_banner })
// 		}).then(response => response.json())
// 			.then(data => setBanner(data.data.categoriesBanner.nodes[0].imagesSlider.nodes[0].image))
// 	}, []);
// 	return dataBanner;
// }
export default Banner;