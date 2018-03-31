pragma solidity ^0.4.17;

import "./MetaCoin.sol";

contract CoinCaller{

	event Error(string message);


	function sendCoin(address coinContractAddress, address receiver, int amount) external {
		MetaCoin m = MetaCoin(coinContractAddress);
		m.sendCoin(receiver, amount);
	}

	function sendCoinDelegate(address coinContractAddress, address receiver, int amount) external {
		if(!coinContractAddress.delegatecall(bytes4(keccak256("sendCoin(address, int256)")), receiver,  amount)) {
			Error("delegatecall did not work!");
		}
	}
}
