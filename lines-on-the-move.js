var x = []; 
var y = [];

function setup() {
  createCanvas(400, 400);
	colorMode(HSB, width, height, 100);
}

function draw() {
  background(220);
	x.push(random(width)); 
  y.push(random(height));

	for(var i = 0; i < x.length; i++) {
    stroke(x[i], y[i], 100);
		point(x[i], y[i]);
}

}
