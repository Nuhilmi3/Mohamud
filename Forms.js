import React, {useState} from "react";

function Forms(){
    const [form, setForm] = useState({data: "Hello world"})
    function updateState(e){
        setForm({data: e.target.value})
    }

    return (
        <div>
        <h1>Form here</h1>
        <input type= "text" value={form.data} onChange= {updateState} />
        <p>{form.data}</p>
        </div>
        
    )
}

export default Forms;