# log4js-UDPviewer
A simpel application written in NODE JS to display incoming UDP message from [log4js-node](https://github.com/nomiddlename/log4js-node)
## Start
```
npm start
```
## Example [logstashUDP.js](https://github.com/nomiddlename/log4js-node/blob/master/examples/logstashUDP.js)
```javascript
var log4js = require('log4js');

/*
 Sample logstash config:
   udp {
    codec => json
    port => 10001
    queue_size => 2
    workers => 2
    type => myAppType
  }
*/

log4js.configure({
  "appenders": [
    {
      type: "console",
      category: "myLogger"
    },
    {
      "host": "127.0.0.1",
      "port": 10001,
      "type": "logstashUDP",
      "logType": "myAppType", // Optional, defaults to 'category'
      "fields": {             // Optional, will be added to the 'fields' object in logstash
        "field1": "value1",
        "field2": "value2"
      },
      "layout": {
        "type": "pattern",
        "pattern": "%m"
      },
      "category": "myLogger"
    }
  ]
});

var logger = log4js.getLogger("myLogger");
logger.info("Test log message %s", "arg1", "arg2");
````
## Copyright and license

Code and documentation copyright 2015 [Krister Johansson](https://github.com/fotoKrille). Code released under [the MIT license](https://github.com/fotoKrille/log4js-UDPviewer/blob/master/LICENSE).