
const Couchbase = require("couchbase");
const Request = require("request-promise");
const UUID = require("uuid");
const Bitcore = require("bitcore-lib");

class GayWallet {

	constructor (host, bucket, username, password, seed) {

        this.cluster = new Couchbase.Cluster("couchbase://" + host);
        this.cluster.authenticate(username, password);

        this.bucket = this.cluster.openBucket(bucket);
        this.master = seed;
    }

    createKeyPair (account) { }

    getWalletBalance (addresses) { }

    getAddressBalance (address) { }

    getAddressUtxo (address) { }

    insert (data, id = UUID.v4()) { }

    createAccount (data) { }

    addAddress (account) { }

    getAccountBalance(account) { }

    getMasterAddresses() { }

    getMasterKeyPairs() { }

    getMasterAddressWithMinimum(addresses, amount) { }

    getMasterChangeAddress() { }

    getAddresses(account) { }

    getPrivateKeyFromAddress(account, address) { }

    createTransactionFromAccount(account, source, destination, amount) { }

    createTransactionFromMaster(account, destination, amount) { }

}

module.exports = GayWallet;
