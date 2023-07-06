export let chainId = 43114;
export let chain = "avalanche";
export let startBlock = 32164210;

/** Rule: keep addresses lowercased" */

/**
 * Keep aliases unique and always in sync with the frontend
 * @example export let linear = [[address1, alias2], [address2, alias2]]
 */

export let linear: string[][] = [
  ["0x610346e9088afa70d6b03e96a800b3267e75ca19", "LL"],
];

export let dynamic: string[][] = [
  ["0x665d1c8337f1035cfbe13dd94bb669110b975f5f", "LD"],
];

/** PRBProxy registry */
export let registry = "0xd42a2bb59775694c9df4c7822bffab150e6c699d";

/**
 * The initializer contract is used to trigger the indexing of all other contracts.
 * It should be a linear contract, the oldest/first one deployed on this chain.
 */

export let initializer = linear[0][0];
