class Clothing {
    constructor(type, material, size) {
        this.type = type;
        this.material = material;
        this.size = size;
    }
    getDetails(){
        return (`The material of the ${this.type} is ${this.material}.`)
    }
}

let top1 = new Clothing('t-shirt', 'cotton', 'S');
let top2 = new Clothing('blouse', 'satin', 'L');

console.log(top1.type);
console.log(top2.size);
console.log(top1.getDetails());
