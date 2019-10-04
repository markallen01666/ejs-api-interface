// edit office - controller

const Offices = require('../models/Offices.js')

module.exports = async (req, res) => {
  const id = req.params.id
  const office = await Offices.findById(id)
    res.render("editOffice", {
      dbId: id,
      office
    })
}
