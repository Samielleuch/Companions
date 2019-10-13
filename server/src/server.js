const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const config = require("./config/config");
const mongoose = require("mongoose");
const app = express();

app.use(logger("dev"));

app.use(cors());
app.use(bodyParser.json());
require("./router/router")(app);

//connecting to MongoDb
mongoose.connect(
  `mongodb+srv://${config.db.dbUser}:${config.db.dbPassword}@${config.db.dbName}-ubg8j.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(config.port, config.hostname, () => {
  console.log(`Server running at http://${config.hostname}:${config.port}/`);
});
