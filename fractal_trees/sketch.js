var angle = 0;
var slider;

function setup() {
    createCanvas(window.screen.width, window.screen.height);
    slider = createSlider(0, TWO_PI, PI/4, 0.01);
}

function draw() {
    var width = window.screen.width;
    var height = window.screen.height;
    background(51);
    angle = slider.value();
    var len = 200;
    stroke(255);
    translate(width/2, height);
    branch(len);
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4){
        push();
        rotate(angle);
        branch(0.67*len);
        pop();
        rotate(-angle);
        branch(len*0.67);
    }
}
