import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Support from './components/Support';

import Header from './components/Header';
import Footer from './components/Footer';
import { publicRoutes } from './routes';
// import Banner from './views/Banner';
import { useState, useEffect } from 'react';

import { Navigate, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to={'/home'} />} />
          {publicRoutes.map((route, i) => {
          
            const { component: Component, layout, path } = route
            console.log(route)
            return (
              <Route
                key={i}
                path={path}
                element={
                    <Component />
                }
              />
            );
          })}
          {/* <Route path="home" element={<Home />} />
        <Route path="support" element={<Support />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
