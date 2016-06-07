import React from "react";
import CreatToDos from "./create-todo";
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
                <CreatToDos createTaskS={this.createTask.bind(this)}/>
                <ToDosList todos={this.state.todos}/>
            </div>
        )
    }
    
    createTask(task) {
        this.state.todos.push({
            task: task,
            isCompleted: false
        });
        this.setState({
            todos: this.state.todos
        });
    }
}

export default App;