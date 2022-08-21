import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Agency from './views/Agency'
// import MyComponent from './views/Example/MyComponent.js';
// import ChildComponent3 from './views/Example/childs/ChildComponent3';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Banner from './views/Banner';
import {useState,useEffect}  from 'react';
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
    }
  }
}
`
const value_banner = `
{
  mediaItems {
    nodes {
      mediaItemUrl
    }
  }
}
`
function App() {
  const dataChamp = useDataChap();
  const dataBanner = useDataBanner();
  // console.log(dataBanner)
  // console.log(dataChamp);
  return (
    <>
      <div className="App">
        <Header/>
        <Banner dataOutPutBanner = {dataBanner} 
        />  
        <Home 
        dataOutPut = {dataChamp}
        />
        {/* <Agency /> */}
        <Footer />
        {/* <MyComponent/> */}
      </div>
      {/* {JSON.stringify(dataChamp,null, 2)} */}
    </>
  );
}
function useDataChap() {
  const [dataChamp, setData] = React.useState([]);
  // const [dataBanner, setBanner] = React.useState([]);
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

function useDataBanner() {
  const [dataBanner, setBanner] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost/web-shop/wordpress/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: value_banner })
    }).then(response => response.json())
      .then(data => setBanner(data.data.mediaItems.nodes))
  }, []);
  return dataBanner;
}

export default App;
