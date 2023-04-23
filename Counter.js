import React from "react";
import { useState } from "react"


function Counter(){
    const [count, setCount] = useState(5);
    return(
    <p>
        <button onClick={() => setCount(count + 1)}> CLICK HERE</button>
        <p>{count}</p>
    
    
    </p>

    )
}

export default Counter;