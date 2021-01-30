import React, {useState} from 'react';
import './WhitePaper.css';

function WhitePaper (props){
	const [value, setValue] = useState("");

	const handleChange = e => {
		setValue(e.target.value);
  };

	const handleSubmit = e => {
		e.preventDefault();
		alert("Confirm address:" + props.accounts[0]);
		props.address(value)
  };

	const handleKeypress = e => {
      //it triggers by pressing the enter key
		if (e.keyCode === 13) {
		handleSubmit();
    }
  };

	
	  return (
           <div>
				<div id = "quick-intro">
				<h1>Replatform Token</h1> <h3> Total minted: {props.supply} </h3>
				<p>Below is a faucet for Replatform Token (symbol: NGMI).
				In the event that our favorite forums, boards, or communities in-general are shut-down,
				having this token in your wallet will allow us to find each other. 
				Due to recent events, I am releasing this faucet before the app is complete. 
				Just copy/paste your address, and the faucet will mint a single token for you for free (exluding gas prices). 
				I think there is enough time left for completion of the app without too much worry. But better safe than sorry...
				I will release a whitepaper when I get a chance, but the goals of the project are as follows:</p>
				<ol>
				<li>ERC721 that can be requested for specific communities.</li>
				<li>ERC721 creates owner for community ERC20 contract. Owner can then distribute ERC20 to respective community.</li>
				<li>Replatform Token will then ping requested forums and boards continuously, and an algorithm(most likely an oracle) will determine if that address still exists</li>
				<li>If the algorithm determines that the address no longer exists, it will fire up a new address with features similar to the 404'd address</li>
				<li>The faucet for that 404'd address token will pause all further minting so no one new may enter the community for a time</li>
				<li>For a period of time determined by a specific community, the only way onto the new platform will be to verify identity with Deplatformed Token</li>
				</ol>
				<p>Please note: the contract will only permit 1 token per wallet, so please dont waste your gas fees requesting more</p>
				<p>If you would like to donate to the project, send ether to this address 0x97d765fFCf6f32d9d0e840A391aEe1d8FD144EF5</p>
				<p>If you would like to help with the project, add me on github at trismegistus-root</p>
				<label for="faucet" id = "caption">Connect your wallet and press submit: </label>
					<button name = "faucet" onClick={handleSubmit} type="submit">
					  Submit
					</button>
				</div>
		   </div>
          )
	
}

export default WhitePaper;