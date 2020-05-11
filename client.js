import io from "socket.io-client";

console.log("Antes de la conexion")
const socket = io("wss://le-18262636.bitzonte.com", {
  path: "/stocks"
});
console.log("Despues de la conexion")
console.log(socket);

// let socket = new WebSocket("wss://le-18262636.bitzonte.com/stocks");
