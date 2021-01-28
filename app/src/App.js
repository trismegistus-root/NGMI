import React from "react";
import { DrizzleContext } from "@drizzle/react-plugin";
import { Drizzle } from "@drizzle/store";
import ngmi from './contracts/ngmi.json';
import "./App.css";

const drizzleOptions = {
  contracts: [ngmi],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

const drizzle = new Drizzle(drizzleOptions);

const App = () => {
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <DrizzleContext.Consumer>
        {drizzleContext => {
          const { drizzle, drizzleState, initialized } = drizzleContext;

          if (!initialized) {
            return "Loading..."
          }

          return (
           <div>
				
		   </div>
          )
        }}
      </DrizzleContext.Consumer>
    </DrizzleContext.Provider>
  );
}

export default App;
