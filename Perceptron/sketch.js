let perceptron; // Instância do perceptron

let points = new Array(100); // Array de pontos para treinamento

let trainningIndex = 0; // Índice do ponto atual de treinamento

let erroIndex = -1; // Índice que guarda quando não há mais erro (controle de convergência)

let new_points = new Array(100); // Array de novos pontos para testar a acurácia depois do treinamento

let acertos = new Array(100); // Array para guardar se os novos pontos foram classificados corretamente

let porcentagem = 0; // Variável para calcular a porcentagem de acertos

function setup(){
    createCanvas(550,550); // Cria o espaço de desenho (canvas)

    perceptron = new Perceptron(3); // Cria o perceptron com 3 entradas (x, y e bias)

    // Gera 100 pontos aleatórios para treinamento e 100 pontos para teste
    for (let index = 0; index < points.length; index++) {
        points[index] = new Point(random(-1,1), random(-1,1));
        new_points[index] = new Point(random(-1,1), random(-1,1));
    }
}

function draw(){
    background(255); // Define o fundo branco a cada frame

    // Mostra todos os pontos de treinamento na tela
    for (let index = 0; index < points.length; index++) {
        points[index].show();
    }

    noStroke(); // Remove a borda das elipses de feedback (acerto/erro)

    // Para cada ponto, faz um chute e desenha em verde se acertou ou vermelho se errou
    for (let index = 0; index < points.length; index++) {
        const point = points[index];

        const inputs = [point.x, point.y, point.bias];
        const target = point.label;
        
        const guess = perceptron.guess(inputs);

        if(guess == target){
            fill("#00FF00"); // Verde se acertou
        }else{
            fill("#FF0000"); // Vermelho se errou
        }

        ellipse(point.getPixelX(), point.getPixelY(), 15, 15); // Desenha um círculo pequeno para indicar o resultado
    }

    drawLine(); // Desenha as linhas (a real e a aprendida pelo perceptron)

    console.log(erroIndex);
    console.log(trainningIndex);    

    // Continua treinando enquanto não convergir
    if(erroIndex != trainningIndex){
        trainSinglePoint(); // Treina ponto a ponto
    }
    else{
        novosGuess(); // Se convergiu, testa novos pontos
    }
}

function drawLine(){
    stroke(0); // Linha preta para a função real

    // Cria dois pontos extremos para desenhar a linha real (f(x))
    const p1 = new Point(-1, f(-1));    
    const p2 = new Point(1, f(1));    

    line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());

    // Cria dois pontos usando a linha aprendida pelo perceptron
    const guessP1 = new Point(-1, perceptron.guessY(-1));
    const guessP2 = new Point(1, perceptron.guessY(1));

    stroke("#0000FF"); // Linha azul para a linha que o perceptron está tentando aprender

    line(guessP1.getPixelX(), guessP1.getPixelY(), guessP2.getPixelX(), guessP2.getPixelY());
}

function trainSinglePoint(){
    const point = points[trainningIndex]; // Pega o ponto atual para treinar

    const inputs = [point.x, point.y, point.bias];
    const target = point.label;

    perceptron.train(inputs, target); // Treina o perceptron com esse ponto

    trainningIndex++; // Passa para o próximo ponto

    if(trainningIndex == points.length){
        trainningIndex = 0; // Se chegou no final da lista, reinicia o índice
    }
}

function novosGuess(){
    // Testa o perceptron em novos pontos aleatórios
    for (let index = 0; index < new_points.length; index++) {
        const pt = new_points[index];

        const inputs = [pt.x, pt.y, pt.bias];
        const target = pt.label;

        const guess = perceptron.guess(inputs);

        acertos[index] = (guess == target); // Armazena true se acertou, false se errou
    }

    console.log(acertos); // Mostra os resultados de acertos no console
    
    for (let index = 0; index < acertos.length; index++){
        if(acertos[index]) porcentagem++;
    }

    console.log("Taxa de acerto: " + porcentagem + "%");
}
