module.exports = {
  solidity: {
    version: "0.8.9", // Versi compiler Solidity
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    hardhat: {}, // Konfigurasi default untuk Hardhat network
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/YOUR-PROJECT-ID", // URL RPC node Infura
      accounts: {
        mnemonic: "your mnemonic here", // Mnemonic dari wallet Ethereum
      },
    },
  },
};
