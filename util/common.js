const crypto = require('crypto'); 
const ethereum = require('ethereumjs-util')
const UUID = require('uuid');
let uuid = md5(UUID.v1())

function md5(pwd){
	return crypto.createHash('md5').update(String(pwd)).digest("hex")
}
function is_eth_address(address){
	return ethereum.isValidAddress(address);
}
module.exports = {
    md5,
    is_eth_address,
    uuid
}