class Person {
    constructor(name = 'Default Name', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        return "Hi " + `${this.name}` + "!"
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription() {
        let description = super.getDescription()

        if(this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description
    }
}


//////////////////////////////////////////////////////////////////
class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    HasHomeLocation() {
        return !!this.homeLocation
    }

    getDescription() {
        let description = super.getDescription()

        if(this.HasHomeLocation()) {
            description += ` He's from ${this.homeLocation}.`
        }
        return description
    }
}




const me = new Student("Leandro Almeida", 18, "Computer Science", "Lisbon, Portugal");
//console.log("me: ",me);
//console.log("me getGretting: ", me.getGretting());
console.log("me getDescription: ",me.getDescription());
//console.log("me hasMajor: ",me.hasMajor());

const other = new Student();
//console.log("other: ",other);
//console.log("other getGretting: ",other.getGretting());
console.log("other getDescription: ",other.getDescription());
//console.log("other hasMajor: ",other.hasMajor());