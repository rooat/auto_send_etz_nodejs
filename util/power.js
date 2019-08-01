
var Web3 = require('web3');
var web3 = new Web3();

exports.Power = {
    property: 'etz',
    methods: [{
        name: 'getPower',
        call: 'eth_getPower',
        params: 2,
        inputFormatter: [web3.extend.formatters.inputAddressFormatter, web3.extend.formatters.inputDefaultBlockNumberFormatter],
    }]
}
