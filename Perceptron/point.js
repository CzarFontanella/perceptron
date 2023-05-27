function f(x){
    //y = mx + b

    const a = 0.3;
    const b = 0.2;

    return a * x + b;
}

class Point {
    x = 0;
    y = 0;
    bias = 0;
    label = 0;

    constructor(x, y){
        this.x = x;
        this.y = y;
        this.bias = 1;
        this.label = this.getLabel();
    }

    getLabel(){
        const lineY = f(this.x);

        if(this.y > lineY){
            return 1;
        } else {
            return -1;
        }
    }

    getPixelX(){
        const px = map(this.x, -1, 1, 0, width);
        return px;
    }

    getPixelY(){
        const py = map(this.y, -1, 1, height, 0);
        return py;
    }

    show(){
            stroke(0);

            if(this.label === 1){
                fill('#000000');
            } else {
                fill('#FFFFFF');
            }

            const px = this.getPixelX();
            const py = this.getPixelY();

            ellipse(px, py, 22, 22);
    }

    debug(){
        console.log(`label: ${this.label} - x: ${this.x} - y ${this.y}`);
    }

}