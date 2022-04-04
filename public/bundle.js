const contractABI = [
  {
    inputs: [],
    name: "hi",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const contractAddress = "0x58bb72a07b7663264eb96df3faf4c413a2dff79b";

var web3 = new Web3("http://localhost:8545");
var helloWorld = new web3.eth.Contract(contractABI, contractAddress);

document.addEventListener("DOMContentLoaded", () => {
  helloWorld.methods
    .hi()
    .call()
    .then((result) => {
      document.getElementById("hi").innerHTML = result;
    });
});
