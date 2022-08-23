import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from 'react';

const value_banner = `
{
	imagesSlider {
		nodes {
		  image {
			mediaItemUrl
		  }
		}
	  }
}
`
const Banner = () => {
	let dataBanner = useDataBanner();
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

					{
						dataBanner.map((item, index) => {
							return (
								<div className="container-banner">
									<Slider {...settings}>
										{
											item.image.map((value) => {
												return (
													<div className="banner-carousel" key={index}>
														<img src={value.mediaItemUrl}>
															{/* {console.log(value.mediaItemUrl)} */}
														</img>
													</div>
												)
											})
										}
									</Slider>
								</div>
							)
						})
					}
			</div>
		</div>
		</>
	);
}
function useDataBanner() {
	const [dataBanner, setBanner] = React.useState([]);
	React.useEffect(() => {
		fetch('http://localhost/web-shop/wordpress/graphql', {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ query: value_banner })
		}).then(response => response.json())
			.then(data => setBanner(data.data.imagesSlider.nodes))
	}, []);
	return dataBanner;
}
export default Banner;