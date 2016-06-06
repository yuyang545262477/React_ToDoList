import React from "react";
import ToDosList from "./todos-list";

const todos = [
    {
        task: 'make a react tutorial',
        isCompleted: false
    }, {
        task: 'make a dinner',
        isCompleted: true
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        };
    }
    
    render() {
        return (
            <div>
                <h1>React ToDos App</h1>
                <ToDosList todos={this.state.todos}/>
            </div>
        )
    }
}

export default App;