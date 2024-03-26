import SimpleCrypto from "simple-crypto-js"

const cryptoKey = "4416AA765B59756DDBF68233AB652"

class Crypto {
    constructor() {
        this.SimpleCrypto = new SimpleCrypto(cryptoKey)
    }

    __encrypt(val) {
        return this.SimpleCrypto.encrypt(val)
    }

    encryptString(value = "") {
        return this.__encrypt(value)
    }

    encryptObject(value = {}) {
        return this.__encrypt(value)
    }

    decryptThis(cipherText = "") {
        return this.SimpleCrypto.decrypt(cipherText)
    }

    decryptObject(val) {
        return this.SimpleCrypto.decrypt(val)
    }
}

export default Crypto