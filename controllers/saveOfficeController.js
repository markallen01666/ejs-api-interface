// store new office data in database - controller

const Offices = require("../models/Offices.js");

module.exports = async (req, res) => {
   await Offices.create({
     office: req.body.office,
     building: req.body.building,
     number: req.body.number,
     street: req.body.street,
     town: req.body.town,
     postcode: req.body.postcode
   });
   res.redirect("/offices");
};
