pragma solidity ^0.4.17;

contract JustForTesting {
	event log_text(string text);

	function doSomething() public {
		log_text("Hallo!");
	}
}
