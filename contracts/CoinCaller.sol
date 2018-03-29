pragma solidity ^0.4.17;

import "./MetaCoin.sol";

contract CoinCaller{

	function sendCoin(address coinContractAddress, address receiver, uint amount) external {
		MetaCoin m = MetaCoin(coinContractAddress);
		m.delegatecall(bytes4(keccak256("sendCoin(address,uint)")),receiver, amount);
	}
}
