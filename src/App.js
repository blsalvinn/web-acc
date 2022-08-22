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
import { useState, useEffect } from 'react';
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
const value_banner = `
{
  mediaItems {
    nodes {
      mediaItemUrl
    }
  }
}
`
const value_cate_product = `
{
  productCategories {
    nodes {
      name
    }
  }
}
`
function App() {
  const dataChamp = useDataChap(); 
  const dataBanner = useDataBanner();
  const dataCate = useDataCate();
  // console.log(dataBanner)
  // console.log(dataCate);
  const employees = [
    {id: 1, name: 'Alice', tasks: ['dev', 'test', 'ship']},
    {id: 2, name: 'Bob', tasks: ['design', 'test']},
    {id: 3, name: 'Carl', tasks: ['test']},
  ];
  const employees2 = [
    {id: 1, name: 'Alice', tasks: ['dev', 'test', 'ship']},
  ];
  return (
    <>
      <div className="App">
        <Header />
        <Banner dataOutPutBanner={dataBanner}
        />
        <Home
          dataOutPut={dataChamp}
          dataCate = {dataCate}
        />
        {/* <Agency /> */}
        <Footer />
        {/* <MyComponent/> */}
      </div>
      {/* {JSON.stringify(dataChamp,null, 2)} */}
      <div className="test">
      {employees.map((employee, index) => (
        <div key={index}>
          <h2>Name: {employee.name}</h2>
          {/* {console.log(employee)} */}
          {employee.tasks.map((task, index) => (
            <div key={index}>
              <h2>Task: {task}</h2>
              {/* {console.log(employees2)} */}
              {employees2.map((value, index) => (
                <h2>hello</h2>
                  // <h2>{console.log(value.name)}</h2>
              ))}
            </div>
          ))}

          <hr />
        </div>
      ))}
    </div>
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

function useDataCate() {
  const [dataCate, setCate] = React.useState([]);
  React.useEffect(() => {
    fetch('http://localhost/web-shop/wordpress/graphql', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: value_cate_product })
    }).then(response => response.json())
      .then(data => setCate(data.data.productCategories.nodes))
  }, []);
  return dataCate;
}
export default App;
