const express = require("express");
const recordRoutes = express.Router();

const dbo = require("../db/connection");
const ObjectId = require("mongodb").ObjectId;

// This section will help you get a single record by id
recordRoutes.route(`/inventoryItems/`).get(function (req, res) {
    console.log("username: "+req.username);
    let db_connect = dbo.getDb();
    let myquery = { Username: "Keiru" };

    // console.log(myquery);
    db_connect
      .collection("Users")
      .findOne(myquery, function(err, result) {
        if (err) throw err;
        res.json(result)
    });
});

module.exports = recordRoutes;