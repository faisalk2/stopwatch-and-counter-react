import React, {useState,useRef} from 'react'

const Stopwatch = () => {
    const [count,setCount]=useState(0);
    const [min,setMin]=useState(0);
    const itemId=useRef(null);
    // console.log(itemId);


    let handleStart=()=>{
       if(!itemId.current)
       {
        let id=setInterval(()=>{
           
            setCount((item)=>item+1 );
    },1);
             itemId.current=id;
   return()=>(clearInterval(itemId.current))
       }
    }
    const handleReset=()=>{
        clearInterval(itemId.current);
        itemId.current=null;
        setCount(0);
    }


    let a=Math.floor(count/100);
    let b=count;

  return (
    <div>
        <h1>StopWatch</h1>
        <h2>Count:-{a==60 ? `${count}m`:`0${count}m` }:{b>9 ? `${a}s`:`0${a}s` } </h2>
        <button onClick={handleStart}>start</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}

export default Stopwatch