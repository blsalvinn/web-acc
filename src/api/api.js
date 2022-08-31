// Base URL
const base_url = 'http://localhost/web-shop/wordpress/graphql'

// Request init
const resquest_init = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },

}

// Banner
export const getBannerAPI = async () => {
    const response = await fetch(base_url, {
        ...resquest_init,
        body: JSON.stringify({
            query: `
				{
					categoriesBanner(where: {name: "banner"}) {
                        nodes {
                            imagesSlider {
                                nodes {
                                    image {
                                        mediaItemUrl
                                    }
                                }
                            }
                        }
                    }
                    }
			`
        })
    }).then(res => res.json())
        .then(res => res.data.categoriesBanner.nodes[0].imagesSlider.nodes[0].image)
    return response;
}
// Products
export const getProduct = async () => {
    const response = await fetch(base_url, {
        ...resquest_init,
        body: JSON.stringify({
            query: `
            {
                products {
                  nodes {
                    id
                    name
                    skin {
                      champion
                      skin
                      rank
                    }
                    image {
                      mediaItemUrl
                    }
                  }
                }
              }
			`
        })
    }).then(res => res.json())
        .then(res => res.data.products.nodes)
    return response;
}
// thumb
export const getProductThumb = async () => {
    const response = await fetch(base_url, {
        ...resquest_init,
        body: JSON.stringify({
            query: `
				{
                    imagesSlider {
                        edges {
                          node {
                            banners(where: {nameLike: "gif-pro"}) {
                              edges {
                                node {
                                  imagesSlider {
                                    nodes {
                                      image {
                                        mediaItemUrl
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
			`
        })
    }).then(res => res.json())
        .then(res => res.data)
    return response;
}

