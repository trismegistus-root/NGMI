//SPDX-License-Identifier: <SPDX-License>
	pragma solidity >=0.4.0 < 0.8.1;  
	
	import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
	import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
	import "@openzeppelin/contracts/ownership/Ownable.sol";
	import "@openzeppelin/contracts/lifecycle/Pausable.sol";
	
	contract NGMI is Ownable,Pausable,ERC20,ERC20Detailed("Replatform", "NGMI", 0){
		
		function getToken() public whenNotPaused{
			require(balanceOf(msg.sender) == 0, "You only need one of these for verification - don't be greedy");
			_mint(msg.sender, 1);
		}

		function isNative() public view returns(bool){
			require(balanceOf(msg.sender) > 0);
			return true;
		}
}
