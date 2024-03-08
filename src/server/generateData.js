const fs = require('fs');
const path = require('path');

// Function to generate random data similar to your provided structure
function generateRandomData() {
    function generateRandomHexValue(length) {
        const hexChars = '0123456789abcdef';
        let randomHex = '0x';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * 16);
            randomHex += hexChars[randomIndex];
        }

        return randomHex;
    }
    const data = {
        hash: generateRandomHexValue(64),
        parentHash: generateRandomHexValue(64),
        miner: '0x09A99d197c7C34EbC50fC8e5d3C999330b2B489d',
        number: `0x${(parseInt(Math.random() * 1000) + 1).toString(16)}`,
        difficulty: `0x${(Math.floor(Math.random() * 3)).toString(16)}`,
        gasLimit: '0x989680',
        gasUsed: generateRandomHexValue(4),
        timestamp: `0x${(Math.floor(Date.now() / 1000)).toString(16)}`,
        nonce: `0x0`,
        baseFeePerGas: `0xe8d4a51000`,
        averageGasPrice: `0xe8d4a51000`,
        averagePriorityFeePerGas: `0x59682f00`,
        staticReward: `0x2b5e3af16b1880000`,
        transactionFees: `0x0`,
        totalSupply: `0x${(Math.floor(Math.random() * 100000000000000) * 100000000).toString(16)}`,
        totalTxs: `0xecc5`,
        transactions: Array.from({ length: Math.floor(Math.random() * 10) }, () => generateRandomHexValue(64))
    };

    return data;
}

function generateRandomTransaction(blockHash, blocknumber, transaction) {
    function generateRandomHexValue(length) {
        const hexChars = '0123456789abcdef';
        let randomHex = '0x';

        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * 16);
            randomHex += hexChars[randomIndex];
        }

        return randomHex;
    }
    const txn = {
        blockHash: blockHash,
        blockNumber: blocknumber,
        blockTimestamp: `0x${(Math.floor(Date.now() / 1000)).toString(16)}`,
        cumulativeGasUsed: `0x1ec30`,
        effectiveGasPrice: `0xe92e0d3f00`,
        effectivePriorityFee: '0x59682f00',
        from: generateRandomHexValue(40),
        gasUsed: `0x5208`,
        logs: [],
        logsBloom: `0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`,
        status: `0x1`,
        to: generateRandomHexValue(40),
        transactionHash: transaction,
        transactionIndex: `0x${(Math.floor(Math.random() * 100) % 8).toString(16)}`,
        totalSupply: `0x${(Math.floor(Math.random() * 100000000000000) * 100000000).toString(16)}`,
        type: `0x2`,
        raw: generateRandomHexValue(242)
    };

    return txn;
}

function appendDataToFile() {
    const blockFileName = path.join(__dirname, '../data/blocks.json');
    const transactionFileName = path.join(__dirname, '../data/transactions.json');
    console.log(blockFileName)

    let jsonData = JSON.parse(fs.readFileSync(blockFileName));

    const maxNumber = Math.max(...jsonData.map(item => parseInt(item.number, 16)));
    const newNumber = (maxNumber + 1).toString(16);
    const newData = generateRandomData();
    newData.number = `0x${newNumber}`;

    newData.transactions.forEach(transaction => {
        const newTxn = generateRandomTransaction(newData.hash, newData.number, transaction);
        let txnData = JSON.parse(fs.readFileSync(transactionFileName));
        txnData.push(newTxn);
        fs.writeFileSync(transactionFileName, JSON.stringify(txnData, null, 2));
        console.log('New Txn added successfully.');
    });

    jsonData.push(newData);

    fs.writeFileSync(blockFileName, JSON.stringify(jsonData, null, 2));

    console.log('New data added successfully.');
}

appendDataToFile();