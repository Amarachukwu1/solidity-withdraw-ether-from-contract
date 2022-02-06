require('dotenv').config() ;

const EtherReceiver = require('./build/contracts/EtherReceiver.json');
const Web3 = require('web3');

const privateKey = process.env.PRIVATE_KEY;
const web3 = new Web3(new Web3.providers.HttpProvider( `https://cloudflare-eth.com`));
const etherReceiver = new web3.eth.Contract(EtherReceiver.abi, '0x639AdB586061E455f20220495f1497A468a010f8');

const tx = {
  to : '0x639AdB586061E455f20220495f1497A468a010f8',
  gasLimit: 3141592,
  gasUsed: 21662,
  data : etherReceiver.methods.withdraw().encodeABI()
}

web3.eth.accounts.signTransaction(tx, privateKey).then(signed => {
  web3.eth.sendSignedTransaction(signed.rawTransaction)
    .then((receipt) => {
      console.log(receipt);
    })
    .catch((error) => {
      console.log(error.message);
    });
});
