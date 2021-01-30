const NGMI = artifacts.require("./ngmi.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NGMI", accounts => {
  it("accounts[0] should not recieve more than 1 token", async function (){
    let instance = await NGMI.deployed();
	await instance.getToken({from: accounts[0]});
	let balance = await instance.balanceOf(accounts[0]);
	let fail;
	try{
	await instance.getToken({from: accounts[0]});
	} catch(e){
		fail = "only1";
	}
    return assert.isTrue(fail == "only1", "Account recieved more than 1 token");
  });
});
