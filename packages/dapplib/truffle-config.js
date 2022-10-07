require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note trumpet protect inner arctic blue table'; 
let testAccounts = [
"0x4fa7b990ea0be4fc61848edb144b457b9b20563acdb3a438817ac69c4d02a46d",
"0x3cf5c9a76f528718d77060e295259bb2f3fbe8fd76fedbcd49c69d328bb8c2e5",
"0xd85e5a4bde953fff95acdfade0962f21b178d208b91261969f580ff4be23e751",
"0xa9f40b0400e0663de364246d299c5d5a94a82e82c97f1908eb73f894790d49ff",
"0xe1dfad2cc0dc81cc9477e5ac9c42494e61028ca7f27ae02b754a4140512fb42b",
"0x2e91b6fcb17494dc633b33f2cb57c8ec447b88fca2ba33a10e985c20b818471d",
"0xb237862771f529d74f9e847b688e1345a447e387f08d4f1fe9e2880ee3d0e243",
"0x134da81be06fe5bbc716b04e60b53a7ebe98005f9ebf4e71c9d90365f9d52615",
"0xb0e8f41499b979854a5d55c80e40d2764c27870da10b9906db2761b2a11a5f6f",
"0xf5ce5a5cf8c971b507dda70e232108a1ac74abcab862ff8a11254856da4f4ad6"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


