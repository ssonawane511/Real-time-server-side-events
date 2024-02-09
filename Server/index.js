require("dotenv").config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const config = require('./config');
const morgan = require('morgan');
const logStream = require('./logs');
const compression = require('compression');
const mongodbConnection = require("./db");

const iotRoutes = require("./routes/iot.routes");
const sseRoute = require("./routes/sse.routes");

const { port, origin, hostname } = config;
const app = express();

app.use(morgan('combined', { stream: logStream }))
app.use(helmet());
app.use(cors({
  origin: "*",
  headers: "*",
}));
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(sseRoute);
app.use("/api/iot", iotRoutes);

app.get("/", (req, res) => {
  res.send("Hello IOT!");
});

// start db
mongodbConnection();
app.listen(port, function () {
    console.log('web server listening on port ' + port)
});