import  openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function connected() {
    socket.emit('connected');
}

function sendStreet(id, street) {
    console.log(id, street);
    socket.emit('sendingStreet', id, street);
}

function getStreets(callback){
    socket.emit('checkingStreets', 1000);
    socket.on('returningStreets', allStreets => callback(null, allStreets));
}

export {connected, sendStreet, getStreets}