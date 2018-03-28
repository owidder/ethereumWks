pragma solidity ^0.4.17;

import "./MetaCoin.sol";

contract CoinCaller{

	function sendCoin(address coinContractAddress, address receiver, int amount) external {
		MetaCoin m = MetaCoin(coinContractAddress);
		m.delegatecall(bytes4(sha3("sendCoin")),receiver, amount);
	}
}
