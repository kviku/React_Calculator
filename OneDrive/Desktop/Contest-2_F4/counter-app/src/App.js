import React,{useEffect,useState} from 'react'
import './App.css';
import Counter from './component/Counter'

function App() {
  const[count,setCounter]=useState(0);
  const [displayTxt,setDisplayText] = useState(false);
  const [displayBtn,setDisplayBtn] = useState(false);

  useEffect(()=>{
    console.log(`count on every update ${count}`);  
  })
const increase = ()=>{
  setCounter(count => count+1);
  if (count>=0 && count<10){

    setDisplayText(false);
    setDisplayBtn(false);

  }else if( count>=9){
  setDisplayBtn(true);
 } 
   
 
}

const decrease = ()=>{
  setCounter(count=> count-1);
  if (count<=0) {
    setDisplayText(true);
    setCounter(0);
  }else if(count>=0 && count<=10 ){
    setDisplayBtn(false);
  }


}

const zero = ()=>{
  setCounter(0);
  setDisplayBtn(false);
}

  return (
    <div className='app'>
     <Counter 
     count={count} 
     decrease={decrease}
     increase={increase} 
     zero={zero} 
     displayTxt={displayTxt} 
     displayBtn={displayBtn}
     />
    
    </div>   
  );
}

export default App;
