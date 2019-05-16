const WebSocket = require('ws');
const Heartbeat = require('./heartbeat');

ws = new WebSocket('ws://192.168.1.21:3000', {
  rejectUnauthorized: false
});

ws.onerror = (e) => {
  console.error('onerror', e);
}

ws.onclose = (e) => {
  console.log(`onclose, ${e.code}:${e.reason}`);
}

ws.on("open", () => {
  console.log('onopen');

  Heartbeat.addHeartbeat(ws, 30000, () => {
    console.log('socket lost');
  });

});