var dgram = require("dgram"),
    server = dgram.createSocket("udp4");

var log4js = require("log4js"),
    logger = log4js.getLogger();

var serverAddress = process.env.address || "127.0.0.1",
    serverPort = process.env.port || 80;

server.on("listening", function () {
    var address = server.address();
    logger.info("log4js listening on " + address.address + ":" + address.port);
});

server.on("message", function (message, remote) {
    message = JSON.parse(message);
    logger[message.fields.level.toLowerCase()](message.message);
});

server.bind(80);