import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          OfficeSupplies
        </div>
        <div className="search-place">
          <input type="text" name="search-input"/>
          <input type="submit" name="Search"  />
        </div>
      </header>
      <div className="menu">
        <ul>
          <li><a href=''>All our products</a></li>
          <li><a href=''>Inspiration for the office</a></li>
          <li><a href=''>About OS</a></li>
        </ul>
      </div>
      {/*CENTER CONTAINER*/}
      <div className="main-container">
        <div className="left-product-menu">
          <ul>
            <li>Paper clips</li>
            <li>Post-in notes</li>
            <li>Staples</li>
            <li>Hole punches</li>
          </ul>
        </div>
        <div className="product-container">
          <div className="image-box">
          </div>
          <div className="product-description-container">
          </div>
        </div>
      </div>

      {/*FOOTER*/}
      <div className="App-footer">
      </div>
    </div>
  );
}

export default App;
