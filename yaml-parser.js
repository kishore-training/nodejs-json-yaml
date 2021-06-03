const fs = require("fs");
const yaml = require('js-yaml');

//read a YAML file using YAML parser in nodejs
function yamlParser() {
    fs.readFile("students.yaml", function(err, data) {
        var students = yaml.load(data)
        console.log(students)
    });
}

if (require.main === module) {
    yamlParser();
}