const web3 = require('./connect');
const global = require('./global');
const accounts = require('./accounts');
const chainTrazeContractInfo = require('./chainTrazeContractInfo');

global.setWeb3(web3);

async function callWithoutTruffle() {
    const accountsArray = await accounts.get();
    console.log(accountsArray);

    web3.eth.defaultAccount = accountsArray[0];

    const chainTrazeContractInstance = new web3.eth.Contract(chainTrazeContractInfo.abi, chainTrazeContractInfo.address);

    console.log(chainTrazeContractInstance);

    const positionEvent = chainTrazeContractInstance.events.Position({}, function (error, result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log(error);
        }
    });
}

callWithoutTruffle();
