var config = require('./config')
var abi = require('./config/abi.json');
var contract_add = "0xd743c5933d9c297fd9a1ceb2cfd258c53a8bf7c1";
var sender = "0x65E7801bd4b036081dAE9280Ec1b156b39d11Af5"
var private_key = "xxx" 
var net_kind = "etz";
var rpc = "http://etzrpc.org"

async function init_abi(){
    let contract_obj = await config.Contracts.findOne({"address":contract_add}).exec();
    if(!contract_obj) {
        var abi_json = JSON.stringify(abi);
        await config.Contracts({
            "uuid" : config.Common.uuid,
            "net_kind" : "etz",
            "owner" : sender.toLocaleLowerCase(),
            "token_name" : "dos",
            "address":contract_add.toLocaleLowerCase(),
            "abi":abi_json
          }).save()
    }
} 
async function init_account(){
    let account = await config.Account.findOne({"address":sender.toLocaleLowerCase()}).exec();
    if(!account){
        await config.Account({
            "uuid": config.Common.uuid,
            "address":sender.toLocaleLowerCase(),
            "private_key":private_key
          }).save()
    }
}
async function init_rpc(){
    let netrpc = await config.NetRpc.findOne({"net_kind":net_kind}).exec();
    if(!netrpc){
        await config.NetRpc({
            "uuid" :config.Common.uuid,
            "rpc":rpc,
            "net_kind" : "etz",
            "version" : 0,
          }).save()
    }
}
init_account()
init_abi()
init_rpc()