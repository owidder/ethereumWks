const web3 = require('./connect');
const global = require('./global');
const accounts = require('./accounts');
const chainTrazeContractInfo = require('./chainTrazeContractInfo');

global.setWeb3(web3);

async function callWithoutTruffle() {
    const accountsArray = await accounts.get();
    console.log(accountsArray);

    web3.eth.defaultAccount = accountsArray[0];

    const chainTrazeContract = web3.eth.contract(chainTrazeContractInfo.abi);
    const chainTrazeContractInstance = chainTrazeContract.at(chainTrazeContractInfo.address);

    const positionEvent = chainTrazeContractInstance.Position();
    positionEvent.watch(function (error, result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log(error);
        }
    });

    const errorEvent = chainTrazeContractInstance.Error();
    errorEvent.watch(function (error, result) {
        if(!error) {
            console.log(result);
        }
        else {
            console.log(error);
        }
    });

    const result = await chainTrazeContractInstance.getPositionContent.call(0, 0);
    console.log(result);

}

callWithoutTruffle();
