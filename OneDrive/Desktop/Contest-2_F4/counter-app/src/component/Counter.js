import React from 'react'
import './Counter.css';

const  Counter =(props)=>{
return(
<div className='main'>
    <h1 style={{ fontWeight: "100", fontSize: "3rem" }}>Counter using React</h1>
    <p style={{ fontWeight: "100", fontSize: "1.3rem" }}>Your Counter Count is : <strong style={{ fontWeight: "600", fontSize: "1.4rem" }}>{props.count}</strong></p>
    <hr className='line' />
    {props.displayTxt ? <p className='err'>Error : Cannot go below 0</p>: null}
    <div className='btns'>
      <button  onClick={props.decrease} className="btn">Decreament</button>
      <button onClick={props.increase}  className="btn">Increament</button>
      {props.displayBtn ? <button onClick={props.zero}  className="btn reset">Go Back to 0</button>: null}
    </div>     
    </div>
)
    
}
export default Counter