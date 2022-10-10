const Web3 = require("web3");
const rpcURL = "https://goerli.infura.io/v3/43be8e7969304c05a2fac8d9335ddbac"; // Your RCkP URL goes here
const web3 = new Web3(rpcURL);
const address = "0xCE05561816E126CD7CA1CFd4025252A6eC2847A7"; // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
  console.log(balance);
});
