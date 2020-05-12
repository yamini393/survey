var canvas;
var form;

function setup(){
  canvas = createCanvas(1800,1600);
  database = firebase.database()
  form = new Form()
}

function draw(){
  background ("lawngreen")
  form.display()
}
