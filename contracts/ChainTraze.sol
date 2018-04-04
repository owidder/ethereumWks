pragma solidity ^0.4.21;
pragma experimental ABIEncoderV2;

contract ChainTraze {
    
    uint constant X_DIM = 1000;
    uint constant Y_DIM = 1000;
    uint constant FIELD_SIZE = X_DIM*Y_DIM;
    
    mapping (address => int256) balances;
    
    string[FIELD_SIZE] field;

    mapping (address => string) addressToId;
    mapping (string => address) idToAddress;
    mapping (string => uint) xpositions;
    mapping (string => uint) ypositions;
    
    function computeIndex(uint x, uint y) pure internal returns(uint index) {
        index = y * X_DIM + x;
    }
    
    function findStartPosition() view internal returns(uint xposition, uint yposition) {
        for(uint y = 0; y < Y_DIM; y++) {
            for(uint x = 0; x < X_DIM; x++) {
                uint index = computeIndex(x, y);
                string storage posContent = field[index];
                uint len = bytes(posContent).length;
                if(len == 0) {
                    xposition = x;
                    yposition = y;
                    return;
                }
            }
        }
        
        revert();
    }
    
    function getPositionContent(uint x, uint y) public view returns(string) {
        uint index = computeIndex(x, y);
        return field[index];
    }
    
    function register(string id) public returns(uint xposition, uint yposition) {
        address existingAddress = idToAddress[id];
        if(existingAddress != address(0x0)) {
            revert();
        }
        
        (xposition, yposition) = findStartPosition();
        uint index = computeIndex(xposition, yposition);
        field[index] = id;
        
        addressToId[msg.sender] = id;
        idToAddress[id] = msg.sender;
        xpositions[id] = xposition;
        ypositions[id] = yposition;
    }
}
