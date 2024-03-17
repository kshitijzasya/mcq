import SimpleCrypto from "simple-crypto-js"

const cryptoKey = "4416AA765B59756DDBF68233AB652"

class Crypto {
    constructor() {
        this.SimpleCrypto = new SimpleCrypto(cryptoKey)
    }

    encryptThis(value = "") {
        return this.SimpleCrypto.encrypt(value, function(data) {
            console.log('inside encry[t', data)
        })
    }

    decryptThis(encryptedString = "") {

    }
}

export default Crypto