const {Triangle, Circle, Square} = require("./shapes");

//test that color input changes the text color
//test that shape input makes all 3 shapes (3 tests)
//check that you're stopped from making a icon with more than 3 characters

describe("Shape Colors", () => {
//test that shape color input changes shape color on all 3 shapes
  //check if shape color attaches properly on triangle
  describe("initialize shape color on Triangle", () => {
    it("should set shapeColor to blue", () => {
      let color = "blue";
      const shape = new Triangle("", "", color);
      expect(shape.render())
        .toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,10 0,200 300,200" fill="blue"/>
<text x="150" y="160" font-size="70" text-anchor="middle" fill=""></text>
</svg>`);
    });
  });
  //check if shape color attaches properly on cirlce
  describe("initialize shape color on Circle", () => {
    it("should set shapeColor to blue", () => {
      let color = "blue";
      const shape = new Circle("", "", color);
      expect(shape.render()).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="blue"/>
<text x="150" y="120" font-size="70" text-anchor="middle" fill=""></text>  
</svg>`);
    });
  });

  //check if shape color attaches properly on square
  describe("initialize shape color on Square", () => {
    it("should set shapeColor to blue", () => {
      let color = "blue";
      const shape = new Square("", "", color);
      expect(shape.render()).toEqual(`
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="190" height="190" x="10" y="10" fill="blue"/>
<text x="110" y="125" font-size="70" text-anchor="middle" fill=""></text>  
</svg>`);
    });
  });
});

describe("Text Color", () => {
  //test that text color input changes shape color on all 3 shapes
    //check if text color attaches properly on triangle
    describe("initialize text color on Triangle", () => {
      it("should set textColor to blue", () => {
        let color = "blue";
        let text = "tst";
        const shape = new Triangle(text, color, "");
        expect(shape.render())
          .toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<polygon points="150,10 0,200 300,200" fill=""/>
<text x="150" y="160" font-size="70" text-anchor="middle" fill="blue">tst</text>
</svg>`);
      });
    });
    //check if text color attaches properly on cirlce
    describe("initialize text color on Circle", () => {
      it("should set textColor to blue", () => {
        let color = "blue";
        let text = "tst";
        const shape = new Circle(text, color, "");
        expect(shape.render()).toEqual(`
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill=""/>
<text x="150" y="120" font-size="70" text-anchor="middle" fill="blue">tst</text>  
</svg>`);
      });
    });
  
    //check if text color attaches properly on square
    describe("initialize text color on Square", () => {
      it("should set textColor to blue", () => {
        let color = "blue";
        let text = "tst";
        const shape = new Square(text, color, "");
        expect(shape.render()).toEqual(`
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
<rect width="190" height="190" x="10" y="10" fill=""/>
<text x="110" y="125" font-size="70" text-anchor="middle" fill="blue">tst</text>  
</svg>`);
      });
    });
  });
