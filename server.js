var dgram = require("dgram"),
    server = dgram.createSocket("udp4");

var log4js = require("log4js"),
    logger = log4js.getLogger();

var serverAddress = process.env.log4jsAddress || "127.0.0.1",
    serverPort = process.env.log4jsPort || 8080;

server.on("listening", function () {
    var address = server.address();
    logger.info("log4js listening on " + address.address + ":" + address.port);
});

server.on("error", function (err) {
    logger.error("server error:\n" + err.stack);
    server.close();
});

server.on("message", function (message, remote) {
    message = JSON.parse(message);
    logger[message.fields.level.toLowerCase()](message.message);
});

server.bind(serverPort, serverAddress);