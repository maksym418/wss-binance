const WebSocket = require("ws");

const socket = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade");

socket.on("open", function open() {
  console.log("Connected to Binance WebSocket");
});

socket.on("message", function incoming(data) {
  const trade = JSON.parse(data);
  const price = trade.p; // The price of the last trade
  console.log(`ETH Price: ${price}`);
});

socket.on("close", function close() {
  console.log("Disconnected from Binance WebSocket");
});

socket.on("error", function error(err) {
  console.error("WebSocket error:", err);
});
