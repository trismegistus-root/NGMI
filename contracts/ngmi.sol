
	pragma solidity >=0.4.0 < 0.8.0;  
	
	import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";
	import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
	import "@openzeppelin/contracts/ownership/Ownable.sol";
	
	contract NGMI is Ownable,ERC20,ERC20Detailed("Deplatformed", "NGMI", 0){
		
		function minerReward() public {
			require(balanceOf(msg.sender) == 0, "You only need one of these for verification - don't be greedy");
			_mint(msg.sender, 1);
		}
		
		function isNative() public view returns(bool){
			require(balanceOf(msg.sender) > 0);
			return true;
		}
}
