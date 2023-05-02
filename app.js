//THIS CODE WAS REFERENCED FROM GITHUB

var http = require('http');
var fs = require('fs');
var index = fs.readFileSync( 'sketch.js');

var SerialPort = require('serialport');
const parsers = SerialPort.parsers;


const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var port = new SerialPort("\Device\Serial3", {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

io.on("connection", (socket) => {
    console.log("a user connected");
    // Code to run every time we get a message from P5.JS
    socket.on("message", (_msg) => {
      // Save it to our Function
      webToArd = _msg;
      // Print it to the Console
      if (printEveryMessage == 1) {
        console.log(_msg);
      }
    });
  });

port.pipe(parser);

var io = require('socket.io').listen(app);

io.on('connection', function(socket) {
    
    console.log('Node is listening to port');

});
parser.on('data', function(data) {

    console.log('Received data from port: ' + data);
    
    io.emit('data', data);
    
});

app.listen(3000);
