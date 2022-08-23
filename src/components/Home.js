import React from 'react';
// import  logo  from '../assets/images/logo.png';
import ReactDOM from 'react-dom';
import Banner from '../views/Banner';
import gold from '../assets/rank/gold.png';
// import master from '../assets/rank/master.webp';
// import grand_master from '../assets/rank/grand-master.png';
// import diamond from '../assets/rank/diamond.webp';
// import challenger from '../assets/rank/challenger.webp';
// import platium from '../assets/rank/platium.webp';
const value_query = `
{
  products {
    nodes {
      id
      name
      skin {
        champion
        skin
      }
      productCategories {
        nodes {
          name
        }
      }
    }
  }
}
`
const Home = () => {
		let dataOutPut_ = useDataChap(); 
		return (
			<>
			<Banner />
				<div className="infor">
					<div className="container">
						<div className="title-product">
							<h2>Leguage Of Legends</h2>
							<div className="line-title">
								<span class="span-line"></span>
							</div>
						</div>
						<div className="list-product">
							<div className="product">
								{/* <img src={gold} className="rank"></img> */}
								{
									dataOutPut_.map((item, index) => {
										return (
											<div className="col-pro">
												<a href="#">
													<div key={item.id} >
														Job: {item.name}
														Skins: {item.skin.skin}
														Chapions: {item.skin.champion}
													</div>
												</a>
											</div>
										);
									})
								}
							</div>
						</div>
					</div>
				</div>
				
			</>
		);
	}
function useDataChap() {
	const [dataChamp, setData] = React.useState([]);
	React.useEffect(() => {
	  fetch('http://localhost/web-shop/wordpress/graphql', {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({ query: value_query })
	  }).then(response => response.json())
		.then(data => setData(data.data.products.nodes))
	}, []);
	return dataChamp;
  }
export default Home;