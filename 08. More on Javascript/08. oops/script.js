class Animal {
    constructor(name) {
        this.name = name
        console.log("Object for animal is created.");
    }

    eats() {
        console.log("Animal is eating");
    }

    jump() {
        console.log("jumped");
    }
}

//inheritance
class Cat extends Animal {
    constructor(name) {
        super(name)
        console.log("Cat object is created");
    }

    //overriding
    eats() {
        // super.eats()
        console.log("cat eats");
    }

    // static function can be called without the object
    static hello() { 
        console.log("Meow");
    }

    //getters and setters
    set newName(newName) {
        this.name = newName
    } 
    get petName() {
        return this.name
    }
}



let a = new Animal("Jam")
console.log(a);
a.eats()
console.log(a.name);
a.jump()

console.log("");

let c = new Cat("Sam")
console.log(c);
c.eats()
c.jump()

Cat.hello() //static function

console.log(c);
c.newName = "Zap"
console.log(c);
console.log(c.petName);
console.log(c.name);

// console.clear();

console.log(c instanceof Cat);
console.log(c instanceof Animal);
console.log(a instanceof Animal);
console.log(a instanceof Cat);