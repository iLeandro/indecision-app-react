//import validator from "validator"
import React from "react"
import ReactDOM from "react-dom"

//Components
import IndecisionApp from "./components/IndecisionApp"


//Styles
import "normalize.css/normalize.css";
import "./styles/styles.scss"

ReactDOM.render(<IndecisionApp />, document.getElementById("app"))


// class OldSyntax {
//     constructor() {
//         this.name = "KLeandro"
//     }
// }
// const oldSyntax = new OldSyntax()
// console.log(oldSyntax)

// // ------------------

// class NewSyntax {
//     name = "Jenk"


//     getGreeting = () => {
//         return `Hi. my name is ${this.name}.`
//     }
// }
// const newSyntax = new NewSyntax()
// const newgetGreeting = newSyntax.getGreeting
// console.log(newgetGreeting())
// console.log(newSyntax)

// console.log(validator.isEmail("test@gmail.pt"))
// const template = <p>this is jsx from webpack </p>
// ReactDOM.render(template, document.getElementById("app"))
// import isSenior, { isAdult, canDrink} from "./person"
// console.log("app.js is running!!!")
// console.log(isAdult(18))
// console.log(canDrink(18))
// console.log(isSenior(65))