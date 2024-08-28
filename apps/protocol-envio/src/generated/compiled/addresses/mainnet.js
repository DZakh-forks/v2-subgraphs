"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializer_merkle = exports.initializer_protocol = exports.registry = exports.factory = exports.tranched = exports.dynamic = exports.linear = exports.startBlock_merkle = exports.startBlock_protocol = exports.chain = exports.chainId = void 0;
exports.chainId = 1;
exports.chain = "mainnet";
exports.startBlock_protocol = 17613130;
exports.startBlock_merkle = 17615650;
/** Rule: keep addresses lowercased */
/**
 * Keep aliases unique and always in sync with the frontend
 * @example export let linear = [[address1, alias1, version1], [address2, alias2, version2]]
 */
exports.linear = [
    ["0xb10daee1fcf62243ae27776d7a92d39dc8740f95", "LL", "V20"],
    ["0xafb979d9afad1ad27c5eff4e27226e3ab9e5dcc9", "LL2", "V21"],
    ["0x3962f6585946823440d274ad7c719b02b49de51e", "LL3", "V22"],
];
exports.dynamic = [
    ["0x39efdc3dbb57b2388ccc4bb40ac4cb1226bc9e44", "LD", "V20"],
    ["0x7cc7e125d83a581ff438608490cc0f7bdff79127", "LD2", "V21"],
    ["0x9deabf7815b42bf4e9a03eec35a486ff74ee7459", "LD3", "V22"],
];
exports.tranched = [
    ["0xf86b359035208e4529686a1825f2d5bee38c28a8", "LT3", "V22"],
];
exports.factory = [
    ["0x1a272b596b10f02931480bc7a3617db4a8d154e3", "MSF2", "V21"],
    ["0xf35ab407cf28012ba57caf5ee2f6d6e4420253bc", "MSF3", "V22"],
];
/** PRBProxy registry */
exports.registry = "0x584009e9ede26e212182c9745f5c000191296a78";
/**
 * The initializer contract is used to trigger the indexing of all other contracts.
 * It should be a linear contract, the oldest/first one deployed on this chain.
 * ↪ 🚨 [Protocol] On any new chain, please create a Lockup Linear stream to kick-off the indexing flow
 */
exports.initializer_protocol = exports.linear[0][0];
exports.initializer_merkle = exports.factory[0][0];
