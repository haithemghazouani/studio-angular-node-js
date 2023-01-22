const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Video = new Schema(
  {
    title: {
      type: String,
    },
    thumbnail: {
      type: String,
    },
    url: {
      type: String,
    },
    visibility:{
      type:String,
    },
    date:{
      type:String,
    },
  },
  {
    collection: "videos",
  }
);

module.exports = mongoose.model("Video", Video);
