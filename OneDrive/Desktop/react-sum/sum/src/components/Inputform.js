import React,{useState} from "react";
const Inputform =()=>{

    const [num1,setNum1]=useState('');
    const [num2,setNum2]=useState('');
    const [num3,setNum3]=useState('');

    const submitvalue =()=>{
        setNum3(Number(num1)+Number(num2));
    }

    return <>
    <h2>Add of Two Number</h2>
    <b>{num3}</b><br/>
    Enter I Number <input type="text" onChange={(e)=>setNum1(e.target.value)}/> <br/>
    Enter II Number <input type="text" onChange={(e)=>setNum2(e.target.value)}/> <br/>
    <button onClick={submitvalue}>Submit</button>
    </>
}

export default Inputform;