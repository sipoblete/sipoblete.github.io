// import io from 'socket.io-client';

// const socket = io('wss://le-18262636.bitzonte.com', {
//   path: '/stocks',
//   forceNew: true 
// });
// console.log(socket);

let socket = new WebSocket("wss://le-18262636.bitzonte.com/stocks");
