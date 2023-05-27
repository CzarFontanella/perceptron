class Perceptron {
    weights = [];

    lr = 0.1;

    constructor(numberWeights){
        this.weights = new Array(numberWeights);
        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] = random(-1,1);
        }
    }

    guess(inputs){
        let sum = 0;

        for (let index = 0; index < this.weights.length; index++) {
            sum += inputs[index] * this.weights[index];
        }

        const output = this.sign(sum);

        return output;
    }

    train(inputs, target){
        const guess = this.guess(inputs);

        const error = target - guess;

        if((error == 0) && (erroIndex == -1)){
            erroIndex = trainningIndex;
        }else{
            erroIndex = -1;
        }

        for (let index = 0; index < this.weights.length; index++) {
            this.weights[index] += error * inputs[index] * this.lr;
        }
    }

    sign(number){
        return number >= 0 ? 1 : -1;
    }

    guessY(x){
        const w0 = this.weights[0];
        const w1 = this.weights[1];
        const w2 = this.weights[2];

        return -(w2/w1) - (w0/w1) * x;

    }


}