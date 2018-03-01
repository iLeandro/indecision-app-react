// arguments object - no longer bound with arrow functions
// this keyword - no longer bound

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));


const user = {
    name: "Leandro",
    cities: ["Lisbon", "New York", "Paris"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city + "!");
    }
};
    console.log(user.printPlacesLived());
    user.printPlacesLived();


    //Challenge Area
    //
    // Multiply - return new array where numbers have been multiply

    const Multiplier = {
        numbers: [1,2,3,4,5],
        multiplyBy: 2,
        multiply() {
            return this.numbers.map((number) => number * this.multiplyBy)
        }
    };

    console.log(Multiplier.multiply()); // [1, 2, 3] * 2 = [2, 4, 6]