export let chainId = 42161;
export let chain = "arbitrum-one";
export let startBlock = 107509950;

/** Rule: keep addresses lowercased */

/**
 * Keep aliases unique and always in sync with the frontend
 * @example export let linear = [[address1, alias1, version1], [address2, alias2, version2]]
 */

export let linear: string[][] = [
  ["0x197d655f3be03903fd25e7828c3534504bfe525e", "LL", "V20"],
  ["0x6e532612aa60c5dc0d157b72fa90910f68245d10", "LL2", "V21"],
];

export let dynamic: string[][] = [
  ["0xa9efbef1a35ff80041f567391bdc9813b2d50197", "LD", "V20"],
  ["0x6e78bd0566f0fe860346f92566257706fed2a86f", "LD2", "V21"],
];

/** PRBProxy registry */
export let registry = "0x584009e9ede26e212182c9745f5c000191296a78";

/**
 * The initializer contract is used to trigger the indexing of all other contracts.
 * It should be a linear contract, the oldest/first one deployed on this chain.
 * ↪ 🚨 On any new chain, please create a Lockup Linear stream to kick-off the indexing flow
 */

export let initializer = linear[0][0];
