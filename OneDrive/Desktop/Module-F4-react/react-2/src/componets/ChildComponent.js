import React, { Component} from 'react'

import GrandChildComponent from './GrandChildComponent';

class ChildComponent extends Component {
    render(){
        return(
            <>
             <h1> ChildComponent</h1>
              <GrandChildComponent tech='javaScript' bgColor='red' />
              <GrandChildComponent tech='React.js' bgColor='green' />
              <GrandChildComponent tech='html' bgColor='yellow' />
              <GrandChildComponent tech='css' bgColor='blue' />
              <GrandChildComponent tech='bootstrap' bgColor='orange' />
            
            </>
       
            
      
        )
    }
}
export default ChildComponent;
/*
FrageMents: <></>
*/
