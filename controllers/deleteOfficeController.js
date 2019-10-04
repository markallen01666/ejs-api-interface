// delete office - controller

const Offices = require('../models/Offices.js')

module.exports = async (req, res) => {
  const office = await Offices.deleteOne({ _id: req.params.id })
    res.redirect("/offices")
}
