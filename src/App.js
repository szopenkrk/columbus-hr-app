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

      </div>
      {/*CENTER CONTAINER*/}
      <div className="main-container">
      </div>

      {/*FOOTER*/}
      <div className="App-footer">
      </div>
    </div>
  );
}

export default App;
