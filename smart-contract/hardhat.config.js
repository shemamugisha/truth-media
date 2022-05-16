require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.2",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/wQGwOymSk8sOozdZXScmIOzRIrLpvcLy",
      accounts: [
        "705de641ebb9c31a6c088ab778b82037d1b678687cd41da804777a43b07b2079",
      ],
    },
  },
};
