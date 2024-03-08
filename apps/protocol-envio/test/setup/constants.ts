/** GENERAL CONFIGURATION */

export type Vendor = "Envio" | "TheGraph";

const CHAIN_ETHEREUM_ID = 1;
const CHAIN_SEPOLIA_ID = 11155111;

export const configurations: Record<
  number,
  {
    endpoint: Record<Vendor, string>;
    token: string;
    recipient: string;
    sender: string;
    streamIds: string[];
  }
> = {
  [CHAIN_SEPOLIA_ID]: {
    endpoint: {
      Envio: "http://localhost:8080/v1/graphql",
      TheGraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2-experimental",
    },
    token: "0x776b6fc2ed15d6bb5fc32e0c89de68683118c62a",
    recipient: "0xf31b00e025584486f7c37cf0ae0073c97c12c634",
    sender: "0xf976aF93B0A5A9F55A7f285a3B5355B8575Eb5bc",
    streamIds: [
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-608",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-609",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-610",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-611",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-612",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-613",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-614",
      "0xc9940ad8f43aad8e8f33a4d5dbbf0a8f7ff4429a-11155111-70",
    ],
  },
  [CHAIN_ETHEREUM_ID]: {
    endpoint: {
      Envio: "http://localhost:8080/v1/graphql",
      TheGraph:
        "https://api.thegraph.com/subgraphs/name/sablier-labs/sablier-v2",
    },
    token: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    recipient: "0xce7da458acfaff35ffdaa51c41a2952c735e357c",
    sender: "0x6882bc2784d61c41846e4d6dce88991cba0e1510",
    streamIds: [
      "0xafb979d9afad1ad27c5eff4e27226e3ab9e5dcc9-1-10779",
      "0xafb979d9afad1ad27c5eff4e27226e3ab9e5dcc9-1-10778",
      "0xafb979d9afad1ad27c5eff4e27226e3ab9e5dcc9-1-10776",
      "0xafb979d9afad1ad27c5eff4e27226e3ab9e5dcc9-1-10469",
    ],
  },
};

/** SPECIALIZED CONFIGURATION */

export const chainId = CHAIN_SEPOLIA_ID;
export const endpoint = configurations[chainId].endpoint;
export const configuration = configurations[chainId];

export const SKIP_CLEANUP = false;
