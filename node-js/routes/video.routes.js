const express = require("express");
const app = express();

const videoRoute = express.Router();
let Video = require("../model/Video");

// create Video
videoRoute.route("/video").post((req, res, next) => {
  Video.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Video
videoRoute.route("/video").get((req, res) => {
  Video.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Video
videoRoute.route("/video/:id").get((req, res) => {
  Video.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Update Video
videoRoute.route("/video/:id").put((req, res, next) => {
  Video.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error);
        console.log(error);
      } else {
        res.json(data);
        console.log("Video updated successfully!");
      }
    }
  );
});

// Delete Video
videoRoute.route("/video/:id").delete((req, res, next) => {
  Video.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = videoRoute;
