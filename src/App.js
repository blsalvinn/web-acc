import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import MyComponent from './views/Example/MyComponent.js';
// import ChildComponent3 from './views/Example/childs/ChildComponent3';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <MyComponent /> */}
          <Header />
        </header>

        <body className="App-body">
          <div className="body">this is body</div>
        </body>

        <footer className="App-footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
