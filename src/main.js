const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// For Testing
// Pub :  049f37ea78d3eb83f46ac4b795f3c61f69696e4171985df57df0bec3c7f854080a9e3a8095a4bbaa1f7fd5e428bcdb62fc31d71f7d02c8a9843ad24eef336ec499
// Pri :  5d1c0bffe108e86576e3fea29d3b3b978f25ec736771801b61dec30cf5e020b3
const myKey =  ec.keyFromPrivate('5d1c0bffe108e86576e3fea29d3b3b978f25ec736771801b61dec30cf5e020b3');
const myWalletAddress = myKey.getPublic('hex');


let Coin = new Blockchain();


// usually address1, address2 -> Public Key
const tx1 = new Transaction(myWalletAddress, "public key goes here", 10)
tx1.signTransaction(myKey);
Coin.addTransactions(tx1)


console.log("Start Miner")
Coin.minePendingTransactions(myWalletAddress);
console.log("balance of our wallet is : ", Coin.getBalanceofAddress(myWalletAddress));