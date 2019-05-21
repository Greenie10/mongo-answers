const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gardenerSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Gardener", gardenerSchema);
