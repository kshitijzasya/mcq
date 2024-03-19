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
        // const halfLength = Math.ceil(cipherText.length / 2)
        // const cipherTexts = [ cipherText.substr(0, halfLength), cipherText.substr(halfLength) ]
        // console.log('encrypted string', typeof(encryptedString))
        // return SimpleCrypto.update(cipherTexts[0])
        //         .append(cipherTexts[1])
        //         .decrypt()
        return this.SimpleCrypto.decrypt(cipherText)
    }

    decryptObject(val) {
        return this.SimpleCrypto.decrypt(val)
    }
}

export default Crypto