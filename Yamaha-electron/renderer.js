// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const {ipcRenderer} = require('electron');

var muteBtn = document.getElementById("mute");
var unMuteBtn = document.getElementById("unMute");

muteBtn.onclick = function(){
    console.log("Hello");
    ipcRenderer.send('mute-on');
};

unMuteBtn.onclick = function(){
    console.log("Hello");
    ipcRenderer.send('mute-off');
};



// BLUETOOTH

var btBtn = document.getElementById("btBtn");
btBtn.onclick = function(){
    console.log("Hi!");

};