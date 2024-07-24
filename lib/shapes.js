var colors = require("colors/safe");

// exports triangle, circle, and square classes

const { generate } = require("rxjs");
class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  createCircle() {
    let svgInfo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="150" cy="100" r="100"  fill=${this.shapeColor} />
    <text x="150" y="120" font-size="70" text-anchor="middle" fill=${this.textColor}>${this.text}</text>  
    </svg>`;
    return svgInfo;
  }
}

class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  createTriangle() {
    let svgInfo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,10 0,200 300,200" style="fill:${this.shapeColor};" />
    <text x="150" y="160" font-size="70" text-anchor="middle" fill=${this.textColor}>${this.text}</text>
    </svg>`;
    return svgInfo;
  }
}

class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }

  createSquare() {
    let svgInfo = `
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <rect width="190" height="190" x="10" y="10" fill=${this.shapeColor} />
    <text x="110" y="125" font-size="70" text-anchor="middle" fill=${this.textColor}>${this.text}</text>  
    </svg>`;
    return svgInfo;
  }
}

function generateShape(response) {
  console.log(colors.bgBrightGreen("We're making a:"));
  let data = "";
  switch (response.shape) {
    case "triangle":
      console.log(colors.cyan("triangle"));
      let triangle = new Triangle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      data = triangle.createTriangle();
      break;
    case "square":
      console.log(colors.cyan("Square"));
      let square = new Square(
        response.text,
        response.textColor,
        response.shapeColor
      );
      data = square.createSquare();
      break;
    case "circle":
      console.log(colors.cyan("circle"));
      let circle = new Circle(
        response.text,
        response.textColor,
        response.shapeColor
      );
      data = circle.createCircle();
      break;
    default:
      break;
  }
  return data;
}

module.exports = {
  generateShape,
};
