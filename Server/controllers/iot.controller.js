const { createIotService } = require("../services/iot.service");
const sse = require("../sse");

const createIotController = async(req, res) => {
    const body = req.body;
    const result = await createIotService(body);
    res.status(result.statusCode).json(result);
    if (!result.error) {
      //   emit post event
      sse.send(result.data[0], "iot-pub");
    }
}
module.exports = { createIotController }