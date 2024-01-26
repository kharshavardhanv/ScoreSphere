import React, { useState } from 'react';

export default function Emo(props) {
  const [scor,setscor]=useState(new Array(props.n).fill(0));
  const addsc=(e)=>
  {   
       setscor(presc=>
        {
          return presc.map((sc,i)=>
       {
        if(i==e) return sc+1;
        return sc;
       })
      });   
  }
  const res=()=>
  {
    setscor(presc=>
      {
       return presc.map(e=>(e=0))
      })
  }
  return (
    <div>
          
            {
            scor.map((sc,e)=>
            {
              return <li key={e}>Player{e+1}: {"  "} {sc} {sc==props.targ?<span>!!!Winner</span>:<span></span>}<button onClick={()=>addsc(e)}>+1</button></li>
            })
            }
           <button onClick={res}>Reset</button>
    </div>
  )
}