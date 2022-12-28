const Web3 = require('web3')

var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/959e26bc8fd04d02b8930514da8f93b3"));
const binary = require("../artifacts/contracts/MyToken.sol/MyToken.json");
const addres = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const action = new web3.eth.Contract(binary.abi, addres)

console.log("Result: ")

action.methods.generateAction().call().then(console.log)
