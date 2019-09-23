/**
 * MetaMask Support
 *  |\_/|,,_____,~~`
 *  (.".)~~     )`~}}
 *   \o/\ /---~\\ ~}}
 *     _//    _// ~}
 * 
 * Copyright (c) 2019 MPL,jnaruto
 * E-mail :jnaruto168@gmail.com
 * git@naruto:minipaylab/token-demo-dapp.git
 *
 */

var ContractManager = require('../../../src/lib/utils/json-sync-loader.js');

console.log(">>",ContractManager.validInit());
ContractManager.init(true);
console.log(">>",ContractManager.validInit()); 