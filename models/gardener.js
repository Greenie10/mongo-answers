const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gardenerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  initials: {
    type: String,
    required: true
  },
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: "Event"
    }
  ]
});

module.exports = mongoose.model("Gardener", gardenerSchema);
