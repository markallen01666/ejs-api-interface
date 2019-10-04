// delete employee - controller

const Employees = require('../models/Employees.js')

module.exports = async (req, res) => {
  const employees = await Employees.deleteOne({ _id: req.params.id })
    res.redirect("/staff")
}
