"use strict"
var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;

var Account = new Schema({
  uuid : {type : String},
  address : {type : String},
  private_key : {type : String},
  createAt : {type : Date,default : Date.now},
  updateAt : {type : Date}, 
})

var Contracts = new Schema({
  uuid : {type : String},
  net_kind : {type : String},
  owner : {type : String},
  token_name : {type : String},
  address : {type : String},
  abi : {type : String},
  createAt : {type : Date ,default : Date.now},
  updateAt : {type : Date}
})

var Transaction = new Schema({
  net_kind : {type : String},
  data: {type: String},
  value: {type: String},
  sender: {type: String},
  address: {type: String},
  txhash: {type: String},
  state: {type: Number, default: 0},
  receipt: {
    status: Boolean,
    blockHash: String,
    blockNumber: Number,
    transactionIndex: Number,
    cumulativeGasUsed: Number,
    gasUsed:Number,
    logs: [{
      data: String,
      topics: [String],
      logIndex: Number,
    }]
  },
  priority: {type: Number, default: 0},  //交易排序
  createAt: { type: Date, default: Date.now },
})

var NetRpc = new Schema({
  uuid : {type :String},
  rpc:{type : String},
  net_kind : {type : String},
  version : {type : Number},
  createAt : {type : Date ,default : Date.now},
  updateAt : {type : Date},
})
module.exports.Account = mongoose.model('account',Account);
module.exports.Contracts = mongoose.model('contract',Contracts);
module.exports.Transaction = mongoose.model('transaction', Transaction);
module.exports.NetRpc = mongoose.model('netrpc', NetRpc);

mongoose.connect('mongodb://localhost:27017/auto_send', { useNewUrlParser: true, useFindAndModify:false });
mongoose.set('debug', false);
mongoose.set('useCreateIndex', true);

