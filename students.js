const express = require('express')
const fs = require("fs");
const app = express()
const port = 3000

let bodyParser = require('body-parser');
app.use(bodyParser.json());

let products = [];

app.listen(port, () => console.log(`Example  Students Service listening on port ${port}!`));

//Rest Service to get the list of students for a specific course and return it
app.get('/student/:course', function(req, res) {

    let allStudents= null;
    let studentsEnrolledForCourse = null;
    //Read All Students across all courses from the database
    fs.readFile("database/students.json", function(err, data) {

        // Check for errors
        if (err) throw err;
        const courseName = req.params.course;
        // Converting to Student object
        allStudents = JSON.parse(data);

        //filter to get list of students for the course name
        studentsEnrolledForCourse = (allStudents.courses.filter((x) => x.name=== courseName))
        //Send the list of students for the course in the response as a JSON.
        res.json(studentsEnrolledForCourse[0].Student);

    });
});

