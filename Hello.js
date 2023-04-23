import React from "react";

function Hello(props){
    const {name}= props  // destructing
    return(
        <div>
            <h3>My name is {name}</h3>
            
        </div>
    )

}

export default Hello;

