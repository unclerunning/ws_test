const WebSocket = require('ws');

const wss = new WebSocket.Server({
  port: 3000
});

wss.on('connection', (ws, request) => {

  ws.isAlive = true;
  ws.on('pong', _ => {
    console.log('onpong');
    ws.isAlive = true;
  });

  const interval = setInterval(function ping() {
    if (ws.isAlive === false) {
      console.log(`socket : timeout.`);
      ws.terminate();
      return
    }

    ws.isAlive = false;
    console.log('ping');
    ws.ping();
  }, 30000); // 30s
});