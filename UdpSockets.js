
/**
 * @providesModule UdpSockets
 * @flow
 */

var UdpSocket = require('./UdpSocket');

global.Buffer = global.Buffer || require('buffer').Buffer

exports.createSocket = function(options) {
  if (typeof options === 'string') options = { type: options }
  return new UdpSocket(options)
}

exports.Socket = UdpSocket;
