const express = require('express');
const router = express.Router();
const Students = require("../models/studentModel")
const mongoose = require('mongoose');

//Create Student

router.post("/addstudent", async (req, res) => {
  try {
    console.log(req.body);
    const studentData = new Students({
      _id: new mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      courses: req.body.courses,
      address: req.body.address
    });
    console.log(studentData);
    const result = await studentData.save();
    res.json(result);
  } catch (error) {
    console.log("error : ", error);
    res.json({ error: "something went wrong!" });
  }
});

// Read Student

router.get("/allStudents", async (req, res) => {
  const studentsData = await Students.find();
  res.json(studentsData);
});

//Updtae Student

router.put("/updateStudent/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const dataToBeUpdate = new Students({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
      courses: req.body.courses,
      address: req.body.address
    });

    const updatedData = await Students.findByIdAndUpdate(studentId, dataToBeUpdate, {
      new: true,
    });
    console.log("updatedData : ", updatedData);

    if (!updatedData) {
      return res.status(404).json({ message: "Student not found!" });
    }

    return res.json({ message: "Student updated successfuly!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Delete student

router.delete("/deleteStudent/:id", async (req, res) => {
  try {
    const studentId = req.params.id;
    const deleteStudent = await Students.findByIdAndRemove(studentId);
    if (!deleteStudent) {
      return res.status(404).json({ message: "Student not found!" });
    }

    return res.json({ message: "Student deleted successfuly!" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = router;