import React from "react";
import ngmi from './contracts/ngmi.json';
import "./App.css";
import WhitePaper from "./components/WhitePaper/WhitePaper.js";


class App extends React.Component{
	render(){
          return (
           <div>
				<WhitePaper/>
		   </div>
          )
       }
}

export default App;
