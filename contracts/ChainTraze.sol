pragma solidity ^0.4.21;

contract ChainTraze {
    
    uint constant X_DIM = 1000;
    uint constant Y_DIM = 1000;
    uint constant FIELD_SIZE = X_DIM*Y_DIM;
    
    mapping (address => int256) balances;
    
    string[FIELD_SIZE] field;
    
    mapping (address => string) ids;
    mapping (string => address) addresses;
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
                x++;
            }
            y++;
        }
        
        revert();
    }
    
    function register(string id) public returns(uint xposition, uint yposition) {
        string storage existingId = ids[msg.sender];
        uint len = bytes(existingId).length;
        if(len > 0) {
            revert();
        }
        
        (xposition, yposition) = findStartPosition();
        uint index = computeIndex(xposition, yposition);
        field[index] = id;
        
        ids[msg.sender] = id;
        addresses[id] = msg.sender;
        xpositions[id] = xposition;
        ypositions[id] = yposition;
    }
}
