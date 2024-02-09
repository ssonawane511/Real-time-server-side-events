const mongoose = require("mongoose");

const TsDataSchema = new mongoose.Schema(
  {
    deviceId: { type: String, required: true },
    data: { type: String, required: true },
  },
  { timestamps: true }
);
const TsData = mongoose.model("tsData", TsDataSchema);

module.exports = TsData;
