import React, {useState,useEffect} from 'react';
import hooks from './hooks.jpg';
const Hooks=()=>
{
    const [counter,setCounter]=useState(0);
    document.body.style = 'background: lightcyan;';
    const handleClick=()=>setCounter(counter+1);
    useEffect=(()=>
    {
        console.log("inside UseEffect");

    },[])
  return(
    <div>
   
     <img src={hooks}  style={{marginTop:"40px", width:"20%" , marginLeft:"35px"}}alt="" />
     <h1 style={{textAlign:"center"}}>React Hooks</h1>
    <button style={{marginTop:"40px", 
    background:"yellow",
     borderRadius:"20px", 
     borderBlockColor:"Red",
    fontSize:"20px"}} onClick={handleClick}>Click Me!</button>
    <div style={{color:"red", marginTop:"20px"}}>
        <h4>You Clicked {counter} times</h4></div>
    </div>
   
  )
}
export default Hooks;