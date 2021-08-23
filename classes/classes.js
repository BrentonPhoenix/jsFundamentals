/*
    CLASSES

    -Classes can be defined by either expression or declaration
    -Classes are functions 

    -classes act as blueprints for creating objects that share methods and properties.
    Using this blueprint creates different "instances" of that class, and each object 
    will have different values for the same properties they hold.

    -body of the class will be written between {}

    -Constructor method is a special method for creating and initializing an object
    that was created with a class.
    -can use the 'super' keyword
    -super keyword is used to access and call functions from a parent class

    -Introduced in ES5 
    -new way to write previous existing prototype-based inheritance
    -Closest thing in vanilla JS to OPP (object oriented programming)
*/



/*
-----------------------------CLASS DECLARATION-------------------------------
*/

class Automobile {
    //start writing my class here
    constructor(make, model){
        //set the current instance of Automobile's make property to the parameter value of make
        this.make = make
        this.model = model
        
    }
}
//Hoisting: Unlike function declarations, class declarations are not hoisted, a class declaration must
//be declared before accessing it


/*
    CLASS EXPRESSION

    -can be named or not named
    -the name given to an unnamed class expression is local to the class' body
        -the name of a named class can be retrieved through the class' name property

*/


//unnamed:
let Vehicle = class {
    constructor(make,model){
        this.make = make
        this.model = model
    }
}//when we do not give our class a name the name will be the variable we assign it to 
console.log(Vehicle.name)

//named:
let Auto = class Mobile{
    constructor(make,model){
        this.make = make
        this.model = model
    }
}
//Mobile is the name of the class even if we reference it with Auto

/*
    METHODS

    -Functions that are passed into all instances of a class
*/

// Method Definition: OLDSYNTAX
const automobile = {
    start: function(){
        //do stuff here
    },
    stop: function(){
            //do more stuff here
    }
}

//Prototype Method: NEW SYNTAX
const automobile = {
    start(){
        //do stuff here
    },
    stop() {
        //do more stuff here
    }
}

class AutoMobile {
    constructor(make,model){
        this.make = make
        this.model = model
    }

    //Method 1
    start() {
        console.log(`This ${this.make} ${this.model}'s engine started.`)
    }

    //Method 2
    stop(){
        console.log(`This ${this.make} ${this.model}'s engine stopped.`)
    }
}

/*
---------------NEW INSTANCES---------------------------------------------------------------------

    -using the 'new' keyword, we can create a new object/instance of a class
*/

let hondaCivic = new AutoMobile('Honda', "Civic")
console.log(`The ${hondaCivic.make} ${hondaCivic.model}'s variable gave us this info`)

//name of variable.nameOfMethod()
hondaCivic.start()


let fordEscape = new AutoMobile('ford', 'escape')
fordEscape.start()
hondaCivic.stop()
//these are two completely seperate objects


/*
    CONSTRUCTOR METHOD

    -helps create and initialize an object created from a class
    -works along with the 'new' keyword

    -needs to be included to create new objects and instances of our class
        -set properties
        -passes values for properties
*/

class Cookie {
    //the parameters will be placeholders for values we want to be passed and stored in the object
    constructor(type, icing, shape){
        this.t = type
        this.i = icing
        this.s = shape
        //the names dont have to match
        //left side: declaring keys for values we will pass on 
            //right side: assigning our passed values onto the keys
        //the left side stores values for 'this' specific object being created
    }
}

let chocolateChipCookie = new Cookie('chocolate chip', false, 'star')

console.log(chocolateChipCookie.t)
console.log(chocolateChipCookie.i)
console.log(chocolateChipCookie.s)


console.log(chocolateChipCookie)

/*
    EXTENDS

    -a keyword used in class declarations/expressions to create a new child class
    
    CHILD CLASS
    -each new class created inherits the properties and methods from the parent class
    -can also have it's own methods and properties
    -also known as a subclass
*/

//-----------PARENT
class Animal {
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`${this.name} eats their food.`)
    }
}


//-----------------------Subclass

class Dog extends Animal {
    constructor(name, breed){
        //'super' has to be used befor we can use 'this' - otherwise it errors
        //inside the parentheses, we will pass in all properties that the parent class needs before assigning properties to the child class
        super(name)
        this.type = breed
    }

    play(){
        console.log(`The ${this.type} named ${this.name}`)
    }
}

const mastiff = new Dog('Maximus', 'Mastiff')

mastiff.play()
mastiff.eat()