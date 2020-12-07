
var SHA256 = require("crypto-js/sha256");

var GayBlock = (function() {

	  function GayBlock (index, timestamp, data, prehash = "") {

		this.index = index;
		this.timestamp = timestamp;
		this.data = data;
		this.precedingHash = precedingHash;
		this.hash = this.computeHash();
		this.nonce = 0;
	  }

	  GayBlock.prototype.ComputeHash = function () {

		return SHA256 (
			this.index +
			this.precedingHash +
			this.timestamp +
			JSON.stringify(this.data) +
			this.nonce
		).toString ();
	  }

	  GayBlock.prototype.ProofOfWork = function (difficulty) {

	  	while ( this.hash.substring(0, difficulty) === Array (difficulty + 1).join("0")) {
	  		this.nonce++;
	  		this.hash = this.prototype.ComputeHash();
	  	}
	  }
	
	
	return GayBlock;
	
})(this);
