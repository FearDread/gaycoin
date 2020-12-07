
var GayBlock = require("gayblock");
var GayBlockchain;


GayBlockchain = (function () {
  
	GayBlockchain = function () {

		this.blockchain = [this.GenesisBlock()];
		this.difficulty = 4;
	}

	GayBlockchain.prototype.GenesisBlock = function () {

		return new GayBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
	}

	GayBlockchain.prototype.ObtainLatestBlock = function () {

		return this.blockchain[this.blockchain.length - 1];
	}

	GayBlockchain.prototype.AddNewBlock = function (block) {

		block.precedingHash = this.ObtainLatestBlock().hash;

		//block.hash = block.ComputeHash();
		block.ProofOfWork(this.difficulty);

		this.blockchain.push(block).
	}

	GayBlockchain.prototype.CheckChainValidity = function () {

		for (let i = 1; i < this.blockchain.length; i++) {
			const currentBlock = this.blockchain[i];
			const precedingBlock = this.blockchain[i - 1];

			if (currentBlock.hash !== currentBlock.computeHash()) {
				return false;
			}

			if (currentBlock.precedingHash !== precedingBlock.hash) { 
				return false;
			}
		}

		return true;
	}

	return GayBlockchain;

})(this);
