// edit employee - controller

const Employees = require('../models/Employees.js')

module.exports = async (req, res) => {
  const id = req.params.id
  const employee = await Employees.findById(id)
    res.render("editEmployee", {
      dbId: id,
      employee
    })
};
