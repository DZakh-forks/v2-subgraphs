export let chainId = 1;
export let chain = "mainnet";
export let startBlock = 17613130;

/** Rule: keep addresses lowercased */

/**
 * Keep aliases unique and always in sync with the frontend
 * @example export let linear = [[address1, alias1, version1], [address2, alias2, version2]]
 */

export let linear: string[][] = [
  ["0xb10daee1fcf62243ae27776d7a92d39dc8740f95", "LL", "V20"],
  ["0xe99aeff5bb41d0d7340e7b0c8001f593768ba0e5", "LL2", "V21"],
];

export let dynamic: string[][] = [
  ["0x39efdc3dbb57b2388ccc4bb40ac4cb1226bc9e44", "LD", "V20"],
  ["0x3c7cd8be42489252cbcc6dc94a17f7f4ec74437e", "LD2", "V21"],
];

/** PRBProxy registry */
export let registry = "0x584009e9ede26e212182c9745f5c000191296a78";

/**
 * The initializer contract is used to trigger the indexing of all other contracts.
 * It should be a linear contract, the oldest/first one deployed on this chain.
 * ↪ 🚨 On any new chain, please create a Lockup Linear stream to kick-off the indexing flow
 */

export let initializer = linear[0][0];
