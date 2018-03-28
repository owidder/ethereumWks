pragma solidity ^0.4.4;

library ConvertLib{
	function convert(int amount,int conversionRate) public pure returns (int convertedAmount)
	{
		return amount * conversionRate;
	}
}
