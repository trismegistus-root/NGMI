import React from "react";
import ngmi from './contracts/ngmi.json';
import "./App.css";
import WhitePaper from "./components/WhitePaper/WhitePaper.js";
import Web3 from 'web3';

let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");



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
