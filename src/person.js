console.log("person.js is running!")

const isAdult = (age) => {
        if (age >= 18) {
            console.log("You're an adult")
        } else {
            console.log("yOu'Re sTiLl a ChIlD")
        }
}

const canDrink = (age) => {
    if (age >= 18) {
        console.log("Legal to Drink")
    } else {
        console.log("nOt LeGaL tO dRiNk")
    }
}

const isSenior = (age) => {
    if (age >= 65) {
        console.log("You're SENIOR")
    } else {
        console.log("yOu'Re sTiLl a ChIlD")
    }
}


export {
    isAdult,
    canDrink,
    isSenior as default
}