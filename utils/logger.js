const bunyan = require('bunyan');
const rfs = require('rotating-file-stream');
const Path = require("path");

const logStream = rfs.createStream('shows-events.log', {
    interval: '1d',
    path: Path.join(__dirname, '../logs')
})

const log = bunyan.createLogger({
    name: "shows-events",
    streams: [
        {
            level: 'debug',
            stream: process.stdout
        },
        {
            level: 'info',
            stream: logStream
        }
    ]
});


module.exports = log;
