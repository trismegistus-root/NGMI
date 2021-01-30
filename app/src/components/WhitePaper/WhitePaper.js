import React from 'react';
import './WhitePaper.css';

function WhitePaper(props) {
	  return (
           <div>
				<div id = "quick-intro">
				<h1>Deplatformed Token</h1>
				<p>Below is a faucet for Deplatformed Token(symbol: NGMI).
				In the event that our favorite forums, boards, or communities in-general are shut-down,
				having this token in your wallet will allow us to find each other. 
				Due to recent events, I am releasing this faucet before the app is complete. 
				Just copy/paste your address, and the faucet will mint a single token for you for free(exluding gas prices). 
				I think there is enough time left for me to develop the rest of the app without too much worry. 
				I will release a whitepaper when I get a chance, but the goals of the project are as follows:</p>
				<p>1. Create a requestable ERC721 that can be requested for specific communities.</p>
				<p>2. Have the ERC721 create a contract for forum or board specific ERC20s</p>
				<p>3. The server will then ping those forums and board continuously, and an algorithm will determine if that address still exists</p>
				<p>4. If the algorithm determines that the address no longer exists, it will fire up a new address with features similar to the 404'd address</p>
				<p>5. The faucet for that 404'd address token will pause all further minting so no one new may enter the community for a time</p>
				<p>6. For a period of time determined by a specific community, the only way onto the new platform will be to verify identity with Deplatformed Token</p>
				<p>If you would like to donate to the project, send ether to this address 0x97d765fFCf6f32d9d0e840A391aEe1d8FD144EF5</p>
				<p>If you would like to help with the project, add me on github at trismegistus-root</p>
				<label for="faucet" id = "caption">Copy/Paste public address and hit enter for free NGMI: </label>
				<input type = "text" id = "faucet" name = "faucet"></input>
				</div>
		   </div>
          )
}

export default WhitePaper;