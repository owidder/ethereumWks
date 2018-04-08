const _ = require('lodash');

const abi = [
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
                }
            ],
            "name": "register",
            "outputs": [
                {
                    "name": "xposition",
                    "type": "uint256"
                },
                {
                    "name": "yposition",
                    "type": "uint256"
                }
            ],
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
];

const processParamAddress = process.argv[3];
const address = _.isUndefined(processParamAddress) ? "0x8cdaf0cd259887258bc13a92c0a6da92698644c0" : processParamAddress;

module.exports = {abi, address};
