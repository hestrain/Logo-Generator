const shape = require('../shapes.js');

//test that color input changes the text color
//test that shape input makes all 3 shapes (3 tests)
//test that shape color input changes shape color
//check that you're stopped from making a icon with more than 3 characters



//this is from the readme, i made my guys in different ways.
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');