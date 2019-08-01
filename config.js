var Web3 = require('web3');
//var net = require('net');
var web3 = new Web3("http://etzrpc.org");
var {Power} = require('./util/power');
web3.extend(Power)

var {Account,Contracts,Transaction,NetRpc} = require('./db');
var Common = require('./util/common')
module.exports ={
    web3,
    Account,
    Contracts,
    Transaction,
    NetRpc,
    Common
}