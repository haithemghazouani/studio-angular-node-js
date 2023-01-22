const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Commante = new Schema(
  {
    video_id: {
      type: String,
    },
    text: {
      type: String,
    },
    date:{
      type:String,
    },
  },
  {
    collection: "commantes",
  }
);

module.exports = mongoose.model("Commante", Commante);
