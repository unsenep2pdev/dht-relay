#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    p: 'port',
    d: 'dht'
  },
  default: {
    port: 25778
  },
  boolean: [
    'dht'
  ]
})

var createRelay = argv.dht ? require('./dht-relay') : require('./proxy').createServer
var port = Number(argv.port) || 25778
var udpProxy = proxy.createServer(port)

console.log('Running on port', port)
