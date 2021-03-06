// update office data in database - controller

const Offices = require("../models/Offices.js");

module.exports = async (req, res) => {
   await Offices.findByIdAndUpdate(req.params.id, {
     office: req.body.office,
     building: req.body.building,
     number: req.body.number,
     street: req.body.street,
     town: req.body.town,
     postcode: req.body.postcode
   });
   res.redirect("/offices");
};
