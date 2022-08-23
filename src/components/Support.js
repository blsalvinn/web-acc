import React from 'react'
import { useState, useEffect } from 'react';
const value_cate_product = `
{
  productCategories {
    nodes {
      name
    }
  }
}
`
const Support = () => {
    const dataCate = useDataCate()
    console.log(dataCate)
    return (
        <div>
            Support
        </div>
    )
}
function useDataCate() {
    const [dataCate, setCate] = React.useState([]);
    React.useEffect(() => {
        fetch('http://localhost/web-shop/wordpress/graphql', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query: value_cate_product })
        }).then(response => response.json())
            .then(data => setCate(data))
    }, []);
    return dataCate;
}
export default Support
