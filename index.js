// packages needed for this application
var inquirer = require("inquirer");
var colors = require("colors");
const generate = require("./lib/shapes.js");
const fs = require("fs");
const { log } = require("console");

// array of questions for user input
const questions = {
  text: "Please enter 1-3 characters of text",
  textColor: "Please enter a color name or a hexadecimal number for your text",
  shape: "Please choose a shape:",
  shapeColor: "Please enter a color name or a hexadecimal number for your shape",
};

//function to write svg file
function createSVG(response) {
//calls generate shape function
 let svg = generate.generateShape(response);
 //log to check
 console.log(svg);
 //create the svg file with the returned value from generateShape
 fs.writeFile("icon.svg", svg, (error) => {
    //or log an error if not
    if (error) {
      console.log(error);
    } else {
    //success message
      console.log(colors.bgGreen("Generated logo.svg"));
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
        //text input
        type: "input",
        message: questions.text,
        name: "text",
        //validation to make sure text input is 3 or fewer characters
        validate: (userInput) => {
          if (userInput.length > 3) {
            //will give you the ability to delete and rewrite answer
            return ("Please only enter up to 3 characters.");
          } else {
            return true;
          }
        }
    },
      {
        //text color input
        type: "input",
        message: questions.textColor,
        name: "textColor",
      },
      {
        //shape input
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
        //shape color input
        type: "input",
        message: questions.shapeColor,
        name: "shapeColor",
      },
    ])
    .then((response) => {

      //logs the response input back to the user
      console.log(colors.bgWhite(`We will make you a ${response.shapeColor} ${response.shape} that says ${response.text} in ${response.textColor}`));
      //calls shape creation
      createSVG(response);
        
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
