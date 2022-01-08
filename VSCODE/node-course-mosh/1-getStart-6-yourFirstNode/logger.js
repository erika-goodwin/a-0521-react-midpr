const EventEmitter = require("events"); //Class: defines what an EventEmitter can do

var url = "http://mylogger,io/log";

class Logger extends EventEmitter {
  // Function (log) inside of class  => Method (no need to write 'function' anymore)
  log(message) {
    //send an HTTP request
    console.log(message);

    //Raise an Event
    this.emit("messageLogged", { id: 1, url: "http://" });
  }
}

module.exports = Logger;
