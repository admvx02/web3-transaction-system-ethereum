// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Transactions {
    uint256 public transactionCount;

    event Transfer(address indexed from, address indexed receiver, uint256 amount, string message, uint256 timestamp);
  
    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
    }

    TransferStruct[] public transactions;

    function addToBlockchain(address payable receiver, uint256 amount, string memory message) public {
        transactionCount++;
        TransferStruct memory newTransfer = TransferStruct(msg.sender, receiver, amount, message, block.timestamp);
        transactions.push(newTransfer);

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
