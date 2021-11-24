import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [date, setDate] = useState(null)

  const fitchDate = async () => {
    await axios.get("http://localhost:8081").then((response) => {
      setDate(response.data)
    })
  }

  useEffect(() => {
    fitchDate()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
          {date != null ? <p>{date}</p> : null }
      </header>
    </div>
  );
}

export default App;
