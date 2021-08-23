class Cupcake {
    constructor(icing,batter,cost){
        this.icing = icing
        this.batter = batter
        this.cost = cost 
    }

    price(){
        console.log("You wanted",`${this.cost}`,`${this.batter} cupcake(s) with ${this.icing} icing. Those are $5 each. That brings your total to $`+`${this.cost}` * 5 +'.')
    }
}

const chocoCupcake = new Cupcake('caramel', 'chocolate',3)

chocoCupcake.price()

console.log(chocoCupcake)

console.log(`You wanted ${this.c} ${this.b} cupcake(s) with ${this.i} icing. Those are $5 each. That brings your total to $`+`${this.c}` * 5 +'.')