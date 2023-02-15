import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"

export default function App() {

  const [formValue, setformValue] = useState(
    {
      name: 'chaimGreen',
      password: 'i am chassidish',
      username: 'twinkGayAssHot'
    }
  )


  return (
    <div className="App">
      <Header innerHTML="i love chaim green" />
      <header className="App-header" style={{ border: "1px solid white", boxSizing: "border-box" }} >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and done
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form>
          <input type="text" value={formValue.name} onChange={{ function() { } }} />
          <input type="text" />
          <input type="text" />
        </form>
      </header>
    </div >
  );
}

// export default App;
