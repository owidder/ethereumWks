const _ = require('lodash');

const abi =
    [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "id",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "Position",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "id",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "x",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "name": "y",
                    "type": "string"
                }
            ],
            "name": "Position2",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "name": "message",
                    "type": "string"
                }
            ],
            "name": "Error",
            "type": "event"
        },
        {
            "constant": false,
            "inputs": [
                {
                    "name": "id",
                    "type": "string"
                },
                {
                    "name": "startx",
                    "type": "uint256"
                },
                {
                    "name": "starty",
                    "type": "uint256"
                }
            ],
            "name": "register",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [
                {
                    "name": "x",
                    "type": "uint256"
                },
                {
                    "name": "y",
                    "type": "uint256"
                }
            ],
            "name": "getPositionContent",
            "outputs": [
                {
                    "name": "",
                    "type": "string"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ]
;


const processParamAddress = process.argv[3];
const address = _.isUndefined(processParamAddress) ? "0x3d49d1ef2ade060a33c6e6aa213513a7ee9a6241" : processParamAddress;

module.exports = {abi, address};
