class Visibility extends React.Component {
    constructor(props) {
        super(props)
        this.visibilityToggle = this.visibilityToggle.bind(this)
    
        this.state = {
            details: "Details Lorem Ipsum",
            visibility: false
        }
    }

    visibilityToggle() { 
        //visibility = !visibility;
        this.setState ((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        })

        console.log('Visibility Toggle')
    }


    render() {
        return (
            <div>
                <h1> Visibility Toggle </h1>
                <button onClick={ this.visibilityToggle }>
                { 
                    this.state.visibility ? "Hide Details" : "Show Details" 
                } 
                </button>

                { this.state.visibility && ( 
                <div> 
                    {this.state.details} 
                </div>
                )}
            </div>
        )
    }
}

ReactDOM.render (<Visibility />, document.getElementById("app"))
    
// console.log('App.js is running!');

// // JSX - JavaScript XML
// let visibility = false;

// const toggleVisibility = (e) => {
//     e.preventDefault();
//     visibility = !visibility;

//     renderApp()
// };

// const 

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1> Visibility Toggle </h1> 
//             <button onClick={ toggleVisibility }>
//                  { visibility ? "Hide Details" : "Show Details" } 
//             </button>

//             { visibility && ( 
//                 <div> 
//                     <p> Details lorem ipsum</p> 
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// }

// renderApp();