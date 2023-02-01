import React, { Component} from 'react'
import './App.css';
//import ChildComponent from './componets/ChildComponent';
import Count from './componets/Count';
//import BulbOnOff from './componets/BulbOnOff';
class App extends Component {
  render(){

  return (
    <div className="App">
      
      {/*<ChildComponent />*/}
    {< Count />}
    {/*<BulbOnOff />*/}
    </div>
    
  );
  
  }
}

export default App;
