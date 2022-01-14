const EC = require('elliptic').ec;
const ec = new EC('secp256k1'); // secp256k1 is also Basis of bitcoin wallet

const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');