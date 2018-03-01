console.log('App.js is running!');

// JSX - JavaScript XML
const object = {
    title: "Indecision App",
    subtitle: "What you wanna do?",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    

    const option = e.target.elements.option.value
    

    if (option) {
       object.options.push(option);
       e.target.elements.option.value = "";
       console.log("Form Submitted!")
       console.log("Option: ", option)
       renderCounterApp()
    }
};

const removeOptions = () => {
    object.options = [];
    console.log("Removed All")

    renderCounterApp();
};

const onMakeDecision = () => {

    const randomNumber = Math.floor(Math.random() * object.options.length);
    const option = object.options[randomNumber]
    alert(option)
};


const appRoot = document.getElementById('app');

const numbers = [5, 10, 15, 20]

const renderCounterApp = () => {
    const templateButton = (
        <div>
            <h1> {object.title} </h1> 
            {object.subtitle && <h2> Subtitle: {object.subtitle} </h2>}
            <h3> Options: {object.options.length > 0 ? "Here are your options:  " + object.options : 'No options'}</h3>
            
            <button disabled={object.options.length === 0} onClick={onMakeDecision}> What Should I Do? </button>
            <button onClick={removeOptions}> Remove All </button>
            {
                numbers.map((number) => {
                    return <p key={number}> Number: {number} </p>
                })
            }
            <ol>   
            {
                object.options.map((option) => <li key={option}> {option}</li>)
            }
                
            </ol>
            <br/>
            <h3> {object.options.length} </h3>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button> Add Button </button>
             </form>
        </div>
    );

    ReactDOM.render(
        templateButton,
        appRoot
    );
}

renderCounterApp();