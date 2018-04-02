pragma solidity ^0.4.17;

import "./JustForTesting.sol";

contract JustForTestingCaller{

	function directCall(address contractAddress) external {
		JustForTesting m = JustForTesting(contractAddress);
		m.doSomething();
	}

	function delegateCall(address contractAddress) external {
		if(!contractAddress.delegatecall(bytes4(keccak256("doSomething()")))) {
			revert();
		}
	}
}
