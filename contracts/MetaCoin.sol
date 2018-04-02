pragma solidity ^0.4.17;

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract MetaCoin {
	mapping (address => int) balances;

	event Transfer(address indexed _from, address indexed _to, int _value);

	event log_receiver(address indexed receiver);
	event log_text(string text);

	function MetaCoin() public {
		balances[tx.origin] = 10000;
	}

	function sendCoin(address receiver,int amount) public {
		log_receiver(receiver);
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		Transfer(msg.sender, receiver, amount);
	}

	function justaTest() public {
		log_text("Hallo!");
	}

	function getBalance(address addr) public view returns(int) {
		return balances[addr];
	}
}
