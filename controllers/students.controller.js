const { json } = require("express")
const Student = require("../models/student.model")

module.exports.studentsController = { 
    getStudents: (req,res) => {
        Student.find()
        .then((data) => {
            res.json(data)
        })
    },
    createStudents: (req,res) => {
        Student.create({
            name: req.body.name,
            phone: req.body.phone,
            age: req.body.age
        }).then(() => {
            res.json("Студент добавлен")
        })
    },
    deleteStudents: (req, res) => {
        Student.findByIdAndDelete(req.params.id)
        .then(() => {res.json('deleted')})
    },
    updateStudents: (req, res) => {
        Student.findByIdAndUpdate(req.params.id, {name: req.body.name})
        .then(() => {res.json('updated')})
    }
}
