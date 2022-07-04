import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Avatar } from './components/Avatar/Avatar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <Avatar
        backgroundColor="#ababab"
        format="square"
        img="https://img1.ak.crunchyroll.com/i/spire4/d3ccf00d42fbb3b1da9a7102617ac5671647251983_main.jpg"
        name="Raul Henrique"
        size="small"
      />
    </div>
  );
}

export default App;