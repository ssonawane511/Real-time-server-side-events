const TsData = require("../models/TsData");

const createIotService = async (data) => {
    try {
      const _data = await TsData.create(data);
      return { data: [_data], error: false, message: "success", statusCode: 200 };
    } catch (error) {
      return {
        data: [error],
        error: true,
        message: "Sorry an error occurred",
        statusCode: 500,
      };
    }
  };

  module.exports = { createIotService }