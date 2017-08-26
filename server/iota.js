import IOTA from 'iota.lib.js'


var iota = new IOTA({
    'host': 'http://localhost',
    'port': 14265
});

// Create IOTA instance directly with provider
var iota = new IOTA({
    'provider': 'http://localhost:14265'
});
