const { get } = require("mongoose");
const Student = require("../models/Student.model.js");
const { post, patch } = require("../routes/studentRout.js");

module.exports.studentControler = {
  getStudent: (req, res) => {
    Student.find().then((data) => {
      res.json(data);
    });
  },

  postStudent: (req, res) => {
    Student.create({
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }).then((info) => {
      res.json(info);
    });
  },

  deleteStudent: (req, res) => {
    Student.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json("Студент удален");
    });
  },

  patchStudent: (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      phone: req.body.phone,
      age: req.body.age,
    }, {new: true})
    .then((patch) => {
      res.json(patch);
    });
  },
};
