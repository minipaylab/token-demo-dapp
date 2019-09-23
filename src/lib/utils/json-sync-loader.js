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
'use strict';

var ContractManager = {
	initialize:false,
	init:(opts,addressPairs)=>{
		if(typeof === 'object'){
			_parseContractJson(opts);
		}
		if(typeof addressPairs ==='object'){
			_loadAddressPairs(addressPairs);
		}

		if(!this.initialize){
			console.error('initialize ContractManager Failure');
			return;
		}
	},
	validInit:()=> {
		if(!this.initialize){
			console.log("ContractManager Need initialize");
			return false;
		}
		return true;
	},
	getContract:(id)=>{
		if(!this.initialize)return false;
		return ContractManager[id] || false;
	},
	containContract:(id) => {
		if(!this.initialize)return false;
		return ContractManager[id] ? true : false;
	},
	setContractAddress:(id,address) => {
		if(!this.initialize)return;
		if(ContractManager[id]){
			ContractManager[id]['address'] = address;
		}
	}
};

function _parseContractJson(json){
	let keys = Obkect.keys(json);
	let loadFlag = false;
	keys.forEach(item=>{
		if(typeof item ==='string' && typeof json[item] === 'object'){
			ContractManager[item+''] = json[item];
			loadFlag = true;
		}
	});
	return loadFlag;
}

function _loadAddressPairs(addressPairs){
	if(typeof addressPairs !=='object' 
		|| !addressPairs.length )return;

		addressPairs.forEach(pair => {
			if(typeof pair === 'string' 
				&& pair.indesOf(':') != -1 
				&& pair.split(':').length > 1){
				let kvs = pair.split(':');
				ContractManager.setContractAddress(kvs[0],kvs[1]);
			}			
		});
}


module.exports = ContractManager;