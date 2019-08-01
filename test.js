var config = require('./config')
var abi = require('./config/abi.json')
var sender = "0x65E7801bd4b036081dAE9280Ec1b156b39d11Af5"
var contract_add = "0xd743c5933d9c297fd9a1ceb2cfd258c53a8bf7c1"
async function test_tx(contract){
  let contract_obj = await config.Contracts.findOne({"address":contract});
  if(contract_obj){
    let abi_json = JSON.parse(contract_obj.abi);
    let instanceToken =new config.web3.eth.Contract(abi_json,contract);
    let rand = parseInt(Math.random()*10000)
    console.log("rand==",rand)
    let data= await instanceToken.methods.transfer("0x23e48fd0f704309ED6D7c7A57CdF45625C09AFe3",rand).encodeABI();

    await config.Transaction({
        "net_kind" : "etz",
        "sender":sender.toLocaleLowerCase(),
        "address":contract,
        "data":data
      }).save()
  }
  

}
test_tx(contract_add.toLocaleLowerCase())

