class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.addOne = this.addOne.bind(this)
        this.minusOne = this.minusOne.bind(this)
        this.resetCount = this.resetCount.bind(this)

        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        const stringCount = localStorage.getItem("counter")
        const counter = parseInt(stringCount, 10)

        if (!isNaN(counter)) {
            this.setState(() => ({ counter: counter }))
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.counter !== this.state.counter) {
            localStorage.setItem("counter", this.state.counter)
        }    
    }

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT")
    }


    addOne() { 
        // this.setState = ({
        //     counter: this.state.counter + 1
        // })

        this.setState ((prevState) => {
            return {
                counter: prevState.counter + 1
            }
        })

        console.log('addOne')
    }

    minusOne() { 
        this.setState ((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })

        console.log('minusOne')
    }

    resetCount() { 
        this.setState (() => {
            return {
                counter: 0
            }
        })

        console.log('resetCount')
    }


    render() {
        return (
            <div>
                <h1> Count: {this.state.counter} </h1>

                <button onClick={this.addOne}> + </button>
                <button onClick={this.minusOne}> - </button>
                <button onClick={this.resetCount}> Reset </button>
            </div>
        )
    }
}


ReactDOM.render (<Counter />, document.getElementById("app"))


// console.log('App.js is running!');

// // JSX - JavaScript XML
// const object = {
//     title: "Indecision App",
//     subtitle: "What you wanna do?",
//     options: ['One', 'Two']
// };

// const template = (
//     <div> 
//         <h1> {object.title} </h1> 
//         {object.subtitle && <h2> Subtitle: {object.subtitle} </h2>}
//         <h3> Options: {object.options.length > 0 ? "Here are your options:  " + object.options : 'No options'}</h3>
//         <ol>   
//             <li> Item One </li>
//             <li> Item Two </li>
//         </ol>
//     </div>
// );



// // const user = {
// //     name: 'Leandro',
// //     age: 18,
// //     location: 'Lisbon'
// // };


// // function getLocation(location) {
// //     if (location) {
// //         return <h3> Location: {location} </h3>;
// //     } else {
// //         return undefined;
// //     }
    
// // }

// // const templateTwo = (
// //     <div>
// //         <h1> Name: {user.name ? user.name : 'Anonymous'}</h1>
// //         {(user.age && user.age >= 18) && <h3> Age: {user.age} </h3>}
// //         {getLocation(user.location)}
// //         <h3>  </h3>
// //     </div>
// // );



// let count = 1;

// const addOne = () => {
//     count++
//     renderCounterApp();
//     console.log('addOne')
// }


// const minusOne = () => {
//     count--
//     renderCounterApp();
//     console.log('minusOne')
// }


// const resetCount = () => {
//     count = 0
//     renderCounterApp();
//     console.log('Reset Count')
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateButton = (
//         <div>
//             <h1> Count: {count} </h1>
    
//             <button onClick={addOne} > + </button>
//             <button onClick={minusOne} > - </button>
//             <button onClick={resetCount} > Reset </button>
//         </div>
//     );

//     ReactDOM.render(
//         templateButton,
//         appRoot
//     );
// }

// renderCounterApp();