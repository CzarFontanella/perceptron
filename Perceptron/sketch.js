let perceptron;

let points = new Array(100);

let trainningIndex = 0;

let erroIndex = -1;

let new_points = new Array(100);

let acertos = new Array(100);

let porcentagem = 0;

function setup(){
    createCanvas(550,550);

    perceptron = new Perceptron(3);

    for (let index = 0; index < points.length; index++) {
        points[index] = new Point(random(-1,1), random(-1,1));

        new_points[index] = new Point(random(-1,1), random(-1,1));
    }

}

function draw(){
    background(255);

    for (let index = 0; index < points.length; index++) {
        points[index].show();
    }

    noStroke();

    for (let index = 0; index < points.length; index++) {
        const point = points[index];

        const inputs = [point.x, point.y, point.bias];
        const target = point.label;
        
        const guess = perceptron.guess(inputs);

        if(guess == target){
            fill("#00FF00");
        }else{
            fill("#FF0000")
        }

        ellipse(point.getPixelX(), point.getPixelY(), 15, 15);
    }

    drawLine();

    console.log(erroIndex);
    console.log(trainningIndex);    
    if(erroIndex != trainningIndex){
        trainSinglePoint();
    }
    else{
        novosGuess();
    }
        
}

function drawLine(){
    stroke(0);

    const p1 = new Point(-1, f(-1));    
    const p2 = new Point(1, f(1));    

    line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());

    const guessP1 = new Point(-1, perceptron.guessY(-1));
    const guessP2 = new Point(1, perceptron.guessY(1));

    stroke("#0000FF");

    line(guessP1.getPixelX(), guessP1.getPixelY(), guessP2.getPixelX(), guessP2.getPixelY());
}

function trainSinglePoint(){
    const point = points[trainningIndex];

    const inputs = [point.x, point.y, point.bias];
    const target = point.label

    perceptron.train(inputs, target);

    trainningIndex++;

    if(trainningIndex == points.length){
        trainningIndex = 0;
    }
 
}

function novosGuess(){

    for (let index = 0; index < new_points.length; index++) {
        const pt = new_points[index];

        const inputs = [pt.x, pt.y,pt.bias];
        const target = pt.label;

        const guess = perceptron.guess(inputs);

        acertos[index] = (guess == target);
    }

    console.log(acertos);

    for (let index = 0; index < array.length; index++)
        if(acertos[index]) porcentagem++;

    console.log("Taxa de acerto: " + porcentagem + "%");
}