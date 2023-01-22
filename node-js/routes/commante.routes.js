const express = require("express");
const app = express();

const commanteRoute = express.Router();
let Commante = require("../model/Commante");

// create Commante
commanteRoute.route("/commante").post((req, res, next) => {
  Commante.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get all Commante
commanteRoute.route("/commante").get((req, res) => {
  Commante.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get Commante
commanteRoute.route("/commante/:id").get((req, res) => {
  Commante.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
// Get Commante by video_id 
commanteRoute.route("/commantebyid/:id").get(function(req, res) {
  Commante.find({video_id: req.params.id},function (error, data){
      res.json(data);
  });
});
// Update Commante
commanteRoute.route("/commante/:id").put((req, res, next) => {
  Commante.findByIdAndUpdate(
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
        console.log("Commante updated successfully!");
      }
    }
  );
});

// Delete Commante
commanteRoute.route("/commante/:id").delete((req, res, next) => {
  Commante.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = commanteRoute;
