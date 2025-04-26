class Perceptron {
    // Vetor de pesos sinápticos
    weights = [];

    // Taxa de aprendizado
    lr = 0.1;

    constructor(numberWeights){
        // Inicializa o vetor de pesos com o número especificado
        this.weights = new Array(numberWeights);
        for (let index = 0; index < this.weights.length; index++) {
            // Cada peso é inicializado com um valor aleatório entre -1 e 1
            this.weights[index] = random(-1,1);
        }
    }

    // Função que realiza uma predição (chute) baseado nas entradas
    guess(inputs){
        let sum = 0;

        // Calcula o somatório ponderado das entradas pelos pesos
        for (let index = 0; index < this.weights.length; index++) {
            sum += inputs[index] * this.weights[index];
        }

        // Aplica a função de ativação (sinal) para definir a saída
        const output = this.sign(sum);

        return output;
    }

    // Função de treino que ajusta os pesos com base no erro
    train(inputs, target){
        // Faz uma predição com os inputs atuais
        const guess = this.guess(inputs);

        // Calcula o erro: diferença entre valor esperado e valor obtido
        const error = target - guess;

        // Trecho tentando identificar se o treinamento convergiu
        // (erroIndex e trainningIndex precisam ser definidos fora da classe)
        if((error == 0) && (erroIndex == -1)){
            erroIndex = trainningIndex;
        } else {
            erroIndex = -1;
        }

        // Ajusta cada peso proporcionalmente ao erro, entrada e taxa de aprendizado
        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] += error * inputs[index] * this.lr;
        }
    }

    // Função de ativação: retorna 1 se o número for >= 0, caso contrário retorna -1
    sign(number){
        return number >= 0 ? 1 : -1;
    }

    // Função auxiliar para traçar a linha de decisão no espaço 2D
    guessY(x){
        const w0 = this.weights[0]; // Peso associado ao bias (entrada fixa em 1)
        const w1 = this.weights[1]; // Peso associado à coordenada X
        const w2 = this.weights[2]; // Peso associado à coordenada Y

        // Retorna a coordenada Y baseada em X, modelando a equação da reta
        return -(w2/w1) - (w0/w1) * x;
    }
}
