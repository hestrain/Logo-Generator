//import colors
var colors = require("colors/safe");

const { generate } = require("rxjs");

//circle class
class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
//circle's render method
  render() {
    let svgInfo = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>
<text x="150" y="120" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>  
</svg>`;
    return svgInfo;
  }
}

//triangle class
class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
//triangles render method
  render() {
    let svgInfo = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,10 0,200 300,200" fill="${this.shapeColor}"/>
<text x="150" y="160" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>`;
    return svgInfo;
  }
}

//square class
class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
//squares render method
  render() {
    let svgInfo = `
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="190" height="190" x="10" y="10" fill="${this.shapeColor}"/>
<text x="110" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>  
</svg>`;
    return svgInfo;
  }
}

//function to generate the shapes. this is called in index.js
function generateShape(response) {
  //logging to specify which shape i being made
  console.log(colors.bgBrightGreen("We're making a:"));
  //this variable will be returned at the end. it is changed in the cases.
  let data = "";
  //switch for each shape
  switch (response.shape) {
    //triangle
    case "triangle":
      console.log(colors.cyan("triangle"));
      let triangle = new Triangle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      data = triangle.render();
      break;
      //square
    case "square":
      console.log(colors.cyan("Square"));
      let square = new Square(
        response.text,
        response.textColor,
        response.shapeColor
      );
      data = square.render();
      break;
      //circle
    case "circle":
      console.log(colors.cyan("circle"));
      let circle = new Circle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      data = circle.render();
      break;
    default:
      break;
  }
  //return data, which has been filled by the render methods
  return data;
}

//export generateShape for index.js
//exports Triangle, Square, and Circle for testing
module.exports = {
  generateShape, Triangle, Square, Circle,
};
