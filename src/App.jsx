// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Justinfo from './Justinfo.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <Justinfo count ={count}/>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import React, { useState, useMemo } from "react";

// function App() {
//   const [number, setNumber] = useState(1);

//   const doubled = useMemo(() => {
//     console.log("Running calculation...");
//     return number * 2;
//   }, [number]);

//   return (
//     <div>
//       <input 
//         type="number" 
//         value={number} 
//         onChange={(e) => setNumber(Number(e.target.value))} 
//       />
//       <h2>Double: {doubled}</h2>
//     </div>
//   );
// }

// export default App;

// import React, { useReducer, useState } from 'react'
// import Justinfo from './Justinfo'

// function App() {

//   const reducer=(state,action)=>{
//     switch(action.type){
//       case "increment":
//         return state+1
//         case "decr":
//           return state=state-1


//         case "reset":
//          return state=0
           
//         default:
//           return state
//     }
  
  
//   }
    
//      const[count,dispatch]=useReducer(reducer,0)
//   return (
     
//      <div>
//          <h2>count:{count}</h2>

//          <button onClick={()=>dispatch({type:"increment"})}>+</button>
//           <button onClick={()=>dispatch({type:"decr"})}>-</button>
//            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
//            <Justinfo name={"hashin"}></Justinfo>
//      </div>

//   )
// }
//   export default App

import {useState} from 'react'

function App() {

   const [num1,setNum1]=useState("")
   const [num2,setNum2]=useState("")
   const [result,setResult]=useState(0)
   
  const resetButton = () => {
  setNum1("");
  setNum2("");
  setResult(0);
};


   const handleResult=()=>{
    setResult(Number(num1)+Number(num2))
   }

   const handleResult2=()=>{
     setResult(Number(num1)-Number(num2))
   }

  return (
    <div style={{textAlign:"center",marginTop:"50px",border:"2px solid black",padding:"20px",width:"220px",marginLeft:"600px",borderRadius:"10px"}}>
      <h2>Add Two Numbers</h2>
      <input type='number' value={num1} onChange={(e)=>setNum1(e.target.value)} placeholder='Enter Number'></input>
      <input type=" number" value={num2} onChange={(e)=>setNum2(e.target.value)} placeholder='Enter Number' />
       <button onClick={handleResult}>Add</button>
       <button onClick={handleResult2}>Less</button>
       <button onClick={resetButton}>Reset</button>
       <h3>Result:{result}</h3>
    </div>
  )
}

export default App
