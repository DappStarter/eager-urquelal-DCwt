require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace arctic sun tone struggle rice shift protect hockey arena army genius'; 
let testAccounts = [
"0x47549f28ad22acce88fd8572dec6395eb6e3640c7992b43467275fa0748fb5ac",
"0xf53b13026aecf4e05dc70210433357cf3dc60c9f31c2b40b1af1bbd4f8efa841",
"0x45d4355bae36ca3812fea85877059db6af0e2cbbaa52fcaee71101976ec340dd",
"0x071136fb605c1f5df8c939ff28767956274e725fec3135b4ca41bf7f936c8e47",
"0x472cccfc54f5a3672f15b1eb3ff8d00ad9ba520d8068a71d872247f7a69ca280",
"0x2aba0a7a76ba505a7c1dbfeea06685d477e3557be89000ec9211ee924da9b9a4",
"0xc549186e1d9fe15bf001679fd593e1efd4ab96e21cb2c05e61805172f77005f6",
"0x16ece5d41e8635f6e6948767c190ea5b1cf1123b7d6aa21c50b8d0ef86cee97e",
"0x453ee18fee377c24ddca050315a83b89b973344d5f098514e146a99f5eae38f3",
"0x92ed44927aa77942aaaf9cb9c8fb1401d082062b3a8d8b215f4b96405c0033dd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

