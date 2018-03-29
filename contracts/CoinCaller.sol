pragma solidity ^0.4.17;

import "./MetaCoin.sol";

contract CoinCaller{

	function sendCoin(address coinContractAddress, address receiver, uint amount) external {
		MetaCoin m = MetaCoin(coinContractAddress);
		m.sendCoin(receiver, 1);
	}
}
