// Stateless functional component
//   STATE    FUNCTION  COMPONENT


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options : []
        };
    }


    componentDidMount() {
        try {
            const json = localStorage.getItem("options")
            const options = JSON.parse(json)

            if (options) {
                this.setState( () => ({ options: options }))
            }
        } catch(e) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem("options", json)
        }    
    }

    componentWillUnmount() {
        console.log("COMPONENT WILL UNMOUNT")
    }
    // handleDeleteOptions() {
    //     this.setState(() => {
    //         return {
    //             options: []
    //         };
    //     });
    // }


    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }


    handleDeleteOption(optionToRemove) {
        this.setState( (prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option ;
            })
        }));
    }


    handlePick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber]

        alert(option)
    }


    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }


        this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
        
    }


    render() {
        //const title = "Indecision App"
        const subtitle = "Your life in the hands of a computer"

        return (
            <div>
                <Header 
                    //title = { title } 
                    subtitle = { subtitle } 
                />
                <Action 
                    hasOptions = { this.state.options.length > 0 } 
                    handlePick = { this.handlePick}
                />
                <Options 
                    options = { this.state.options } 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption = { this.handleAddOption }
                />
            </div>
        );
    }
}


// class Header extends React.Component {
//     render() {
//        //console.log(this.props)
//         return (
//             <div>
//                 <h1> {this.props.title} </h1>
//                 <h2> {this.props.subtitle} </h2>
//             </div>
//         );
//     }
// }


const Header = (props) => {
    return (
       <div>
            <h1>  { props.title }   </h1>
            { 
                props.subtitle && 
                <h2> { props.subtitle } </h2>
            }
        </div>
   )
}

Header.defaultProps = {
    title: "Default Title. Indecision"
}


// class Action extends React.Component {
//     render() {
//         return (
//             <div> 
//                 <button 
//                     disabled={ !this.props.hasOptions } 
//                     onClick={ this.props.handlePick }
//                 > 
//                     What Should I do? 
//                 </button>
//             </div>
//         );
//     }
// }


const Action = (props) => {
     return (
        <div>
            <button 
                disabled={ !props.hasOptions } 
                onClick={ props.handlePick }
            > 
            What Should I do? 
            </button>
        </div>
    )
 }


// class Options extends React.Component {
//     render() {
//         return (
//             <div> 
//                 {/*{
//                     this.props.options.map((option) => 
//                     <p key={option}> {option} </p>)
//                 }*/}

//                 <button 
//                     onClick = { this.props.handleDeleteOptions }> Remove All 
//                 </button>
//                 {
//                     this.props.options.map((option) => 
//                     <Option key={option} optionText={option} />)
//                 } 

//                 <br/>
                
//                 {/*{this.props.options.length}*/}
//                 {/* <Option /> */}
//             </div>
//         );
//     }
// }

const Options = (props) => {
    return (
        <div>
            <button 
                onClick = { props.handleDeleteOptions }> Remove All 
            </button>
            { props.options.length === 0 && <p> Add Things To Do! </p>}
                {
                    props.options.map((option) => 
                    <Option 
                        key = { option } 
                        optionText = { option } 
                        handleDeleteOption = { props.handleDeleteOption }
                    />)
                } 
                <br/>
        </div>
   )
}


// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 Option: {this.props.optionText}
//             </div>
//         )
//     }
// }


const Option = (props) => {
    return (
        <div>
            Option: { props.optionText }
            <button 
            onClick = { (e) => {
                props.handleDeleteOption(props.optionText)
            } }
            > Remove </button>
        </div>
   )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)

        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)


        this.setState(() => ({ error: error }));

        if (!error) {
            e.target.elements.option.value = ""
        }
    }

    render() {
        return (
            <div> 
                { this.state.error && <p> { this.state.error } </p> }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button> Add Option </button>
                </form>
            </div>
        );
    }
}

// const User = (props) => {
//     return (
//         <div>
//             <p> Name: {props.name} </p>
//             <p> Age: {props.age} </p>
//         </div>
//     )
// }
//ReactDOM.render(<User name = "Leandro" age = "18" />, document.getElementById("app"))



ReactDOM.render(<IndecisionApp />, document.getElementById("app"))