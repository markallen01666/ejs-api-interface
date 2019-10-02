// Return offices data as JSON

const Offices = require('../models/Offices.js')

module.exports = async (req, res) => {
  const offices = await Offices.find({})
  res.render("offices", {
    offices
  })
}

