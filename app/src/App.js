import React from "react";
import { Drizzle } from "@drizzle/store";
import ngmi from './contracts/ngmi.json';
import "./App.css";
import WhitePaper from "./components/WhitePaper/WhitePaper.js";

//----Begin Application Code-----//
const drizzleOptions = {
  contracts: [ngmi]
};

const drizzle = new Drizzle(drizzleOptions);



class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {loading: null, drizzleState: null};
	}

	componentDidMount() {
		const { drizzle } = this.props;
		this.unsubscribe = drizzle.store.subscribe(() => {
		const drizzleState = drizzle.store.getState();
		if (drizzleState.drizzleStatus.initialized) {
		  this.setState({ loading: false, drizzleState });
    }
  });
} //----end componentDidMount
	render(){
          return (
           <div>
				<WhitePaper drizzle = {drizzle}/>
		   </div>
          )
       }
}

export default App;
