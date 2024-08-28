"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializer_merkle = exports.initializer_protocol = exports.registry = exports.factory = exports.tranched = exports.dynamic = exports.linear = exports.startBlock_merkle = exports.startBlock_protocol = exports.chain = exports.chainId = void 0;
exports.chainId = 59144;
exports.chain = "linea";
exports.startBlock_protocol = 7728000;
exports.startBlock_merkle = 7728000;
/** Rule: keep addresses lowercased */
/**
 * Keep aliases unique and always in sync with the frontend
 * @example export let linear = [[address1, alias1, version1], [address2, alias2, version2]]
 */
exports.linear = [
    ["0xb5d39049510f47ee7f74c528105d225e42747d63", "LL3", "V22"],
];
exports.dynamic = [
    ["0xf2e46b249cfe09c2b3a2022dc81e0bb4be3336f1", "LD3", "V22"],
];
exports.tranched = [
    ["0xc46ce4b77cbc46d17a2eceb2cc8e2ee23d96529f", "LT3", "V22"],
];
exports.factory = [
    ["0x35e9c3445a039b258eb7112a5eea259a825e8ac0", "MSF3", "V22"],
];
/** PRBProxy registry */
exports.registry = "";
/**
 * The initializer contract is used to trigger the indexing of all other contracts.
 * It should be a linear contract, the oldest/first one deployed on this chain.
 * ↪ 🚨 [Protocol] On any new chain, please create a Lockup Linear stream to kick-off the indexing flow
 */
exports.initializer_protocol = exports.linear[0][0];
exports.initializer_merkle = exports.factory[0][0];
