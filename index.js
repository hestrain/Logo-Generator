// packages needed for this application
var inquirer = require("inquirer");
var colors = require("colors");
const generate = require("./lib/shapes.js");
const fs = require("fs");
const { log } = require("console");
let fileName = "logo.svg"

// array of questions for user input
const questions = {
  text: "Please enter 1-3 characters of text",
  textColor: "Please enter a color name or a hexadecimal number for your text",
  shape: "Please choose a shape:",
  shapeColor: "Please enter a color name or a hexadecimal number for your shape",
};

//function to write README file
function createSVG(response) {

 let svg = generate.generateShape(response);
 console.log(svg);
 fs.writeFile("icon.svg", svg, (error) => {
    //or log an error if not
    if (error) {
      console.log(error);
    } else {
      console.log(colors.bgGreen("icon maker success"));
    }
  });

}

// function to initialize app
function init() {
     };
  inquirer
    .prompt([
      //all the questions are below
      {
        type: "input",
        message: questions.text,
        name: "text",
        // validate: ,
    },
      {
        type: "input",
        message: questions.textColor,
        name: "textColor",
      },
      {
        type: "list",
        message: questions.shape,
        name: "shape",
        choices: [
            "circle",
            "square",
            "triangle"
          ],
      },
      {
        type: "input",
        message: questions.shapeColor,
        name: "shapeColor",
      },
    ])
    .then((response) => {
        if (response.text.length > 3) {
           console.log(colors.red( "Please only enter 1-3 characters of text. Try again!"));
        } else{
            console.log(colors.bgWhite(`We will make you a ${response.shapeColor} ${response.shape} that says ${response.text} in ${response.textColor}`));
            createSVG(response);
        }
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log(error);
      } else {
        // Something else went wrong
        console.log(error);
      }
    });


// Function call to initialize app
init();
