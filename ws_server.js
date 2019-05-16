const WebSocket = require('ws');
const Heartbeat = require('./heartbeat');

const wss = new WebSocket.Server({
  port: 3000
});

wss.on('connection', (ws, request) => {

  Heartbeat.addHeartbeat(ws, 30000, (time) => {
    console.log(`socket lost, time: ${time}s`);
  });

});