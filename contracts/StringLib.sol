pragma solidity ^0.4.19;

library StringLib {
    function uintToBytes(uint v) public pure returns (bytes) {
        uint maxlength = 100;
        bytes memory reversed = new bytes(maxlength);
        uint i = 0;
        while (v != 0) {
            uint remainder = v % 10;
            v = v / 10;
            reversed[i++] = byte(48 + remainder);
        }
        bytes memory b = new bytes(i + 1);
        for (uint j = 0; j <= i; j++) {
            b[j] = reversed[i - j];
        }
        
        return (b);
    }

    function uintToString(uint v) public pure returns (string str) {
        bytes memory b = uintToBytes(v);
        str = string(b);
    }
}
