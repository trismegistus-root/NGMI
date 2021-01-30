const NGMI = artifacts.require("./ngmi.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NGMI", accounts => {
  it("Should mint a token to accounts[0]", async function (){
    let instance = await NGMI.deployed();
	await instance.getToken({from: accounts[0]});
	let balance = await instance.balanceOf(accounts[0]);
    return assert.isTrue(balance.toNumber() == 1, "Account did not recieve the token");
  });
});
