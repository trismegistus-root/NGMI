const NGMI = artifacts.require("./NGMI.sol");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("NGMI", accounts => {
  it("Tests if user owns NGMI token", async function (){
    let instance = await NGMI.deployed();
	await instance.getToken({from: accounts[0]});
	let native = await instance.isNative();
    return assert.isTrue(native == true, "Account did not recieve the token");
  });
});
