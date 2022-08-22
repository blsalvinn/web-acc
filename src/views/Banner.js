import React from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from 'react-responsive-carousel';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Header extends React.Component {

	render() {
		let dataOutPutBanner = this.props;
		let dataOutPutBanner_ = this.props.dataOutPutBanner;
		// console.log(dataOutPutBanner_)
		
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
								dataOutPutBanner_.map((item, index) => {
									return (
										<div className="banner-carousel">
											<img src={item.mediaItemUrl}></img>
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
}

export default Header;