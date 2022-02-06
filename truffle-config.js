require('dotenv').config() ;

const HDWalletProvider = require('@truffle/hdwallet-provider');
const mnemonic = process.env.MNENOMIC;

module.exports = {
  networks: {
    mainnet: {
     provider: () => new HDWalletProvider(bridge isolate pitch hire chunk woman copper before subject pause bridge glare, `https://cloudflare-eth.com`),
     network_id: 1,
     gas: 320000,
    }
  },
};
