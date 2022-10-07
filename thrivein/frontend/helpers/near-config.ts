const CONTRACT_NAME =
  process.env.CONTRACT_NAME || "dev-1641682453576-30872819216475";

const NEAR_CONFIG = {
  production: {},
  development: {},
  testnet: {
    networkId: "testnet",
    nodeUrl: "https://rpc.testnet.near.org",
    contractName: CONTRACT_NAME,
    walletUrl: "https://wallet.testnet.near.org",
    helperUrl: "https://helper.testnet.near.org",
  },
};

export default NEAR_CONFIG;
