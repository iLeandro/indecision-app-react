// function square(x) {
//     return x * x;
// };

// console.log(square(3));


// // const squareArrow = (x) => {
// //     return x * x;
// // };


// const squareArrow = (x) => x * x; 

// console.log(squareArrow(4));


// Challenge - Use arrow function
// getFirstnAME('Mike Smith') -> "Mike"
// Create regular arrow function
//
// Create arrow function using shorthand syntax


const getFirstName = (fullName) => {
    return fullName.split(" ")[0];
};

console.log(getFirstName('Leandro Almeida'));

 ////////////////////////////////

const getName = (fullName) => fullName.split(" ")[1]; 
 
console.log(getName('Leandro Almeida'));