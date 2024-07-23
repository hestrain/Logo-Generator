// exports triangle, circle, and square classes

class Cirlce {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor - shapeColor;
  }

  createTrangle() {
    console.log(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" />
  <circle cx="150" cy="100" r="75" fill=${shapeColor} />
  <text x="150" y="115" font-size="50" text-anchor="middle" fill=${this.textColor}>${text}</text>  
</svg>`);
  }
}

class Triangle { //not done
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor - shapeColor;
  }

  nap() {
    console.log(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <circle cx="150" cy="100" r="75" fill=${shapeColor} />
      <text x="150" y="115" font-size="50" text-anchor="middle" fill=${this.textColor}>${text}</text>  
    </svg>`);
  }
}

class Square { //not done
    constructor(text, textColor, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shapeColor - shapeColor;
    }
  
    nap() {
      console.log(`<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill=${shapeColor} />
        <text x="150" y="115" font-size="50" text-anchor="middle" fill=${this.textColor}>${text}</text>  
      </svg>`);
    }
  }
