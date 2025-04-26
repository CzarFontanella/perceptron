// Função que define a linha de referência (y = a*x + b)
function f(x){
    const a = 0.3; // Coeficiente angular (inclinação da linha)
    const b = 0.2; // Termo independente (interseção com o eixo Y)

    return a * x + b; // Calcula o valor de y para um dado x
}

// Classe que representa um ponto no plano cartesiano
class Point {
    x = 0; // Coordenada X do ponto
    y = 0; // Coordenada Y do ponto
    bias = 0; // Valor fixo para bias (sempre 1)
    label = 0; // Classe atribuída ao ponto (1 ou -1)

    constructor(x, y){
        // Inicializa as coordenadas do ponto
        this.x = x;
        this.y = y;
        this.bias = 1; // Bias fixo em 1 (necessário para o perceptron)
        this.label = this.getLabel(); // Define a classificação do ponto com base na função f(x)
    }

    // Função que atribui o label do ponto com base em sua posição em relação à linha f(x)
    getLabel(){
        const lineY = f(this.x); // Calcula o y da linha para o x atual

        // Se o y do ponto estiver acima da linha, classifica como 1; se abaixo, -1
        if(this.y > lineY){
            return 1;
        } else {
            return -1;
        }
    }

    // Converte a coordenada X do espaço cartesiano (-1 a 1) para coordenada de pixel (0 a width)
    getPixelX(){
        const px = map(this.x, -1, 1, 0, width);
        return px;
    }

    // Converte a coordenada Y do espaço cartesiano (-1 a 1) para coordenada de pixel (0 a height)
    getPixelY(){
        const py = map(this.y, -1, 1, height, 0); // O eixo Y é invertido para o canvas
        return py;
    }

    // Função para desenhar o ponto na tela
    show(){
        stroke(0); // Cor da borda do ponto

        // Define a cor de preenchimento com base no label
        if(this.label === 1){
            fill('#000000'); // Preto para label 1
        } else {
            fill('#FFFFFF'); // Branco para label -1
        }

        // Obtém as posições em pixels
        const px = this.getPixelX();
        const py = this.getPixelY();

        // Desenha um círculo (elipse) representando o ponto
        ellipse(px, py, 22, 22);
    }

    // Função para imprimir informações do ponto no console (para depuração)
    debug(){
        console.log(`label: ${this.label} - x: ${this.x} - y ${this.y}`);
    }
}
