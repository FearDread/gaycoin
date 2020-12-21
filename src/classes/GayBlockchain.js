
const GayBlock = require('GayBlock');

class GayBlockchain {

	constructor () {

		this.blockchain = [this.startGenesisBlock()];
		this.difficulty = 4;
	}

	GenesisBlock () {

		return new GayBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
	}

	GetLatestBlock () {

		return this.blockchain[this.blockchain.length - 1];
	}

	AddNewBlock (block) {

		block.precedingHash = this.obtainLatestBlock().hash;
		block.proofOfWork(this.difficulty);

		//block.hash = newBlock.computeHash();

		this.blockchain.push(newBlock);
	}

	CheckChainValidity () {

		for (let i = 1; i < this.blockchain.length; i++) {

			const currentBlock = this.blockchain[i];
			const precedingBlock = this.blockchain[i - 1];

			if (currentBlock.hash !== currentBlock.computeHash()) {
				return false;
			}

			if (currentBlock.precedingHash !== precedingBlock.hash) return false;
		}

		return true;
	}
}

module.exports = GayBlockchain;

