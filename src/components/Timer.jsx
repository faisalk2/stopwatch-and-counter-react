import React, {useState} from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
let time=300;
let endTime=0;
const Timer = () => {
    const [count,setCount]=useState(time);
    const itemId=useRef(null);
    // console.log(itemId);

let count1=time;
    let handleStart=()=>{
       let id=setInterval(()=>{
            if(count1===0)
            {
                console.log(count);
                clearInterval(itemId.current) 
            }
            else
            {
                count1--;
                setCount((item)=>item-1 );
            }
        },1000);
                 itemId.current=id;
       return()=>(clearInterval(itemId.current))
    }
    const handleReset=()=>{
        clearInterval(itemId.current);
        itemId.current=null;
        setCount(time);
    }


let a=Math.floor(count/60);
let b=count%60;
  return (
    <div>
        <h1>Timer</h1>
        <h2>Count:-{a>9 ? `${a}m`:`0${a}m` }:{b>9 ? `${b}s`:`0${b}s` } </h2>
        <button onClick={handleStart}>start</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Timer