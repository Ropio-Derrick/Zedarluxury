import { NearMeDisabledSharp, TextIncrease } from '@mui/icons-material';
import React, { useState, useEffect } from 'react'

function Hooks() {

    let number = 0;

    const [counter,setCounter] = useState(number)
    
    function increament (){        
        return setCounter(counter +1)
    }

    function decreament (){        
        return setCounter(counter -1)
    }

    useEffect(()=>{
        console.log("Rerendered");
    });

    //compoment did mount
    useEffect(()=>{
        console.log("Component Did Mount");
    },[])

    //Component did update
    useEffect(()=>{
        console.log('value changed  !!: '+ counter);
    },[counter])


  return (
    <div>
        <button onClick={increament}> Add </button>
        <h1> {counter} </h1>
        <button onClick={decreament}> sub </button>
    </div>
  )
}

export default Hooks;
