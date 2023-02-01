import Component1 from "./components/Component1/Component1";
import Component2 from "./components/Component2/Component2";
import './App.css';

function App() {
  return (
    <div className="App">
      
      <h1 className="page-title">My First React App</h1>
      <Component1 />
    <Component2 />
    </div>
    
  );
 
}

export default App;


/*
	REACT
	- SPA
	- Uses Virtual DOM 
	Declarative Library
  - Tell react WHAT to do
  - Don't tell react HOW to do, react handles it
	JSX: JavaScript + XML
	Components - (which returns JSX)
	Two types:
	- Class Based Components (JavaScript Classes)
	- Function Based components (JavaScript Functions)
	Properties:
  - Create parts of UI
  - Can be nested
  - Can be re-used
*/
