const winston = require("winston")
require("dotenv").config();
module.exports = function () {
  if (!process.env.db_password) {
    winston.error("Environment variables not set.");
    throw new Error("Environment variables missing.");
  }
  winston.info("Configs are set successfully.");
};