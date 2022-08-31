import React from 'react';
import ReactDOM from 'react-dom';
import { getProduct } from "../api";
import { useState, useEffect } from 'react';

const Product = () => {
	const [dataChamp, setData] = React.useState([]);

	useEffect(() => {
		getProduct().then(res => setData(res))
	}, [])

	return (
		<>
			<div classNameName="title-product">
				<h2>Leguage Of Legends</h2>
			</div>
			<div className="product-container">
				<div className="container">
					<div className="sllpbox">
						<div id="list-account">
							<div className="sl-produl clearfix">
								<div className="list-product">
									{
										dataChamp.map((item, index) => {
											// console.log(item.image.mediaItemUrl)
											return (
												<div className="sl-prodli" key={index}>
													<div class="sl-prodbox">
														<a class="sl-prlinks" href="#">
															<p class="sl-primg">
																<img src={item.image.mediaItemUrl} />
															</p>
															<div class="sl-prcode">
																<span>Acc LOL</span>
															</div>
															<div class="sl-priftop">
																<p class="sl-prcode"><span>Acc LOL</span></p>
																<ul>
																	<li>Rank: {item.skin.rank}</li>
																	<li>Chapions:  {item.skin.champion}</li>
																	<li>Skins:  {item.skin.skin}</li>
																</ul>
															</div>
															<div class="sl-prifs">
																{/* <span class="sl-prpri sl-prpri2">1,180,000 đ</span> */}
																<div class="sl-prifbot">
																	<ul>
																		<li>Rank: {item.skin.rank}</li>
																		<li>Skins: {item.skin.skin}</li>
																		<li>Chapions: {item.skin.champion}</li>
																	</ul>
																</div>
																<p class="sl-prbot"><a href="#">ADD TO CARD</a></p>
															</div>
														</a>
													</div>
												</div>
											);
										})
									}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Product;