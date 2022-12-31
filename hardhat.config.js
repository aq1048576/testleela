
import dotenv from 'dotenv';

dotenv.config();

const config = {
    solidity: {
        compilers: [
            {
                version: "0.6.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
            {
                version: "0.8.12",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200
                    }
                }
            },
        ]
    },
    networks: {
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL,
            accounts: [process.env.PRIVATE_KEY]
        },
        mainnet: {
            url: process.env.ALCHEMY_MAINNET_URL,
            accounts: [process.env.PRIVATE_KEY]
        },
        hardhat: {
            chainId: 1337
        }
    }
};

export default config;
