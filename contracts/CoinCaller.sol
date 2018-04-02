pragma solidity ^0.4.17;

import "./MetaCoin.sol";

contract CoinCaller{

	event Error(string message);

	function sendCoin(address coinContractAddress, address receiver, int amount) external {
		MetaCoin m = MetaCoin(coinContractAddress);
		m.sendCoin(receiver, amount);
	}

	function sendCoinDelegate(address coinContractAddress, address receiver, int amount) external {
		if(!coinContractAddress.delegatecall(bytes4(keccak256("sendCoin(address,int256)")), receiver,  amount)) {
			Error("sendCoinDelegate did not work!");
		}
	}

	function delegateTest(address coinContractAddress) external {
		if(!coinContractAddress.delegatecall(bytes4(keccak256("justaTest()")))) {
			Error("delegateTest did not work!");
		}
	}

	function noDelegateTest(address coinContractAddress) external {
		MetaCoin m = MetaCoin(coinContractAddress);
		m.justaTest();
	}
}
