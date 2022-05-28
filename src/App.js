import logo from './logo.svg';
import './App.css';
import Stopwatch from './components/Stopwatch';
import Timer from './components/Timer';
import React from 'react';
import {Btnstyled,Appstyled} from "./components/App.styled"

function App() {
  const [check,setCheck]=React.useState(false);
 
  return (
    <>
    <Btnstyled>
        <h1 onClick={()=>setCheck(true)}>Timer</h1>
        <h1 onClick={()=>setCheck(false)}>StopWatch</h1>
        
      </Btnstyled>
    <Appstyled>
      <div>
      {check?<Timer/>:<Stopwatch/> }
      </div>
    </Appstyled>

    </>
  );
}

export default App;
