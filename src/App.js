import React from 'react';
// import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './redux/counter';
import Header from './components/header/Header.js';
import Dashboard from './components/dashboard/Dashboard';
import { Router } from '@reach/router';

function App() {
  // const [counter, setCounter] = useState(0);
  const { count } = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Header />
      <Dashboard />
      <div>
        <h2>The Count Is : {count}</h2>
        <button onClick={() => dispatch(increment())} >Increment</button>
        <button onClick={() => dispatch(decrement())} > Decrement</button>
      </div>
      
    </div>
  );
}

export default App;
