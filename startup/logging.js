const winston = require("winston")
winston.add(new winston.transports.Console());
module.exports = function () {
    winston.exceptions.handle(new winston.transports.Console());
    winston.rejections.handle(new winston.transports.Console());
};